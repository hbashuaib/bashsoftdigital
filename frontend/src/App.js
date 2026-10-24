import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./core/ThemeContext";
import BootstrapThemeProvider from "./core/bootstrapTheme";
import "./styles/custom.scss";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop";

import LandingPage from "./pages/LandingPage";
import AppsPage from "./pages/AppsPage";
import AppDetailPage from "./pages/AppDetailPage";
import ServicesPage from "./pages/ServicesPage";
import ServicesDetailPage from "./pages/ServicesDetailPage";
import TrainingsPage from "./pages/TrainingsPage";
import TrainingDetailPage from "./pages/TrainingDetailPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import DevelopmentDetailPage from "./pages/DevelopmentDetailPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import DesignSystemPage from "./pages/DesignSystemPage";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // ✅ Always update <html> attributes when language changes
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <BootstrapThemeProvider>
        <Router>
          <ScrollToTop />   {/* ✅ ensures every route starts at top */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/trainings" element={<TrainingsPage />} />
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/apps/:appId" element={<AppDetailPage />} />
            <Route path="/services/:serviceId" element={<ServicesDetailPage />} /> 
            <Route path="/trainings/:trainingId" element={<TrainingDetailPage />} />  
            <Route path="/development/:devId" element={<DevelopmentDetailPage />} />  
            <Route path="/design-system" element={<DesignSystemPage />} />
          </Routes>
        </Router>
      </BootstrapThemeProvider>
    </ThemeProvider>
  );
}

export default App;
