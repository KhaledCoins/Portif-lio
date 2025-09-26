import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl mb-2">Eduardo Khaled</h3>
            <p className="text-gray-400">Estudante de Ciência da Computação | Insper</p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>em React & TypeScript</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Eduardo Khaled. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}