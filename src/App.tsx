import React, { useState } from 'react';
import { LoadingAnimation } from './components/LoadingAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { YouthLeagueBanner } from './components/YouthLeagueBanner';
import { LeagueSection } from './components/LeagueSection';
import { ImpactMentorshipSection } from './components/ImpactMentorshipSection';
import { GallerySection } from './components/GallerySection';
import { GalleryPage } from './components/GalleryPage';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { JoinModal } from './components/JoinModal';
import { DonateModal } from './components/DonateModal';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

// Standalone Page Imports
import { AboutPage } from './components/AboutPage';
import { ProgramsPage } from './components/ProgramsPage';
import { TeamsPage } from './components/TeamsPage';
import { LeaguePage } from './components/LeaguePage';
import { ImpactPage } from './components/ImpactPage';
import { StoriesPage } from './components/StoriesPage';
import { SafeguardingPage } from './components/SafeguardingPage';
import { DonatePage } from './components/DonatePage';
import { RegisterPage } from './components/RegisterPage';
import { FaqPage } from './components/FaqPage';
import { ContactPage } from './components/ContactPage';
import { AdminDashboardPage } from './components/AdminDashboardPage';

export function App() {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isJoinOpen, setIsJoinOpen] = useState<boolean>(false);
  const [isDonateOpen, setIsDonateOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleReplayLoading = () => {
    setShowLoading(true);
  };

  const navigateTo = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activeSection === 'admin') {
    return (
      <div className="min-h-screen bg-[#FFF7E8] text-[#111827] font-sans selection:bg-[#FDBD55] selection:text-[#123764]">
        <AdminDashboardPage
          onBackToHome={() => navigateTo('home')}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#111827] font-sans selection:bg-[#FDBD55] selection:text-[#123764] flex flex-col">
      {/* Short Branded Loading Animation (< 2 seconds) */}
      {showLoading && (
        <LoadingAnimation
          onComplete={() => setShowLoading(false)}
          isOverlay={true}
        />
      )}

      {/* Main Website Header & Navigation */}
      <Navbar
        onOpenJoin={() => setIsJoinOpen(true)}
        onOpenDonate={() => setIsDonateOpen(true)}
        onReplayLoading={handleReplayLoading}
        activeSection={activeSection}
        setActiveSection={navigateTo}
      />

      {/* Main Content View Switcher */}
      <main className="flex-grow">
        {activeSection === 'about' && (
          <AboutPage
            onBackToHome={() => navigateTo('home')}
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
            onOpenSafeguarding={() => navigateTo('safeguarding')}
          />
        )}

        {activeSection === 'programs' && (
          <ProgramsPage
            onBackToHome={() => navigateTo('home')}
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activeSection === 'teams' && (
          <TeamsPage
            onBackToHome={() => navigateTo('home')}
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activeSection === 'league' && (
          <LeaguePage
            onBackToHome={() => navigateTo('home')}
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activeSection === 'impact' && (
          <ImpactPage
            onBackToHome={() => navigateTo('home')}
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activeSection === 'stories' && (
          <StoriesPage
            onBackToHome={() => navigateTo('home')}
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activeSection === 'gallery' && (
          <GalleryPage
            onBackToHome={() => navigateTo('home')}
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activeSection === 'safeguarding' && (
          <SafeguardingPage
            onBackToHome={() => navigateTo('home')}
          />
        )}

        {activeSection === 'donate' && (
          <DonatePage
            onBackToHome={() => navigateTo('home')}
          />
        )}

        {activeSection === 'register' && (
          <RegisterPage
            onBackToHome={() => navigateTo('home')}
          />
        )}

        {activeSection === 'faq' && (
          <FaqPage
            onBackToHome={() => navigateTo('home')}
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activeSection === 'contact' && (
          <ContactPage
            onBackToHome={() => navigateTo('home')}
          />
        )}

        {activeSection === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onOpenJoin={() => setIsJoinOpen(true)}
              onOpenDonate={() => navigateTo('donate')}
            />

            {/* Round Statistic Counters & Impact */}
            <StatsSection />

            {/* About Kakuma Football Academy (CBO) & Mission */}
            <AboutSection />

            {/* Academy Divisions & Programs */}
            <ProgramsSection
              onOpenJoin={() => setIsJoinOpen(true)}
            />

            {/* 3-Column Youth League & Hero Quote Carousel Banner */}
            <YouthLeagueBanner
              onOpenJoin={() => setIsJoinOpen(true)}
              onOpenDonate={() => setIsDonateOpen(true)}
            />

            {/* Kakuma Youth League & Match Center */}
            <LeagueSection />

            {/* Mentorship & Mentee Spotlights */}
            <ImpactMentorshipSection />

            {/* Photo Gallery Summary */}
            <GallerySection
              onOpenFullGallery={() => navigateTo('gallery')}
            />

            {/* Frequently Asked Questions (Parents & Volunteers) */}
            <FaqSection
              onOpenJoin={() => navigateTo('register')}
              onOpenDonate={() => navigateTo('donate')}
            />

            {/* Direct Contact Form & Academy Headquarters */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenJoin={() => setIsJoinOpen(true)}
        onOpenDonate={() => setIsDonateOpen(true)}
        setActiveSection={navigateTo}
      />

      {/* Interactive Application & Donation Modals */}
      <JoinModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
      />

      <DonateModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />

      <CookieConsent />
    </div>
  );
}

export default App;
