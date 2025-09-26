import { Heart, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pt: {
    madeWith: 'Feito com',
    and: 'e',
    by: 'por',
    rights: 'Todos os direitos reservados.',
    portfolio: 'Portfólio Eduardo Khaled'
  },
  en: {
    madeWith: 'Made with',
    and: 'and',
    by: 'by',
    rights: 'All rights reserved.',
    portfolio: 'Eduardo Khaled Portfolio'
  }
};

export function FooterContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-300">{t.madeWith}</span>
            <Heart className="h-5 w-5 text-red-500" />
            <span className="text-gray-300">{t.and}</span>
            <Code className="h-5 w-5 text-purple-400" />
            <span className="text-gray-300">{t.by}</span>
            <span className="text-white font-medium">Eduardo Khaled</span>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 {t.portfolio}. {t.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}