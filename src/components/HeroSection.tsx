import heroImage from 'figma:asset/2376371edab03cdce21dce7dac7f654a364d1902.png';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.05),transparent_50%)]"></div>
      
      {/* Geometric decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-purple-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-red-100 rounded-lg rotate-45 opacity-40"></div>
      <div className="absolute top-1/2 right-8 w-2 h-32 bg-gradient-to-b from-purple-200 to-transparent rounded-full opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Name with gradient effect */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
                  Eduardo Khaled
                </h1>
                <div className="absolute -bottom-2 left-0 lg:left-0 w-24 h-1 bg-gradient-to-r from-purple-800 to-red-600 rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              {/* Education and personal info with modern styling */}
              <div className="space-y-3">
                <a 
                  href="https://www.insper.edu.br/pt/cursos/graduacao/ciencia-da-computacao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full border border-purple-200 hover:from-purple-100 hover:to-purple-200 hover:border-purple-300 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-2 h-2 bg-purple-900 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-300"></div>
                  <h2 className="text-lg sm:text-xl font-medium text-purple-900 group-hover:text-purple-950 transition-colors duration-300">
                    Estudante de Ciência da Computação
                  </h2>
                </a>
                
                <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
                  <a 
                    href="https://www.insper.edu.br/pt/home" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 rounded-full border border-red-200 hover:from-red-100 hover:to-red-200 hover:border-red-300 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="text-lg font-semibold text-red-600 tracking-wide group-hover:text-red-700 transition-colors duration-300">
                      INSPER
                    </div>
                  </a>
                  
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full border border-gray-200">
                    <div className="w-2 h-2 bg-purple-900 rounded-full"></div>
                    <div className="text-lg font-medium text-gray-700">
                      19 anos
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote with elegant styling */}
              <div className="relative max-w-2xl mx-auto lg:mx-0">
                <div className="absolute top-0 left-0 text-6xl text-purple-200 font-serif leading-none">"</div>
                <p className="text-xl sm:text-2xl text-gray-600 italic leading-relaxed pl-8 pr-4 py-2">
                  Atuando na interseção entre tecnologia e negócios para criar soluções de impacto
                </p>
                <div className="absolute bottom-0 right-0 text-6xl text-purple-200 font-serif leading-none transform rotate-180">"</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-purple-900 to-purple-950 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Ver Projetos
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-purple-900 hover:text-purple-900 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Entre em Contato
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image container */}
              <div className="relative group">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-100 group-hover:ring-purple-200 transition-all duration-300">
                  <ImageWithFallback
                    src={heroImage}
                    alt="Eduardo Khaled"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Subtle floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full shadow-md animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                <div className="absolute top-20 -left-3 w-4 h-4 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-sm animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute bottom-16 -right-4 w-3 h-3 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full shadow-sm animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-purple-900 transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}