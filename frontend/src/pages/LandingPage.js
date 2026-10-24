import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroBanner from "../components/HeroBanner";      // Stable welcome banner
import HeroCarousel from "../components/HeroCarousel";  // Sliding apps showcase
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";             // ✅ for navigation

export default function LandingPage() {
  const { t } = useTranslation();

  const sections = [
    {
      id: "apps",
      title: t("landing.apps.title"),
      description: t("landing.apps.description"),
      path: "/apps"
    },
    {
      id: "services",
      title: t("landing.services.title"),
      description: t("landing.services.description"),
      path: "/services"
    },
    {
      id: "trainings",
      title: t("landing.trainings.title"),
      description: t("landing.trainings.description"),
      path: "/trainings"
    },
    {
      id: "development",
      title: t("landing.development.title"),
      description: t("landing.development.description"),
      path: "/development"
    },
    {
      id: "profile",
      title: t("landing.profile.title"),
      description: t("landing.profile.description"),
      path: "/profile"
    }
  ];

  return (
    <MainLayout>
      {/* ✅ Stable Hero Banner */}
      <HeroBanner />

      {/* ✅ Hero Slide Carousel */}
      <HeroCarousel />

      {/* ✅ Sections */}
      <Container className="my-5">
        <Row>
          {sections.map((section, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <NavLink to={section.path} className="text-decoration-none">
                <CustomCard
                  title={section.title}
                  description={section.description}
                />
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
}
