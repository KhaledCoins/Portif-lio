import { useState } from 'react';
import { Mail, Instagram, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pt: {
    title: 'Entre em Contato',
    subtitle: 'Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar!',
    contactInfo: 'Informações de Contato',
    socialNetworks: 'Redes Sociais',
    sendMessage: 'Envie uma Mensagem',
    name: 'Nome',
    email: 'Email',
    subject: 'Assunto',
    message: 'Mensagem',
    send: 'Enviar Mensagem',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'seu@email.com',
    subjectPlaceholder: 'Assunto da mensagem',
    messagePlaceholder: 'Digite sua mensagem aqui...',
    location: 'São Paulo, SP - Brasil',
    phoneAvailable: 'Disponível via WhatsApp',
    successMessage: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
    required: '*',
    socialLinks: [
      {
        label: 'Email',
        value: 'eduardokcg@al.insper.edu.br',
        href: 'mailto:eduardokcg@al.insper.edu.br'
      },
      {
        label: 'Instagram',
        value: '@ekhaledc',
        href: 'https://instagram.com/ekhaledc'
      },
      {
        label: 'LinkedIn',
        value: 'Eduardo Khaled',
        href: 'https://www.linkedin.com/in/eduardo-khaled'
      },
      {
        label: 'GitHub',
        value: 'KhaledCoins',
        href: 'https://github.com/KhaledCoins'
      }
    ]
  },
  en: {
    title: 'Get in Touch',
    subtitle: 'I am always open to new opportunities and collaborations. Let\'s talk!',
    contactInfo: 'Contact Information',
    socialNetworks: 'Social Networks',
    sendMessage: 'Send a Message',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    subjectPlaceholder: 'Message subject',
    messagePlaceholder: 'Type your message here...',
    location: 'São Paulo, SP - Brazil',
    phoneAvailable: 'Available via WhatsApp',
    successMessage: 'Message sent successfully! I will get in touch soon.',
    required: '*',
    socialLinks: [
      {
        label: 'Email',
        value: 'eduardokcg@al.insper.edu.br',
        href: 'mailto:eduardokcg@al.insper.edu.br'
      },
      {
        label: 'Instagram',
        value: '@ekhaledc',
        href: 'https://instagram.com/ekhaledc'
      },
      {
        label: 'LinkedIn',
        value: 'Eduardo Khaled',
        href: 'https://www.linkedin.com/in/eduardo-khaled'
      },
      {
        label: 'GitHub',
        value: 'KhaledCoins',
        href: 'https://github.com/KhaledCoins'
      }
    ]
  }
};

export function ContactSectionContent() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.successMessage);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialIcons = [Mail, Instagram, Linkedin, Github];
  const socialColors = ['text-red-600', 'text-pink-600', 'text-purple-800', 'text-gray-900'];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">
                {t.contactInfo}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-purple-800" />
                  <span className="text-gray-600">{t.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-purple-800" />
                  <span className="text-gray-600">{t.phoneAvailable}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">
                {t.socialNetworks}
              </h3>
              <div className="space-y-4">
                {t.socialLinks.map((link, index) => {
                  const IconComponent = socialIcons[index];
                  const colorClass = socialColors[index];
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors`}>
                        <IconComponent className={`h-6 w-6 ${colorClass}`} />
                      </div>
                      <div>
                        <div className="text-gray-900">{link.label}</div>
                        <div className="text-gray-600 text-sm">{link.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl text-gray-900 mb-6">
              {t.sendMessage}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    {t.name} {t.required}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent outline-none transition-colors"
                    placeholder={t.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    {t.email} {t.required}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent outline-none transition-colors"
                    placeholder={t.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  {t.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent outline-none transition-colors"
                  placeholder={t.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t.message} {t.required}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-800 text-white py-3 px-6 rounded-lg hover:bg-purple-900 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}