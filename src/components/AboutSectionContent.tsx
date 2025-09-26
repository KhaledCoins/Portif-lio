import aboutImage from 'figma:asset/b3638bf7a80535a849574b30123a9b9399c0e5bb.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pt: {
    title: 'Sobre Mim',
    hackathon: 'Hackathon IA 2025',
    graduation: 'Graduação Prevista',
    role: 'Consultor',
    paragraphs: [
      'Desde criança, a curiosidade sobre como a tecnologia funciona sempre me moveu — do primeiro computador desmontado ainda na infância até a construção de uma **mineradora de Ethereum** no ensino médio. Essa inquietude intelectual me levou a conquistar **23 medalhas em olimpíadas científicas** e diversas experiências em equipes competitivas que desenvolveram minhas habilidades em programação, eletrônica, mecânica e trabalho em equipe.',
      'Atualmente, sou estudante de **Ciência da Computação no Insper**, após uma passagem pelo INTELI, onde participei de projetos em parceria com **Google for Education** e a **Faculdade de Medicina da USP**. Também atuei como consultor de análise na **Kuboo Soluções Financeiras**, contribuindo para o desenvolvimento tecnológico e análise estratégica no setor financeiro.',
      'Minha paixão está na **interseção entre tecnologia e negócios**. Participo de hackathons para ampliar meus conhecimentos em diversas áreas de tech e busco aplicar conhecimentos técnicos para resolver problemas reais, criar impacto positivo e gerar valor estratégico para organizações.'
    ]
  },
  en: {
    title: 'About Me',
    hackathon: 'AI Hackathon 2025',
    graduation: 'Expected Graduation',
    role: 'Consultant',
    paragraphs: [
      'Since childhood, curiosity about how technology works has always driven me — from the first computer I disassembled as a child to building an **Ethereum mining rig** in high school. This intellectual restlessness led me to achieve **23 medals in scientific olympiads** and various experiences in competitive teams that developed my skills in programming, electronics, mechanics, and teamwork.',
      'Currently, I am a **Computer Science student at Insper**, after a period at INTELI, where I participated in projects in partnership with **Google for Education** and the **University of São Paulo Medical School**. I also worked as an analysis consultant at **Kuboo Financial Solutions**, contributing to technological development and strategic analysis in the financial sector.',
      'My passion lies at the **intersection of technology and business**. I participate in hackathons to expand my knowledge in various tech areas and seek to apply technical knowledge to solve real problems, create positive impact, and generate strategic value for organizations.'
    ]
  }
};

export function AboutSectionContent() {
  const { language } = useLanguage();
  const t = translations[language];

  const renderParagraph = (text: string, index: number) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={index}>
        {parts.map((part, partIndex) => 
          partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
        )}
      </p>
    );
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={aboutImage}
                  alt="Eduardo Khaled apresentando"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-900 text-white px-6 py-3 rounded-lg shadow-lg">
                <span className="text-sm">{t.hackathon}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                {t.title}
              </h2>
              <div className="w-16 h-1 bg-purple-800 mb-6"></div>
            </div>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              {t.paragraphs.map((paragraph, index) => renderParagraph(paragraph, index))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl text-purple-800 mb-2">2029</div>
                <div className="text-sm text-gray-600">{t.graduation}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl text-purple-800 mb-2">Kuboo</div>
                <div className="text-sm text-gray-600">{t.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}