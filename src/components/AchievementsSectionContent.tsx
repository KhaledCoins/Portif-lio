import { Trophy, Medal, Award, Star, Users, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pt: {
    title: 'Conquistas Científicas',
    subtitle: '23 medalhas em olimpíadas científicas do ensino médio e participação em bancas de questões',
    totalMedals: 'Medalhas Totais',
    mainOlympiads: 'Olimpíadas Principais',
    questionBanks: 'Bancas de Questões',
    internationalSelections: 'Seletivas Internacionais',
    mainMedalsTitle: 'Principais Medalhas e Classificações',
    bankParticipationTitle: 'Participação em Bancas de Questões',
    bankDescription: 'Contribuição na elaboração de questões para olimpíadas científicas nacionais',
    role: 'Banca de Questões',
    olympiadMedals: [
      {
        title: 'OBRL - Olimpíada Brasileira de Raciocínio Lógico',
        medal: 'Ouro',
        description: 'Medalha de ouro na competição nacional de raciocínio lógico',
        color: 'text-yellow-600 bg-yellow-100'
      },
      {
        title: 'OBR - Olimpíada Brasileira de Robótica',
        medal: 'Prata',
        description: 'Medalha de prata na principal olimpíada de robótica do Brasil',
        color: 'text-gray-600 bg-gray-100'
      },
      {
        title: 'OBA - Olimpíada Brasileira de Astronomia',
        medal: 'Ouro',
        description: 'Medalha de ouro em astronomia e astrofísica',
        color: 'text-yellow-600 bg-yellow-100'
      },
      {
        title: 'IOAA - Seletiva Internacional',
        medal: 'Seletiva',
        description: 'Classificado para seletiva internacional da Olimpíada Internacional de Astronomia e Astrofísica',
        color: 'text-purple-800 bg-purple-100'
      },
      {
        title: 'Singa Math Challenge',
        medal: 'Prata',
        description: 'Medalha de prata na competição internacional de matemática de Singapura',
        color: 'text-gray-600 bg-gray-100'
      },
      {
        title: 'OBM - Seletiva Conesul',
        medal: 'Bronze → Seletiva',
        description: 'Bronze na OBM que levou à classificação para seletiva da Olimpíada do Cone Sul',
        color: 'text-amber-600 bg-amber-100'
      }
    ],
    bankParticipation: [
      {
        title: 'OIMC',
        description: 'Olimpíada Internacional de Matemática e do Conhecimento'
      },
      {
        title: 'OBT',
        description: 'Olimpíada Brasileira de Tecnologia'
      },
      {
        title: 'OICEA',
        description: 'Olimpíada Internacional de Ciências, Engenharia Aeroespacial'
      }
    ]
  },
  en: {
    title: 'Scientific Achievements',
    subtitle: '23 medals in high school scientific olympiads and participation in question banks',
    totalMedals: 'Total Medals',
    mainOlympiads: 'Main Olympiads',
    questionBanks: 'Question Banks',
    internationalSelections: 'International Selections',
    mainMedalsTitle: 'Main Medals and Classifications',
    bankParticipationTitle: 'Question Bank Participation',
    bankDescription: 'Contribution to the development of questions for national scientific olympiads',
    role: 'Question Bank',
    olympiadMedals: [
      {
        title: 'OBRL - Brazilian Logic Reasoning Olympiad',
        medal: 'Gold',
        description: 'Gold medal in the national logic reasoning competition',
        color: 'text-yellow-600 bg-yellow-100'
      },
      {
        title: 'OBR - Brazilian Robotics Olympiad',
        medal: 'Silver',
        description: 'Silver medal in Brazil\'s main robotics olympiad',
        color: 'text-gray-600 bg-gray-100'
      },
      {
        title: 'OBA - Brazilian Astronomy Olympiad',
        medal: 'Gold',
        description: 'Gold medal in astronomy and astrophysics',
        color: 'text-yellow-600 bg-yellow-100'
      },
      {
        title: 'IOAA - International Selection',
        medal: 'Selection',
        description: 'Qualified for international selection of the International Astronomy and Astrophysics Olympiad',
        color: 'text-purple-800 bg-purple-100'
      },
      {
        title: 'Singa Math Challenge',
        medal: 'Silver',
        description: 'Silver medal in Singapore\'s international mathematics competition',
        color: 'text-gray-600 bg-gray-100'
      },
      {
        title: 'OBM - Conesul Selection',
        medal: 'Bronze → Selection',
        description: 'Bronze in OBM that led to qualification for the Southern Cone Olympiad selection',
        color: 'text-amber-600 bg-amber-100'
      }
    ],
    bankParticipation: [
      {
        title: 'OIMC',
        description: 'International Mathematics and Knowledge Olympiad'
      },
      {
        title: 'OBT',
        description: 'Brazilian Technology Olympiad'
      },
      {
        title: 'OICEA',
        description: 'International Olympiad of Sciences, Aerospace Engineering'
      }
    ]
  }
};

export function AchievementsSectionContent() {
  const { language } = useLanguage();
  const t = translations[language];

  const getIcon = (index: number) => {
    const icons = [Trophy, Medal, Star, Target, Award, Trophy];
    return icons[index] || Trophy;
  };

  return (
    <section id="achievements" className="py-20 bg-white">
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

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
            <div className="text-3xl text-yellow-600 mb-2">23</div>
            <div className="text-sm text-gray-600">{t.totalMedals}</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-3xl text-purple-800 mb-2">6+</div>
            <div className="text-sm text-gray-600">{t.mainOlympiads}</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
            <div className="text-3xl text-green-600 mb-2">3</div>
            <div className="text-sm text-gray-600">{t.questionBanks}</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-3xl text-purple-600 mb-2">2</div>
            <div className="text-sm text-gray-600">{t.internationalSelections}</div>
          </div>
        </div>

        {/* Main Medals */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 mb-8 text-center">
            {t.mainMedalsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.olympiadMedals.map((medal, index) => {
              const IconComponent = getIcon(index);
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${medal.color} shadow-lg`} style={{
                      boxShadow: medal.color.includes('yellow') ? '0 4px 20px rgba(234, 179, 8, 0.3)' :
                                medal.color.includes('gray') ? '0 4px 20px rgba(107, 114, 128, 0.3)' :
                                medal.color.includes('purple') ? '0 4px 20px rgba(147, 51, 234, 0.3)' :
                                medal.color.includes('amber') ? '0 4px 20px rgba(245, 158, 11, 0.3)' :
                                '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}>
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
            {t.bankParticipationTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.bankParticipation.map((bank, index) => (
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
                  {t.role}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {t.bankDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}