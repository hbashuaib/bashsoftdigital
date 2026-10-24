import React from "react";
import { Container, Carousel, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// ✅ Import images from src/assets
import bashchatBanner from "../assets/banners/bashchat.jpg";
import bashflexBanner from "../assets/banners/bashflex.jpg";
import bashkartBanner from "../assets/banners/bashkart.jpg";
import bashmotorsBanner from "../assets/banners/bashmotors.jpg";

export default function HeroCarousel() {
  const { t } = useTranslation();

  const apps = [
    { id: "bashchat", banner: bashchatBanner, status: "new" },
    { id: "bashflex", banner: bashflexBanner, status: "new" },
    { id: "bashkart", banner: bashkartBanner, status: "upcoming" },
    { id: "bashmotors", banner: bashmotorsBanner, status: "" },
  ];

  return (
    <Container className="my-5">
      <Carousel className="mt-4 hero-carousel" fade interval={4000}>
        {apps.map((app, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 hero-carousel-img"
              src={app.banner}
              alt={`${t(`carousel.${app.id}.name`)} banner`}
            />
            <Carousel.Caption>
              <h2>
                {t(`carousel.${app.id}.name`)}{" "}
                {app.status && (
                  <Badge
                    bg={app.status === "new" ? "success" : "warning"}
                  >
                    {t(`carousel.status.${app.status}`)}
                  </Badge>
                )}
              </h2>
              <p>{t(`carousel.${app.id}.caption`)}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
