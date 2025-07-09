import { Link } from "react-router-dom";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { t, formatPhoneNumber } from "../utils/translations";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gray-100 p-2 rounded-full">
                <Heart className="h-8 w-8 text-red-600" fill="#D9241C" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SawaWithPatient</h3>
                <p className="text-gray-400">{t("heroTitle", language)}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t("heroSubtitle", language)}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone
                  className="h-5 w-5 text-red-600"
                  style={{ color: "#D9241C" }}
                />
                <span>{formatPhoneNumber("+966 123 456 789", language)}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  className="h-5 w-5 text-red-600"
                  style={{ color: "#D9241C" }}
                />
                <span>info@sawawithpatient.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin
                  className="h-5 w-5 text-red-600"
                  style={{ color: "#D9241C" }}
                />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("quickLinks", language)}
            </h3>
            <ul className="space-y-2">
              {[
                { key: "about", path: "/about" },
                { key: "services", path: "/services" },
                { key: "resources", path: "/resources" },
                { key: "blog", path: "/blog" },
                { key: "contact", path: "/contact" },
                { key: "emergency", path: "/emergency" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {t(item.key, language)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("followUs", language)}
            </h3>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {formatPhoneNumber("2024", language)} SawaWithPatient.{" "}
              {t("allRightsReserved", language)}.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-red-400 text-sm transition-colors"
              >
                {t("privacyPolicy", language)}
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-red-400 text-sm transition-colors"
              >
                {t("termsConditions", language)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
