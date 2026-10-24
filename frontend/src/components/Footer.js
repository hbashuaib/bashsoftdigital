import React from "react";
import theme from "../core/theme";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.text,
        padding: "15px",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} BashSoft Digital
      </p>
      <div className="footer-links">
        <a
          href="https://www.facebook.com/bashsoftdigital"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaFacebook className="footer-icon" />
          <span>{t("footer.facebook")}</span>
        </a>
        <a
          href="https://www.instagram.com/bashsoftdigital"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaInstagram className="footer-icon" />
          <span>{t("footer.instagram")}</span>
        </a>
        <a
          href="https://wa.me/967734555978"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaWhatsapp className="footer-icon" />
          <span>{t("footer.whatsapp")}</span>
        </a>
      </div>
    </footer>
  );
}
