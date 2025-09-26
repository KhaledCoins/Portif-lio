import aboutImage from 'figma:asset/b3638bf7a80535a849574b30123a9b9399c0e5bb.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
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
                <span className="text-sm">Hackathon IA 2025</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                Sobre Mim
              </h2>
              <div className="w-16 h-1 bg-purple-800 mb-6"></div>
            </div>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Desde criança, a curiosidade sobre como a tecnologia funciona sempre me moveu — do primeiro 
                computador desmontado ainda na infância até a construção de uma <strong>mineradora de Ethereum</strong> no ensino médio. Essa inquietude intelectual me levou a conquistar{' '}
                <strong>23 medalhas em olimpíadas científicas</strong> e diversas experiências em equipes 
                competitivas que desenvolveram minhas habilidades em programação, eletrônica, mecânica e 
                trabalho em equipe.
              </p>
              
              <p>
                Atualmente, sou estudante de <strong>Ciência da Computação no Insper</strong>, após uma passagem 
                pelo INTELI, onde participei de projetos em parceria com <strong>Google for Education</strong> e 
                a <strong>Faculdade de Medicina da USP</strong>. Também atuei como consultor de análise na{' '}
                <strong>Kuboo Soluções Financeiras</strong>, contribuindo para o desenvolvimento tecnológico 
                e análise estratégica no setor financeiro.
              </p>
              
              <p>
                Minha paixão está na <strong>interseção entre tecnologia e negócios</strong>. Participo de 
                hackathons para ampliar meus conhecimentos em diversas áreas de tech e busco aplicar conhecimentos 
                técnicos para resolver problemas reais, criar impacto positivo e gerar valor estratégico para 
                organizações.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl text-purple-800 mb-2">2029</div>
                <div className="text-sm text-gray-600">Graduação Prevista</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl text-purple-800 mb-2">Kuboo</div>
                <div className="text-sm text-gray-600">Consultor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}