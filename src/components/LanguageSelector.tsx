import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg">
      <Globe className="h-4 w-4 text-gray-600" />
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
          language === 'pt'
            ? 'bg-purple-900 text-white'
            : 'text-gray-600 hover:text-purple-900 hover:bg-purple-50'
        }`}
      >
        PT
      </button>
      <div className="w-px h-4 bg-gray-300"></div>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-purple-900 text-white'
            : 'text-gray-600 hover:text-purple-900 hover:bg-purple-50'
        }`}
      >
        EN
      </button>
    </div>
  );
}