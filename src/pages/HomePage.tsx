import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Phone,
  Stethoscope,
  HeartHandshake,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { t, formatNumber } from "../utils/translations";
import Logo from "../assets/SawaFinal.png";

const HomePage = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  // Hero carousel images
  const heroImages = [
    "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const stats = [
    { icon: Users, number: "50,000+", key: "patientsHelped" },
    { icon: Award, number: "15+", key: "yearsExperience" },
    { icon: Stethoscope, number: "200+", key: "medicalProfessionals" },
    { icon: TrendingUp, number: "98%", key: "successRate" },
  ];

  const carouselSlides = [
    {
      title: t("title1", language),
      subtitle: t("subtitle1", language),
      description: t("description1", language),

      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      cta: t("explore1", language),
      ctaLink: "/services",
      color: "from-gray-800 to-gray-900",
    },
    {
      title: t("title2", language),
      subtitle: t("subtitle2", language),
      description: t("description2", language),
      image:
        "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: t("explore2", language),
      ctaLink: "/contact",
      color: "from-gray-700 to-gray-800",
    },
    {
      title: t("title3", language),
      subtitle: t("subtitle3", language),
      description: t("description3", language),
      image:
        "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
      cta: t("explore3", language),
      ctaLink: "/services",
      color: "from-gray-600 to-gray-700",
    },
    {
      title: t("title4", language),
      subtitle: t("subtitle4", language),
      description: t("description4", language),
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      cta: t("explore4", language),
      ctaLink: "/emergency",
      color: "from-red-700 to-red-800",
    },
  ];

  const quickLinks = [
    {
      icon: Phone,
      key: "emergencySupport",
      color: "bg-red-600",
      path: "/emergency",
    },
    {
      icon: Stethoscope,
      key: "findDoctor",
      color: "bg-gray-700",
      path: "/services",
    },
    { icon: Camera, key: "gallery", color: "bg-gray-600", path: "/gallery" },
    {
      icon: HeartHandshake,
      key: "patientStories",
      color: "bg-gray-800",
      path: "/gallery",
    },
  ];

  // Auto-advance hero carousel
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroTimer);
  }, [heroImages.length]);

  // Auto-advance content carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // hero image transition variants
  const heroImageVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(2px)",
    },
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(2px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Image Carousel */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden min-h-[80vh]">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImageIndex}
              variants={heroImageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src={heroImages[heroImageIndex]}
                alt="Healthcare organization"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: "crisp-edges",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              />
              <div className="absolute inset-0 bg-white bg-opacity-85 backdrop-blur-[0.5px]"></div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setHeroImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  index === heroImageIndex
                    ? "w-8 bg-red-600 shadow-lg"
                    : "w-2 bg-gray-400 hover:bg-gray-500"
                }`}
                style={{
                  backgroundColor:
                    index === heroImageIndex ? "#D9241C" : undefined,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-40 h-40 bg-white bg-opacity-95 rounded-full mb-6 ">
                {/* <Heart className="h-10 w-10 text-red-600" fill="#D9241C" /> */}
                <img src={Logo} alt="sawaWithPatient Logo" />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-light text-gray-600 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("heroTitle", language)}
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-700 mb-12 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t("heroSubtitle", language)}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                style={{ backgroundColor: "#D9241C" }}
              >
                {t("getSupport", language)}
              </Link>

              <Link
                to="/about"
                className="text-gray-900 hover:text-red-600 transition-all duration-300 font-medium text-lg flex items-center bg-white bg-opacity-90 px-6 py-3 rounded-full shadow-lg hover:shadow-xl backdrop-blur-sm transform hover:scale-105"
              >
                {t("learnMore", language)}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Enhanced background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon
                      className="h-8 w-8 text-red-600 mx-auto mb-4"
                      style={{ color: "#D9241C" }}
                    />
                  </motion.div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {formatNumber(stat.number, language)}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {t(stat.key, language)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              {t("imageTitle", language)}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t("imagesDescription", language)}
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence mode="wait" custom={currentSlide}>
                <motion.div
                  key={currentSlide}
                  custom={currentSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    {/* Content Side */}
                    <div
                      className={`bg-gradient-to-br ${carouselSlides[currentSlide].color} p-12 lg:p-16 flex flex-col justify-center text-white`}
                    >
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-light mb-4">
                          {carouselSlides[currentSlide].title}
                        </h3>
                        <h4 className="text-xl lg:text-2xl font-medium mb-6 opacity-90">
                          {carouselSlides[currentSlide].subtitle}
                        </h4>
                        <p className="text-lg mb-8 opacity-90 leading-relaxed">
                          {carouselSlides[currentSlide].description}
                        </p>
                        <Link
                          to={carouselSlides[currentSlide].ctaLink}
                          className="inline-flex items-center bg-white text-gray-900 px-8 gap-2 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg"
                        >
                          {carouselSlides[currentSlide].cta}
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Link>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative overflow-hidden">
                      <img
                        src={carouselSlides[currentSlide].image}
                        alt={carouselSlides[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8" : "bg-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      index === currentSlide ? "#D9241C" : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
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
              {t("access", language)}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t("accessDescription", language)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 block text-center"
                >
                  <motion.div
                    className={`${link.color} p-4 rounded-2xl inline-block mb-6`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <link.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {t(link.key, language)}
                  </h3>
                  <div
                    className="text-red-600 font-medium inline-flex gap-1 items-center"
                    style={{ color: "#D9241C" }}
                  >
                    {t("fastAccess", language)}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-light mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("footerTitle", language)}
          </motion.h2>
          <motion.p
            className="text-xl mb-10 opacity-90 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("footerDescription", language)}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/appointments"
              className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors duration-300 font-medium text-lg shadow-lg inline-block"
              style={{ backgroundColor: "#D9241C" }}
            >
              {t("footerEmergency", language)}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300 font-medium text-lg inline-block"
            >
              {t("footerContact", language)}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
