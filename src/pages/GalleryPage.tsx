import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/translations';

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Gallery images - you can replace these with your organization's photos
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Medical Consultation',
      description: 'Our medical team providing consultation to patients in need',
      category: 'medical',
      date: '2024-01-15',
      location: 'Omdurman Children\'s Hospital'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Patient Support',
      description: 'Supporting families during their healthcare journey',
      category: 'support',
      date: '2024-01-20',
      location: 'Khartoum Medical Center'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Outreach',
      description: 'Health awareness program in local communities',
      category: 'community',
      date: '2024-02-01',
      location: 'Community Health Center'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Emergency Response',
      description: 'Emergency medical support and rapid response',
      category: 'emergency',
      date: '2024-02-10',
      location: 'Emergency Department'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Volunteer Training',
      description: 'Training session for new volunteers',
      category: 'volunteers',
      date: '2024-02-15',
      location: 'Training Center'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Medical Equipment',
      description: 'New medical equipment donation ceremony',
      category: 'equipment',
      date: '2024-02-20',
      location: 'Hospital Equipment Room'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/5327587/pexels-photo-5327587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Health Education',
      description: 'Health education workshop for patients and families',
      category: 'education',
      date: '2024-03-01',
      location: 'Education Center'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/5207319/pexels-photo-5207319.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pediatric Care',
      description: 'Specialized care for children patients',
      category: 'medical',
      date: '2024-03-05',
      location: 'Pediatric Ward'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ramadan Iftar',
      description: 'Iftar meal distribution during Ramadan',
      category: 'community',
      date: '2024-03-15',
      location: 'Hospital Cafeteria'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'medical', label: 'Medical Services' },
    { key: 'support', label: 'Patient Support' },
    { key: 'community', label: 'Community Programs' },
    { key: 'volunteers', label: 'Volunteers' },
    { key: 'equipment', label: 'Equipment & Facilities' },
    { key: 'education', label: 'Health Education' },
    { key: 'emergency', label: 'Emergency Response' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

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
                <Users className="h-10 w-10 text-red-600" style={{ color: '#D9241C' }} />
              </div>
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-5xl font-light text-gray-900 mb-6"
              variants={itemVariants}
            >
              {t('gallery', language)}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              variants={itemVariants}
            >
              Discover our impact through images that tell the story of hope, healing, and community support.
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
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.key ? '#D9241C' : undefined
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
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{image.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{image.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(image.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
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
              <p className="text-xl text-gray-500">No images found in this category.</p>
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
                      <span>{new Date(filteredImages[selectedImage]?.date || '').toLocaleDateString()}</span>
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
            Be Part of Our Story
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 opacity-90 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join us in creating more moments of hope and healing in our community.
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
              style={{ backgroundColor: '#D9241C' }}
            >
              Get Involved
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300 font-medium text-lg inline-block"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default GalleryPage;