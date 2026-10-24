import React from "react";
import mainBanner from "../assets/banners/main_banner_bg.jpg";
import { useTranslation } from "react-i18next";

export default function HeroBanner() {
  const { t } = useTranslation();

  return (
    <div
      className="hero-banner d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${mainBanner})`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{t("hero.title")}</h1>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>
      </div>
    </div>
  );
}
