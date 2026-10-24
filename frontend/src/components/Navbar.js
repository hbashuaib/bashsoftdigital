import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import logo from "../assets/logo/bashsoft_logo.png";

export default function AppNavbar() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="sticky-top shadow-sm"
      style={{
        backgroundColor: "rgba(0, 123, 255, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left: Brand */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold d-flex align-items-center text-white"
        >
          <img
            src={logo}
            alt="BashSoft Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          BashSoft Digital
        </Navbar.Brand>

        {/* Center: Toggle */}
        <button
          onClick={toggleLanguage}
          className="btn btn-outline-light btn-sm px-3 d-flex align-items-center lang-toggle-btn"
        >
          <FaGlobe />
          <span>{i18n.language === "en" ? "ع" : "EN"}</span>
        </button>

        {/* Right: Menus */}
        <div className="navbar-zone">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/apps" className="nav-link-custom">{t("applications")}</NavLink>
              <NavLink to="/services" className="nav-link-custom">{t("services")}</NavLink>
              <NavLink to="/trainings" className="nav-link-custom">{t("trainings")}</NavLink>
              <NavLink to="/development" className="nav-link-custom">{t("development")}</NavLink>
              <NavLink to="/profile" className="nav-link-custom">{t("profile")}</NavLink>
              <NavLink to="/contact" className="nav-link-custom">{t("contact")}</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
