import React from 'react';
import { Stethoscope, Heart, Users, Phone, Calendar, FileText, Shield, Headphones, Building, Gift, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';

const ServicesPage = () => {
  const { language } = useLanguage();

  const serviceDeliveryPillars = [
    {
      icon: Stethoscope,
      titleKey: 'servicePillar1',
      color: 'from-blue-50 to-sky-50',
      iconColor: 'bg-blue-500'
    },
    {
      icon: Building,
      titleKey: 'servicePillar2',
      color: 'from-emerald-50 to-green-50',
      iconColor: 'bg-emerald-500'
    },
    {
      icon: Heart,
      titleKey: 'servicePillar3',
      color: 'from-purple-50 to-pink-50',
      iconColor: 'bg-purple-500'
    }
  ];

  const medicalServices = [
    {
      icon: Stethoscope,
      title: t('onlineConsultation', language),
      description: 'Connect with qualified healthcare professionals from the comfort of your home.',
      features: ['Video consultations', 'Prescription services', 'Follow-up care', '24/7 availability']
    },
    {
      icon: FileText,
      title: t('diagnosticServices', language),
      description: 'Comprehensive diagnostic testing and health screenings.',
      features: ['Laboratory tests', 'Imaging services', 'Health screenings', 'Report analysis']
    },
    {
      icon: Heart,
      title: t('surgeryTreatment', language),
      description: 'Advanced surgical procedures and specialized treatments.',
      features: ['Minimally invasive surgery', 'Specialized treatments', 'Pre-surgery consultation', 'Post-operative care']
    },
    {
      icon: Users,
      title: t('rehabilitation', language),
      description: 'Comprehensive rehabilitation and recovery programs.',
      features: ['Physical therapy', 'Occupational therapy', 'Recovery planning', 'Progress monitoring']
    }
  ];

  const supportServices = [
    {
      icon: Headphones,
      title: t('emotionalSupport', language),
      description: 'Professional counseling and emotional support services.',
      features: ['Individual counseling', 'Group therapy', 'Crisis intervention', 'Mental health resources']
    },
    {
      icon: Shield,
      title: t('financialAssistance', language),
      description: 'Financial guidance and assistance programs for medical expenses.',
      features: ['Insurance navigation', 'Payment plans', 'Financial counseling', 'Assistance programs']
    },
    {
      icon: FileText,
      title: t('patientEducation', language),
      description: 'Educational resources and health literacy programs.',
      features: ['Health education', 'Treatment explanations', 'Self-care guidance', 'Family support']
    },
    {
      icon: Phone,
      title: '24/7 Support Hotline',
      description: 'Round-the-clock support for urgent questions and concerns.',
      features: ['Emergency consultation', 'Medical advice', 'Appointment scheduling', 'Resource referrals']
    }
  ];

  const fundingPrograms = [
    {
      icon: Gift,
      title: t('fundingType1', language),
      description: 'Direct financial contributions to support patient care and medical expenses.',
      color: 'from-green-50 to-emerald-50',
      iconColor: 'bg-green-500'
    },
    {
      icon: Handshake,
      title: t('fundingType2', language),
      description: 'Medical equipment, supplies, and other essential resources for patient support.',
      color: 'from-blue-50 to-sky-50',
      iconColor: 'bg-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-br from-gray-50 via-white to-red-50 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <Heart className="h-10 w-10 text-red-600" fill="#D9241C" />
              </div>
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-5xl font-light text-gray-900 mb-6"
              variants={itemVariants}
            >
              {t('services', language)}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              variants={itemVariants}
            >
              Comprehensive healthcare services designed to support you at every step of your medical journey.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Delivery Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">{t('serviceDeliveryTitle', language)}</h2>
            <p className="text-xl text-gray-600 font-light">How we deliver healthcare support to patients in need</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {serviceDeliveryPillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                className={`bg-gradient-to-br ${pillar.color} p-8 rounded-2xl hover:shadow-lg transition-all duration-300`}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className={`${pillar.iconColor} p-4 rounded-xl inline-block mb-6`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <pillar.icon className="h-8 w-8 text-white" />
                </motion.div>
                <p className="text-gray-700 leading-relaxed text-lg">{t(pillar.titleKey, language)}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Procedure */}
          <motion.div 
            className="bg-gradient-to-r from-red-50 to-gray-50 p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Procedure</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{t('serviceProcedure', language)}</p>
          </motion.div>
        </div>
      </section>

      {/* Medical Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">{t('medicalServices', language)}</h2>
            <p className="text-xl text-gray-600 font-light">Professional medical care and treatment options</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {medicalServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="bg-gray-700 p-3 rounded-xl flex-shrink-0"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex, duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-red-600 rounded-full" style={{ backgroundColor: '#D9241C' }}></div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Patient Support Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">{t('patientSupport', language)}</h2>
            <p className="text-xl text-gray-600 font-light">Comprehensive support services for patients and families</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {supportServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-all duration-300"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="bg-red-600 p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: '#D9241C' }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex, duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Funding Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">{t('fundingTitle', language)}</h2>
            <p className="text-xl text-gray-600 font-light mb-6">{t('fundingStrategy', language)}</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {fundingPrograms.map((program, index) => (
              <motion.div 
                key={index} 
                className={`bg-gradient-to-br ${program.color} p-8 rounded-2xl hover:shadow-lg transition-all duration-300`}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className={`${program.iconColor} p-4 rounded-xl inline-block mb-6`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <program.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Psychosocial Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-4">{t('psychosocialTitle', language)}</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {t('psychosocialDescription', language)}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light mb-6">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 font-light">Book an appointment or contact us for more information about our services.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-red-600 p-8 rounded-2xl text-center"
              style={{ backgroundColor: '#D9241C' }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <Calendar className="h-12 w-12 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Book Appointment</h3>
              <p className="mb-6 opacity-90">Schedule your consultation with our medical professionals.</p>
              <motion.button 
                className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Schedule Now
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 rounded-2xl text-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <Phone className="h-12 w-12 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Contact Support</h3>
              <p className="mb-6 opacity-90">Speak with our support team for immediate assistance.</p>
              <motion.button 
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Call Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;