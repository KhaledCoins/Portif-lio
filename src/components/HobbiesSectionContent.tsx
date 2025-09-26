import { Heart, Dumbbell, Music } from 'lucide-react';
import basketballImage from 'figma:asset/1c5c426c5a4f8d3f02a5aff2146a07f49655582c.png';
import musicImage from 'figma:asset/2b33d20aad6262cb01a4b8a0d6e0baa13c853ed5.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pt: {
    title: 'Hobbies & Interesses',
    subtitle: 'Atividades que me inspiram, equilibram minha rotina e contribuem para meu desenvolvimento pessoal',
    mixingProduction: 'Mixagem & Produção',
    advanced: 'Avançado',
    enthusiast: 'Entusiasta',
    trajectory: 'São José dos Campos → Insper',
    hobbies: [
      {
        title: 'Basquete',
        description: 'Mais que um esporte, o basquete é uma das minhas maiores paixões. Joguei pela base em São José dos Campos e hoje treino no Insper. Essa vivência me ensinou lições valiosas: trabalho em equipe, disciplina, resiliência, pensamento estratégico e liderança em momentos de pressão — todas competências que aplico também no meu desenvolvimento acadêmico e profissional.',
        color: 'text-orange-600 bg-orange-100',
        level: 'Avançado'
      },
      {
        title: 'Fitness',
        description: 'Treinos de força e condicionamento físico são parte essencial da minha rotina. Considero o fitness um hobby avançado, que me proporcionou autodisciplina, consistência e a capacidade de manter o foco em objetivos de longo prazo — habilidades fundamentais para qualquer desafio no mercado de trabalho.',
        color: 'text-red-600 bg-red-100',
        level: 'Avançado'
      },
      {
        title: 'Música',
        description: 'A música é minha forma de expressão criativa e equilíbrio. Ela me ajuda a manter concentração, foco e a expandir minha sensibilidade artística, valores que também influenciam minha abordagem em projetos de tecnologia e inovação.',
        color: 'text-blue-600 bg-blue-100',
        level: 'Entusiasta'
      }
    ]
  },
  en: {
    title: 'Hobbies & Interests',
    subtitle: 'Activities that inspire me, balance my routine and contribute to my personal development',
    mixingProduction: 'Mixing & Production',
    advanced: 'Advanced',
    enthusiast: 'Enthusiast',
    trajectory: 'São José dos Campos → Insper',
    hobbies: [
      {
        title: 'Basketball',
        description: 'More than a sport, basketball is one of my greatest passions. I played in the youth league in São José dos Campos and now train at Insper. This experience taught me valuable lessons: teamwork, discipline, resilience, strategic thinking and leadership under pressure — all competencies that I also apply in my academic and professional development.',
        color: 'text-orange-600 bg-orange-100',
        level: 'Advanced'
      },
      {
        title: 'Fitness',
        description: 'Strength training and physical conditioning are an essential part of my routine. I consider fitness an advanced hobby, which has given me self-discipline, consistency and the ability to maintain focus on long-term goals — fundamental skills for any challenge in the job market.',
        color: 'text-red-600 bg-red-100',
        level: 'Advanced'
      },
      {
        title: 'Music',
        description: 'Music is my form of creative expression and balance. It helps me maintain concentration, focus and expand my artistic sensitivity, values that also influence my approach to technology and innovation projects.',
        color: 'text-blue-600 bg-blue-100',
        level: 'Enthusiast'
      }
    ]
  }
};

export function HobbiesSectionContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-purple-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-20">
          {t.hobbies.map((hobby, index) => {
            const IconComponent = index === 0 ? Heart : index === 1 ? Dumbbell : Music;
            const isBasketball = hobby.title === 'Basquete' || hobby.title === 'Basketball';
            const isMusic = hobby.title === 'Música' || hobby.title === 'Music';
            
            return (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
              >
                {/* Image/Icon */}
                <div className="flex-1 flex justify-center">
                  {isBasketball ? (
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={basketballImage}
                        alt="Eduardo jogando basquete"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : isMusic ? (
                    <div className="space-y-4">
                      <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl relative group">
                        <ImageWithFallback
                          src={musicImage}
                          alt="Eduardo mixando música no DJ"
                          className="w-full h-full object-cover brightness-95 contrast-105 group-hover:brightness-100 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-60"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="bg-blue-100 text-blue-800 rounded-lg px-4 py-2 shadow-sm">
                          <div className="flex items-center gap-2 text-sm">
                            <Music className="h-4 w-4" />
                            <span>{t.mixingProduction}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`w-80 h-80 lg:w-96 lg:h-96 rounded-2xl ${hobby.color.split(' ')[1]} flex items-center justify-center shadow-2xl`}>
                      <IconComponent className="h-32 w-32 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${hobby.color} mb-6`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                      {hobby.title}
                    </h3>
                    <div className="w-16 h-1 bg-purple-800 mb-6"></div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {hobby.description}
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {hobby.level}
                    </span>
                    {isBasketball && (
                      <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm">
                        {t.trajectory}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}