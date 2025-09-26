import { Building2, GraduationCap, Trophy, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      type: 'work',
      icon: Building2,
      title: 'Kuboo Soluções Financeiras',
      role: 'Consultor de Análise',
      period: '2024',
      description: 'Prestei consultoria especializada em análise estratégica para soluções voltadas ao setor financeiro, contribuindo com desenvolvimento tecnológico e projetos de inovação.',
      skills: ['Análise de Patrimônio', 'Economia Aplicada', 'PostgreSQL', 'Análise Estratégica', 'Fintech']
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Insper - Instituto de Ensino e Pesquisa',
      role: 'Ciência da Computação',
      period: '2025 - 2029',
      description: 'Graduação em Ciência da Computação com foco em desenvolvimento de soluções tecnológicas e análise de negócios.',
      skills: ['Algoritmos', 'Estruturas de Dados', 'Desenvolvimento Web', 'Business Analytics']
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'INTELI - Instituto de Tecnologia e Liderança',
      role: 'Ciência da Computação',
      period: '2025 - 2028 (Parcial)',
      description: 'Durante minha passagem pelo INTELI, desenvolvi projetos em parceria com Google for Education e a Faculdade de Medicina da USP.',
      skills: ['Gestão de Projetos', 'Inovação', 'Liderança', 'Parcerias Estratégicas']
    },
    {
      type: 'achievement',
      icon: Trophy,
      title: 'Olimpíadas Científicas',
      role: '23 Medalhas no Ensino Médio',
      period: '2020 - 2024',
      description: 'Conquista de 23 medalhas em olimpíadas científicas, incluindo ouro na OBRL e OBA, prata na OBR e Singa Math, seletivas internacionais IOAA e Conesul, além de participação em bancas de questões.',
      skills: ['Resolução de Problemas', 'Pensamento Analítico', 'Matemática', 'Astronomia', 'Robótica']
    },
    {
      type: 'achievement',
      icon: Trophy,
      title: 'FRC Alphabots 1860',
      role: 'Membro da Equipe de Robótica',
      period: '2019 - 2023',
      description: 'Participação por 4 anos no time de robótica FRC, incluindo 3 representações do Brasil em competições internacionais nos EUA e networking em algumas das top 10 universidades dos Estados Unidos.',
      skills: ['Robótica', 'SolidWorks', 'Eletrônica', 'Trabalho em Equipe', 'Networking Internacional', 'Competição Internacional']
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work': return 'text-purple-800 bg-purple-100';
      case 'education': return 'text-green-600 bg-green-100';
      case 'achievement': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Experiência
          </h2>
          <div className="w-16 h-1 bg-purple-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Minha trajetória profissional e acadêmica na interseção entre tecnologia e negócios
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="relative flex items-start gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-purple-800 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${getIconColor(exp.type)} md:ml-16`}>
                    <IconComponent className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-purple-800 mb-2">
                          {exp.role}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl text-gray-900 mb-4">
              Objetivo Profissional
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Atuar na interseção entre tecnologia e negócios, contribuindo para o desenvolvimento 
              de soluções digitais que gerem valor estratégico para empresas. Busco aplicar 
              conhecimentos em análise de dados, inovação e gestão de projetos para apoiar a 
              tomada de decisão e impulsionar o crescimento organizacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}