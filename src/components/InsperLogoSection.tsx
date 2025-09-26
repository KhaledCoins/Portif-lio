import { ImageWithFallback } from './figma/ImageWithFallback';

export function InsperLogoSection() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-white py-8 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621008945448-513cef3a463d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnNwZXIlMjB1bml2ZXJzaXR5JTIwbG9nbyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTg4NDI0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Insper Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl text-gray-900 tracking-tight">
                INSPER
              </span>
              <span className="text-sm text-gray-600">
                Instituto de Ensino e Pesquisa
              </span>
            </div>
          </div>
          
          <div className="hidden md:block h-8 w-px bg-gray-300"></div>
          
          <div className="hidden md:flex flex-col text-center">
            <span className="text-sm text-purple-800">
              Ciência da Computação
            </span>
            <span className="text-xs text-gray-500">
              2025 - 2029
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}