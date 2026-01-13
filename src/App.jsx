import React, { useEffect, useMemo, useState, Suspense } from "react";
import { useLanguage } from "./context/LanguageContext";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";

import Container from "./components/Container";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

// Lazy load heavy components to split the bundle
const ConstitutionSection = React.lazy(() => import("./components/ConstitutionSection"));
const EconomySection = React.lazy(() => import("./components/EconomySection"));
const TaxSection = React.lazy(() => import("./components/TaxSection"));
const EnergySection = React.lazy(() => import("./components/EnergySection"));
const TechEcosystem = React.lazy(() => import("./components/TechEcosystem"));
const EducationSection = React.lazy(() => import("./components/EducationSection"));
const DefenseSection = React.lazy(() => import("./components/DefenseSection"));
const MigrationPolicy = React.lazy(() => import("./components/MigrationPolicy"));
const Timeline = React.lazy(() => import("./components/Timeline"));
const FAQSection = React.lazy(() => import("./components/FAQSection"));
const CTASection = React.lazy(() => import("./components/CTASection"));
const DesignerManifesto = React.lazy(() => import("./components/DesignerManifesto"));

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { t, language } = useLanguage();

  const navLinks = useMemo(() => [
    { name: t('nav.foundations'), href: "#constitution" },
    { name: t('nav.economy'), href: "#economy" },
    { name: t('nav.taxes'), href: "#tax" },
    { name: t('nav.energy'), href: "#energy" },
    { name: t('nav.tech'), href: "#tech" },
    { name: t('nav.education'), href: "#education" },
    { name: t('nav.defense'), href: "#army" },
  ], [t]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-500/30">
      <Navigation
        scrolled={scrolled}
        navLinks={navLinks}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleNav={handleNav}
      />

      <HeroSection />
      <StatsBar />


      <main>
        <Suspense fallback={<Loading />}>
          <ConstitutionSection />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <EconomySection />
        </Suspense>

        <Container>
          <div className="space-y-0 py-24">
            <Suspense fallback={<Loading />}>
              <TaxSection />
              <EnergySection />
              <TechEcosystem />
              <EducationSection />
              <DefenseSection />
              <MigrationPolicy />
              <Timeline />
              <FAQSection />
              <CTASection />
            </Suspense>
          </div>
        </Container>
      </main>

      <Suspense fallback={<Loading />}>
        <DesignerManifesto />
      </Suspense>

      <Footer />
    </div>
  );
}
