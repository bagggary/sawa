import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../utils/translations";

const ContactPage = () => {
  const { language, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isRTL ? 20 : -20,
    },
    visible: {
      opacity: 1,
      x: 0,
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
        className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20"
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
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              {t("contact", language)}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t("contactDescription", language)}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t("subContactTitle", language)}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {t("subContactDescription", language)}
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone Support",
                    description: "Available 24/7 for urgent matters",
                    details: [
                      "+966 123 456 789",
                      "Emergency: +966 123 456 790",
                    ],
                    color: "from-blue-50 to-sky-50",
                    iconColor: "bg-blue-500",
                    textColor: "text-blue-600",
                  },
                  {
                    icon: Mail,
                    title: "Email Support",
                    description: "We'll respond within 24 hours",
                    details: [
                      "info@sawawithpatient.org",
                      "support@sawawithpatient.org",
                    ],
                    color: "from-emerald-50 to-green-50",
                    iconColor: "bg-emerald-500",
                    textColor: "text-emerald-600",
                  },
                  {
                    icon: MapPin,
                    title: "Office Location",
                    description: "Visit us during business hours",
                    details: [
                      "123 Healthcare Street",
                      "Riyadh, Saudi Arabia 12345",
                    ],
                    color: "from-purple-50 to-pink-50",
                    iconColor: "bg-purple-500",
                    textColor: "text-purple-600",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    description: "",
                    details: [
                      "Monday - Friday: 8:00 AM - 6:00 PM",
                      "Saturday: 9:00 AM - 4:00 PM",
                      "Sunday: Emergency only",
                    ],
                    color: "from-orange-50 to-yellow-50",
                    iconColor: "bg-orange-500",
                    textColor: "text-orange-600",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start gap-3 p-6 bg-gradient-to-br ${contact.color} rounded-xl`}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <motion.div
                      className={`${contact.iconColor} p-3 rounded-lg flex-shrink-0`}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {contact.title}
                      </h3>
                      {contact.description && (
                        <p className="text-gray-600 mb-2">
                          {contact.description}
                        </p>
                      )}
                      {contact.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className={`${contact.textColor} font-semibold`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Live Chat */}
              <motion.div
                className="bg-gradient-to-r from-emerald-600 to-sky-600 p-6 rounded-xl text-white"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{
                      transition: { duration: 0.6 },
                    }}
                  >
                    <MessageSquare className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold">Live Chat Support</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Get instant help from our support team through our live chat
                  feature. {"(Soon)"}
                </p>
                <motion.button
                  className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Start Live Chat
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contactForm", language)}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("fullName", language)}
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your full name"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("emailAddress", language)}
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your email address"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("phoneNumber", language)}
                    </label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your phone number"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("subject", language)}
                    </label>
                    <motion.select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Appointment Booking</option>
                      <option value="medical">Medical Inquiry</option>
                      <option value="support">Patient Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </motion.select>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("message", language)}
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Please describe how we can help you..."
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Send className="h-5 w-5" />
                  <span>{t("sendMessage", language)}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Visit our office for in-person consultations and support
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    transition: { duration: 2, repeat: Infinity },
                  }}
                >
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                </motion.div>
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">
                  Google Maps integration would be implemented here
                </p>
              </div>
            </div> */}
            {/* Add Map when location is confirmed */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
