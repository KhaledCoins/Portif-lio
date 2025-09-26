import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { NavigationContent } from './components/NavigationContent';
import { HeroSectionContent } from './components/HeroSectionContent';
import { AboutSectionContent } from './components/AboutSectionContent';
import { ExperienceSectionContent } from './components/ExperienceSectionContent';
import { AchievementsSectionContent } from './components/AchievementsSectionContent';
import { SkillsSectionContent } from './components/SkillsSectionContent';
import { ProjectsSectionContent } from './components/ProjectsSectionContent';
import { HobbiesSectionContent } from './components/HobbiesSectionContent';
import { ContactSectionContent } from './components/ContactSectionContent';
import { FooterContent } from './components/FooterContent';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageSelector />
        <NavigationContent />
        <main>
          <HeroSectionContent />
          <AboutSectionContent />
          <ExperienceSectionContent />
          <AchievementsSectionContent />
          <SkillsSectionContent />
          <ProjectsSectionContent />
          <HobbiesSectionContent />
          <ContactSectionContent />
        </main>
        <FooterContent />
      </div>
    </LanguageProvider>
  );
}