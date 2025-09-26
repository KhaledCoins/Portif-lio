import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-lg font-medium text-gray-900">Eduardo Khaled</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-purple-800 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-purple-800 transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="text-gray-600 hover:text-purple-800 transition-colors"
            >
              Conquistas
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-purple-800 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-purple-800 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('hobbies')}
              className="text-gray-600 hover:text-purple-800 transition-colors"
            >
              Hobbies
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-purple-800 transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-gray-600 hover:text-purple-800 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left py-2 text-gray-600 hover:text-purple-800 transition-colors"
              >
                Experiência
              </button>
              <button
                onClick={() => scrollToSection('achievements')}
                className="text-left py-2 text-gray-600 hover:text-purple-800 transition-colors"
              >
                Conquistas
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left py-2 text-gray-600 hover:text-purple-800 transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left py-2 text-gray-600 hover:text-purple-800 transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('hobbies')}
                className="text-left py-2 text-gray-600 hover:text-purple-800 transition-colors"
              >
                Hobbies
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-gray-600 hover:text-purple-800 transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}