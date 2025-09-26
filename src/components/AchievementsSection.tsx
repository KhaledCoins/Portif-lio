import { Trophy, Medal, Award, Star, Users, Target } from 'lucide-react';

export function AchievementsSection() {
  const olympiadMedals = [
    {
      icon: Trophy,
      title: 'OBRL - Olimpíada Brasileira de Raciocínio Lógico',
      medal: 'Ouro',
      description: 'Medalha de ouro na competição nacional de raciocínio lógico',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Medal,
      title: 'OBR - Olimpíada Brasileira de Robótica',
      medal: 'Prata',
      description: 'Medalha de prata na principal olimpíada de robótica do Brasil',
      color: 'text-gray-600 bg-gray-100'
    },
    {
      icon: Star,
      title: 'OBA - Olimpíada Brasileira de Astronomia',
      medal: 'Ouro',
      description: 'Medalha de ouro em astronomia e astrofísica',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Target,
      title: 'IOAA - Seletiva Internacional',
      medal: 'Seletiva',
      description: 'Classificado para seletiva internacional da Olimpíada Internacional de Astronomia e Astrofísica',
      color: 'text-purple-800 bg-purple-100'
    },
    {
      icon: Award,
      title: 'Singa Math Challenge',
      medal: 'Prata',
      description: 'Medalha de prata na competição internacional de matemática de Singapura',
      color: 'text-gray-600 bg-gray-100'
    },
    {
      icon: Trophy,
      title: 'OBM - Seletiva Conesul',
      medal: 'Bronze → Seletiva',
      description: 'Bronze na OBM que levou à classificação para seletiva da Olimpíada do Cone Sul',
      color: 'text-amber-600 bg-amber-100'
    }
  ];

  const bankParticipation = [
    {
      title: 'OIMC',
      description: 'Olimpíada Internacional de Matemática e do Conhecimento',
      role: 'Banca de Questões'
    },
    {
      title: 'OBT',
      description: 'Olimpíada Brasileira de Tecnologia',
      role: 'Banca de Questões'
    },
    {
      title: 'OICEA',
      description: 'Olimpíada Internacional de Ciências, Engenharia Aeroespacial',
      role: 'Banca de Questões'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Conquistas Científicas
          </h2>
          <div className="w-16 h-1 bg-purple-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            23 medalhas em olimpíadas científicas do ensino médio e participação em bancas de questões
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
            <div className="text-3xl text-yellow-600 mb-2">23</div>
            <div className="text-sm text-gray-600">Medalhas Totais</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-3xl text-purple-800 mb-2">6+</div>
            <div className="text-sm text-gray-600">Olimpíadas Principais</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
            <div className="text-3xl text-green-600 mb-2">3</div>
            <div className="text-sm text-gray-600">Bancas de Questões</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-3xl text-purple-600 mb-2">2</div>
            <div className="text-sm text-gray-600">Seletivas Internacionais</div>
          </div>
        </div>

        {/* Main Medals */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 mb-8 text-center">
            Principais Medalhas e Classificações
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {olympiadMedals.map((medal, index) => {
              const IconComponent = medal.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${medal.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg text-gray-900 leading-tight">
                          {medal.title}
                        </h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${medal.color.replace('bg-', 'bg-').replace('text-', 'text-')} border`}>
                          {medal.medal}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {medal.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bank Participation */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl text-gray-900 mb-6 text-center">
            Participação em Bancas de Questões
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bankParticipation.map((bank, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-purple-800" />
                  <h4 className="text-lg text-gray-900">
                    {bank.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  {bank.description}
                </p>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  {bank.role}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Contribuição na elaboração de questões para olimpíadas científicas nacionais
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}