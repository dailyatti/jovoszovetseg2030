const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'translations', 'translations.js');
let content = fs.readFileSync(file, 'utf8');

// The core problem: Hungarian quotes „ (U+201E) open, and " (U+0022) close
// inside JS strings delimited by " (U+0022)
// This causes the parser to see the closing " as end of string
// 
// We need to find patterns like: „word(s)" inside double-quoted strings
// and replace them with escaped quotes

// Strategy: Find all lines, process each one
const lines = content.split('\n');
let fixCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Pattern 1: \" followed by word(s) then unescaped " (from prior „ replacement)
    // This happens when „ was already replaced by \" but the closing " is dangling
    // Check for patterns like: \" some text " (where the second " prematurely ends string)
    // We look for \" preceding a " that's NOT at end of string definition
    
    // Pattern 2: Find „ (still existing) and its matching " 
    // The „ (U+201E) matches with either " (U+201C/201D) or plain "
    if (line.includes('\u201e') || line.includes('\u201c') || line.includes('\u201d')) {
        // Replace all Hungarian-style quotes with escaped double quotes
        let newLine = line;
        newLine = newLine.replace(/\u201e/g, '\\"');
        newLine = newLine.replace(/\u201c/g, '\\"');
        newLine = newLine.replace(/\u201d/g, '\\"');
        if (newLine !== line) {
            lines[i] = newLine;
            fixCount++;
            console.log(`Fixed Hungarian quotes on line ${i+1}`);
        }
    }
}

// Now handle the case where „ was already replaced with \" but the end quote " is a raw "
// Example: ...\\\"rabszolgatörvényt" eltöröljük...
// This should become: ...\\\"rabszolgatörvényt\\\" eltöröljük...
// We find these by looking for \" followed by text, then a raw " that's NOT at end of value

content = lines.join('\n');

// Specific fixes for known problematic strings:
// 1. „szabad drog" -> \"szabad drog\"  (warning line)
content = content.replace(
    /nem \\"szabad drog" /g,
    'nem \\"szabad drog\\" '
);

// 2. „rabszolgatörvényt" -> \"rabszolgatörvényt\" (labor law p1)
content = content.replace(
    /\\"rabszolgatörvényt" elt/g,
    '\\"rabszolgatörvényt\\" elt'
);

// 3. „vagy ott vagy..." -> \"vagy ott vagy...\" (labor law box)
content = content.replace(
    /\\"vagy ott vagy egész nap 12 órában, vagy jön helyetted más"/g,
    '\\"vagy ott vagy egész nap 12 órában, vagy jön helyetted más\\"'
);

// The GPU/compute one - „izom" 
content = content.replace(
    /\(AI \\"izom"\)/g,
    '(AI \\"izom\\")'
);

// Also do the EN section: 'slave law' pattern
content = content.replace(
    /the so-called 'slave law'/g,
    "the so-called 'slave law'"
);

fs.writeFileSync(file, content, 'utf8');
console.log(`Done. Fixed ${fixCount} lines total.`);
