import {
  Heart,
  Target,
  CheckCircle,
  Lightbulb,
  Eye,
  Flag,
  Zap,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../utils/translations";

const AboutPage = () => {
  const { language, isRTL } = useLanguage();

  const organizationSections = [
    {
      icon: Lightbulb,
      titleKey: "ideaOriginTitle",
      descriptionKey: "ideaOriginDescription",
      color: "from-blue-50 to-sky-50",
      iconColor: "bg-blue-500",
    },
    {
      icon: Target,
      titleKey: "ideaReasonTitle",
      descriptionKey: "ideaReasonDescription",
      color: "from-emerald-50 to-green-50",
      iconColor: "bg-emerald-500",
    },
    {
      icon: Eye,
      titleKey: "visionTitle",
      descriptionKey: "visionDescription",
      color: "from-purple-50 to-pink-50",
      iconColor: "bg-purple-500",
    },
    {
      icon: Flag,
      titleKey: "missionTitle",
      descriptionKey: "missionDescription",
      color: "from-orange-50 to-yellow-50",
      iconColor: "bg-orange-500",
    },
  ];

  const goals = ["goal1", "goal2", "goal3", "goal4", "goal5"];

  const servicePillars = ["servicePillar1", "servicePillar2", "servicePillar3"];

  const challengesNeeds = ["challengesNeed1", "challengesNeed2"];

  const fundingTypes = ["fundingType1", "fundingType2"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
            className="text-center mb-16"
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
              {t("about", language)}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              variants={itemVariants}
            >
              {t("aboutDescription", language)}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Organization Story Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {organizationSections.map((section, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${section.color} p-8 rounded-2xl`}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className={`${section.iconColor} p-3 rounded-xl flex-shrink-0`}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <section.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {t(section.titleKey, language)}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(section.descriptionKey, language)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              {t("goalsTitle", language)}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t("goalDescription", language)}
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{
                  x: isRTL ? -5 : 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                    <CheckCircle
                      className="h-5 w-5 text-red-600"
                      style={{ color: "#D9241C" }}
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t(goal, language)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Delivery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              {t("serviceDeliveryTitle", language)}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t("serviceDescipriont", language)}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {servicePillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="bg-gray-700 p-3 rounded-xl inline-block mb-4">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t(pillar, language)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-red-50 to-gray-50 p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("service", language)}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("serviceProcedure", language)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              {t("challengesTitle", language)}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t("challangesDescription", language)}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("challange1", language)}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("challengesDescription", language)}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t("challange2", language)}
                </h3>
                <div className="space-y-4">
                  {challengesNeeds.map((need, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="bg-red-100 p-1 rounded-full flex-shrink-0 mt-1">
                        <Zap
                          className="h-4 w-4 text-red-600"
                          style={{ color: "#D9241C" }}
                        />
                      </div>
                      <p className="text-gray-700">{t(need, language)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Funding and Support Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Funding Section */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("fundingTitle", language)}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t("fundingStrategy", language)}
                </p>
                <div className="space-y-3">
                  {fundingTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-emerald-500 p-1 rounded-full">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {t(type, language)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Psychosocial Support */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("psychosocialTitle", language)}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("psychosocialDescription", language)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-light mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("missionTitleFooter", language)}
          </motion.h2>
          <motion.p
            className="text-xl mb-10 opacity-90 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("missionDescriptionFooter", language)}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors duration-300 font-medium text-lg shadow-lg inline-block"
              style={{ backgroundColor: "#D9241C" }}
            >
              {t("learnButton", language)}
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300 font-medium text-lg inline-block"
            >
              {t("learnSelect", language)}
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
