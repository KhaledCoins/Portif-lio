import { Code, Database, Globe, Palette, Brain, GitBranch, Server, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pt: {
    title: 'Habilidades',
    subtitle: 'Tecnologias e ferramentas que domino e utilizo para criar soluções inovadoras',
    level: 'Nível',
    otherSkills: 'Outras Competências',
    skills: [
      {
        title: "Desenvolvimento Web",
        description: "Python, JavaScript, Node.js, HTML, CSS",
        level: 25
      },
      {
        title: "Controle de Versão",
        description: "Git, GitHub",
        level: 50
      },
      {
        title: "Banco de Dados",
        description: "PostgreSQL, SQL",
        level: 30
      },
      {
        title: "UX Research & Design",
        description: "Figma, Prototipagem",
        level: 65
      },
      {
        title: "Análise de Dados",
        description: "Excel, LabVIEW, KPIs",
        level: 45
      },
      {
        title: "Hardware & Blockchain",
        description: "Mineração ETH, GPUs, Criptomoedas",
        level: 55
      },
      {
        title: "Gestão de Projetos",
        description: "Scrum, Kanban, Estratégia",
        level: 85
      },
      {
        title: "Soluções Fintech",
        description: "Análise Estratégica, Inovação",
        level: 80
      }
    ],
    additionalSkills: [
      'Olimpíadas Científicas',
      'Banca de Questões',
      'Mineração Ethereum',
      'Hardware Assembly',
      'Matemática Avançada',
      'Multicálculo',
      'Astronomia & Astrofísica',
      'Robótica Competitiva',
      'Gestão Energética'
    ]
  },
  en: {
    title: 'Skills',
    subtitle: 'Technologies and tools I master and use to create innovative solutions',
    level: 'Level',
    otherSkills: 'Other Competencies',
    skills: [
      {
        title: "Web Development",
        description: "Python, JavaScript, Node.js, HTML, CSS",
        level: 25
      },
      {
        title: "Version Control",
        description: "Git, GitHub",
        level: 50
      },
      {
        title: "Database",
        description: "PostgreSQL, SQL",
        level: 30
      },
      {
        title: "UX Research & Design",
        description: "Figma, Prototyping",
        level: 65
      },
      {
        title: "Data Analysis",
        description: "Excel, LabVIEW, KPIs",
        level: 45
      },
      {
        title: "Hardware & Blockchain",
        description: "ETH Mining, GPUs, Cryptocurrencies",
        level: 55
      },
      {
        title: "Project Management",
        description: "Scrum, Kanban, Strategy",
        level: 85
      },
      {
        title: "Fintech Solutions",
        description: "Strategic Analysis, Innovation",
        level: 80
      }
    ],
    additionalSkills: [
      'Scientific Olympiads',
      'Question Banks',
      'Ethereum Mining',
      'Hardware Assembly',
      'Advanced Mathematics',
      'Multivariable Calculus',
      'Astronomy & Astrophysics',
      'Competitive Robotics',
      'Energy Management'
    ]
  }
};

export function SkillsSectionContent() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [Code, GitBranch, Database, Palette, Brain, Server, Briefcase, Globe];

  return (
    <section id="skills" className="py-20 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.map((skill, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-800 transition-colors">
                    <IconComponent className="h-8 w-8 text-purple-800 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">{t.level}</span>
                      <span className="text-xs text-purple-800">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-800 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl text-gray-900 mb-8">{t.otherSkills}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t.additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-purple-800 hover:text-purple-800 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}