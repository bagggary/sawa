import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ar");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL }}>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={isRTL ? "font-arabic" : "font-english"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
