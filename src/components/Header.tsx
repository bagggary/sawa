import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { t, formatPhoneNumber } from "../utils/translations";
import Logo from "../assets/SawaFinal.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const navItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "services", path: "/services" },
    { key: "resources", path: "/resources" },
    { key: "blog", path: "/blog" },
    { key: "contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{formatPhoneNumber("+966 123 456 789", language)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@sawawithpatient.com</span>
              </div>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:bg-gray-800 px-3 py-1 rounded transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-1">
              {/* <div className="bg-gray-100 p-2 rounded-full"> */}
              {/* <Heart className="h-8 w-8 text-red-600" fill="#D9241C" /> */}
              {/* </div> */}
              <img
                src={Logo}
                alt="sawaWithPatient Logo"
                className="h-10 w-10"
              />
              <div>
                <h1 className="text-xl xl:text-2xl font-bold text-gray-900">
                  SawaWithPatient
                </h1>
                <p className="text-xs xl:text-sm text-gray-600">
                  {t("heroTitle", language)}
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation*/}
          <nav className="hidden lg:flex items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <div key={item.key}>
                <Link
                  to={item.path}
                  className={`text-gray-700 hover:text-red-600 transition-colors font-medium relative text-sm xl:text-base ${
                    isActive(item.path) ? "text-red-600" : ""
                  }`}
                  style={{ color: isActive(item.path) ? "#D9241C" : undefined }}
                >
                  {t(item.key, language)}
                  {isActive(item.path) && (
                    <div
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: "#D9241C" }}
                    />
                  )}
                </Link>
              </div>
            ))}
            <div className="flex items-center space-x-3 xl:gap-2">
              <Link
                to="/emergency"
                className="bg-red-600 text-white px-3 xl:px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
                style={{ backgroundColor: "#D9241C" }}
              >
                {t("emergency", language)}
              </Link>
              <Link
                to="/appointments"
                className="bg-gray-900 text-white px-3 xl:px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {t("appointments", language)}
              </Link>
            </div>
          </nav>

          {/* Tablet Navigation - Better spacing and layout */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.slice(0, 4).map((item) => (
              <div key={item.key}>
                <Link
                  to={item.path}
                  className={`text-gray-700 hover:text-red-600 transition-colors font-medium relative text-sm ${
                    isActive(item.path) ? "text-red-600" : ""
                  }`}
                  style={{ color: isActive(item.path) ? "#D9241C" : undefined }}
                >
                  {t(item.key, language)}
                  {isActive(item.path) && (
                    <div
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: "#D9241C" }}
                    />
                  )}
                </Link>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <Link
                to="/emergency"
                className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-xs whitespace-nowrap"
                style={{ backgroundColor: "#D9241C" }}
              >
                Emergency
              </Link>
              <Link
                to="/appointments"
                className="bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-xs whitespace-nowrap"
              >
                Book
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden lg:hidden py-4 border-t border-gray-200 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.key}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-gray-700 hover:text-red-600 transition-colors font-medium py-2 block ${
                        isActive(item.path) ? "text-red-600" : ""
                      }`}
                      style={{
                        color: isActive(item.path) ? "#D9241C" : undefined,
                      }}
                    >
                      {t(item.key, language)}
                    </Link>
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <Link
                    to="/emergency"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-center block"
                    style={{ backgroundColor: "#D9241C" }}
                  >
                    {t("emergency", language)}
                  </Link>
                  <Link
                    to="/appointments"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-center block"
                  >
                    {t("appointments", language)}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
