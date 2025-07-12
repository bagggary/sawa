import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../utils/translations";

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: "/alraziUniversity/1.JPG",
      title: t("cat1", language),
      description: t("razdescription1", language),
      category: "uni",
      date: "2009-12-24",
      location: t("cat1", language),
    },
    {
      id: 2,
      src: "/alraziUniversity/2.JPG",
      title: t("cat1", language),
      description: t("razdescription2", language),
      category: "uni",
      date: "2009-12-24",
      location: t("cat1", language),
    },
    {
      id: 3,
      src: "/alraziUniversity/3.JPG",
      title: t("cat1", language),
      description: t("razdescription3", language),
      category: "uni",
      date: "2009-12-24",
      location: t("cat1", language),
    },
    {
      id: 4,
      src: "/alraziUniversity/4.JPG",
      title: t("cat1", language),
      description: t("razdescription4", language),
      category: "uni",
      date: "2009-12-24",
      location: t("cat1", language),
    },
    {
      id: 5,
      src: "/alraziUniversity/5.JPG",
      title: t("cat1", language),
      description: t("razdescription5", language),
      category: "uni",
      date: "2009-12-24",
      location: t("cat1", language),
    },
    {
      id: 6,
      src: "/alraziUniversity/6.JPG",
      title: t("cat1", language),
      description: t("razdescription6", language),
      category: "uni",
      date: "2009-12-24",
      location: t("cat1", language),
    },
    {
      id: 7,
      src: "/bulkHospital/1.JPG",
      title: t("cat2", language),
      description: t("hosdescription1", language),
      category: "hos",
      date: "2010-09-04",
      location: "Education Center",
    },
    {
      id: 8,
      src: "/bulkHospital/2.JPG",
      title: t("cat2", language),
      description: t("hosdescription2", language),
      category: "hos",
      date: "2010-09-04",
      location: "patient room",
    },
    {
      id: 9,
      src: "/bulkHospital/3.JPG",
      title: t("cat2", language),
      description: t("hosdescription3", language),
      category: "hos",
      date: "2010-09-04",
      location: "Hospital looby",
    },
    {
      id: 10,
      src: "/bulkHospital/4.JPG",
      title: t("cat2", language),
      description: t("hosdescription4", language),
      category: "hos",
      date: "2010-09-04",
      location: "Hospital looby",
    },
    {
      id: 11,
      src: "/bulkHospital/5.JPG",
      title: t("cat2", language),
      description: t("hosdescription5", language),
      category: "hos",
      date: "2010-09-04",
      location: "Hospital looby",
    },
    {
      id: 12,
      src: "/bulkHospital/6.JPG",
      title: t("cat2", language),
      description: t("hosdescription6", language),
      category: "hos",
      date: "2010-09-04",
      location: "Hospital looby",
    },
    {
      id: 13,
      src: "/bulkHospital/7.JPG",
      title: t("cat2", language),
      description: t("hosdescription7", language),
      category: "hos",
      date: "2010-09-04",
      location: "Hospital looby",
    },
    {
      id: 14,
      src: "/bulkHospital/8.JPG",
      title: t("cat2", language),
      description: t("hosdescription8", language),
      category: "hos",
      date: "2010-09-04",
      location: "Hospital looby",
    },
    // End of bulk hospital
    {
      id: 15,
      src: "/eid/1.JPG",
      title: t("cat3", language),
      description: t("eiddescription1", language),
      category: "community",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 16,
      src: "/eid/2.JPG",
      title: t("cat3", language),
      description: t("eiddescription2", language),
      category: "community",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 17,
      src: "/eid/3.JPG",
      title: t("cat3", language),
      description: t("eiddescription3", language),
      category: "community",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 18,
      src: "/eid/4.JPG",
      title: t("cat3", language),
      description: t("eiddescription4", language),
      category: "community",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 19,
      src: "/eid/5.JPG",
      title: t("cat3", language),
      description: t("eiddescription5", language),
      category: "community",
      date: "2009-11-28",
      location: "Hospital looby",
    },

    // end of eid images

    {
      id: 20,
      src: "/omdurmanHospital/1.JPG",
      title: t("cat4", language),
      description: t("omdescription1", language),
      category: "volunteeros",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 21,
      src: "/omdurmanHospital/2.JPG",
      title: t("cat4", language),
      description: t("omdescription2", language),
      category: "volunteers",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 22,
      src: "/omdurmanHospital/3.JPG",
      title: t("cat4", language),
      description: t("omdescription3", language),
      category: "volunteers",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 23,
      src: "/omdurmanHospital/4.JPG",
      title: t("cat4", language),
      description: t("omdescription4", language),
      category: "volunteers",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 24,
      src: "/omdurmanHospital/5.JPG",
      title: t("cat4", language),
      description: t("omdescription5", language),
      category: "volunteers",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 25,
      src: "/omdurmanHospital/6.JPG",
      title: t("cat4", language),
      description: t("omdescription6", language),
      category: "volunteers",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 26,
      src: "/omdurmanHospital/7.JPG",
      title: t("cat4", language),
      description: t("omdescription7", language),
      category: "volunteers",
      date: "2009-11-28",
      location: "Hospital looby",
    },
    {
      id: 27,
      src: "/omdurmanHospital/8.JPG",
      title: t("cat4", language),
      description: t("omdescription8", language),
      category: "volunteers",
      date: "2009-11-28",
      location: "Hospital looby",
    },

    // End of omdurmanHospital images

    {
      id: 28,
      src: "/organisationMeeting/1.JPG",
      title: t("cat5", language),
      description: t("metdescription1", language),
      category: "equipment",
      date: "2010-08-20",
      location: "organisation offices",
    },
    {
      id: 29,
      src: "/organisationMeeting/2.JPG",
      title: t("cat5", language),
      description: t("metdescription2", language),
      category: "equipment",
      date: "2010-08-20",
      location: "organisation offices",
    },
    {
      id: 30,
      src: "/organisationMeeting/3.JPG",
      title: t("cat5", language),
      description: t("metdescription3", language),
      category: "equipment",
      date: "2010-08-20",
      location: "organisation offices",
    },
    {
      id: 31,
      src: "/organisationMeeting/4.JPG",
      title: t("cat5", language),
      description: t("metdescription4", language),
      category: "equipment",
      date: "2010-08-20",
      location: "organisation offices",
    },
    {
      id: 32,
      src: "/organisationMeeting/5.JPG",
      title: t("cat5", language),
      description: t("metdescription5", language),
      category: "equipment",
      date: "2010-08-20",
      location: "organisation offices",
    },
  ];

  const categories = [
    { key: "all", label: t("cat", language) },
    { key: "uni", label: t("cat1", language) },
    { key: "hos", label: t("cat2", language) },
    { key: "community", label: t("cat3", language) },
    { key: "volunteers", label: t("cat4", language) },
    { key: "equipment", label: t("cat5", language) },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

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
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <Users
                  className="h-10 w-10 text-red-600"
                  style={{ color: "#D9241C" }}
                />
              </div>
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-5xl font-light text-gray-900 mb-6"
              variants={itemVariants}
            >
              {t("galleryTitle", language)}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              variants={itemVariants}
            >
              {t("galleryDescription", language)}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? "text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === category.key ? "#D9241C" : undefined,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            key={selectedCategory} // Re-animate when category changes
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => openLightbox(index)}
              >
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex gap-1 items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(image.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="truncate">{image.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-500">
                No images found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={filteredImages[selectedImage]?.src}
                  alt={filteredImages[selectedImage]?.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {filteredImages[selectedImage]?.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {filteredImages[selectedImage]?.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {new Date(
                          filteredImages[selectedImage]?.date || ""
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{filteredImages[selectedImage]?.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            {t("galleryTitleFooter", language)}
          </motion.h2>
          <motion.p
            className="text-xl mb-10 opacity-90 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("galleryDescriptionFooter", language)}
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
              {t("galleryButton1", language)}
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300 font-medium text-lg inline-block"
            >
              {t("galleryButton2", language)}
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default GalleryPage;
