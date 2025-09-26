import { ExternalLink, Github, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import dataGuardiansImage from 'figma:asset/605909c3d76f0e36c3370ff5a067de5499d406cd.png';
import kubooLogo from 'figma:asset/96e0c934ccb8b49755f2f03e94adc0a7ec415479.png';
import hackathonImage from 'figma:asset/e820ae06b52a6740111b5bc264e47b3264e9f1fd.png';
import roboticsImage from 'figma:asset/3f66744d2ca80a5e11f35405f848921405b5e412.png';
import uspMedicinaImage from 'figma:asset/2591696b7d8368b9775f3907b1a7f50db90ea008.png';

export function ProjectsSection() {
  const projects = [
    {
      title: "Mineiradora Ethereum - 24 GPUs",
      description: "Construção e operação independente de uma mineiradora de Ethereum com 24 placas de vídeo. Projeto completo incluindo hardware, configuração, otimização e gestão energética para mineração de criptomoedas.",
      image: "https://images.unsplash.com/photo-1667808929648-a3633dadf9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcmV1bSUyMG1pbmluZyUyMGNyeXB0b2N1cnJlbmN5JTIwaGFyZHdhcmV8ZW58MXx8fHwxNzU4ODIzMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Hardware", "Ethereum", "GPU Mining", "Otimização Energética"],
      github: null,
      demo: null
    },
    {
      title: "Data Guardians - Jogo LGPD",
      description: "Desenvolvimento de jogo digital educacional 'Data Guardians' em parceria com Google for Education. Objetivo: conscientizar alunos e professores sobre LGPD, segurança e privacidade de dados através de uma experiência gamificada.",
      image: dataGuardiansImage,
      technologies: ["JavaScript", "Phaser.js", "LGPD", "UX Design", "Gamificação"],
      github: "https://inteli-college.github.io/2025-1A-T19-IN01-G02/",
      demo: "#"
    },
    {
      title: "Aplicação Web USP - Saúde",
      description: "Projeto full stack em parceria com a Faculdade de Medicina da USP. Conecta pacientes com feridas crônicas a profissionais de saúde em UBSs, facilitando acompanhamento remoto.",
      image: uspMedicinaImage,
      technologies: ["Full Stack", "JavaScript", "PostgreSQL", "UX Research"],
      github: "https://github.com/KhaledCoins",
      demo: "#"
    },
    {
      title: "Consultoria Fintech - Kuboo",
      description: "Prestei consultoria especializada em análise estratégica para soluções tecnológicas do setor financeiro, contribuindo com processos de inovação e crescimento organizacional.",
      image: kubooLogo,
      technologies: ["PostgreSQL", "Análise Estratégica", "Fintech"],
      github: null,
      demo: null
    },
    {
      title: "Competição Internacional de Robótica",
      description: "Desenvolvimento completo de robô para First Robotics Competition por 4 anos. Programação, eletrônica, mecânica e prototipagem. Representou o Brasil nos EUA.",
      image: roboticsImage,
      technologies: ["Java", "C++", "SolidWorks", "LabVIEW", "Eletrônica"],
      github: "https://github.com/KhaledCoins",
      alphabots: "https://www.thebluealliance.com/team/1860",
      demo: null
    },
    {
      title: "Sistema IA para Hackathon 2025",
      description: "Solução inovadora de inteligência artificial desenvolvida durante hackathon em 2025, focada em resolver problemas reais de mercado com análise de dados e KPIs.",
      image: hackathonImage,
      technologies: ["Python", "Machine Learning", "Excel"],
      github: "https://github.com/m4rcusml/documentacao-hackathon-inteli",
      lidaris: "https://chatgpt.com/g/g-679acb4e112c81918ce99683f801e8bb-lidaris?model=gpt-4o",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Projetos
          </h2>
          <div className="w-16 h-1 bg-purple-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma seleção dos meus projetos acadêmicos e pessoais que demonstram minhas habilidades em desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-48 ${project.title === "Competição Internacional de Robótica" ? "object-contain bg-black" : "object-cover"} group-hover:scale-105 transition-transform duration-300`}
                />

              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.github && project.title !== "Competição Internacional de Robótica" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  )}
                  {project.lidaris && (
                    <a
                      href={project.lidaris}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-orange-600 border border-orange-300 rounded-lg hover:bg-orange-50 transition-colors text-sm"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Lidaris
                    </a>
                  )}
                  {project.alphabots && (
                    <a
                      href={project.alphabots}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-green-600 border border-green-300 rounded-lg hover:bg-green-50 transition-colors text-sm"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Alphabots
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-colors text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/KhaledCoins"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-purple-800 text-purple-800 rounded-lg hover:bg-purple-800 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
            Ver Todos os Projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}