import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import developmentData from "../data/development-data.json";
import { useTranslation } from "react-i18next";

export default function DevelopmentPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Container className="my-5">
        <h2 className="mb-4">{t("devpage.pageTitle")}</h2>
        <Row>
          {developmentData.development.map((dev, idx) => {
            const previewModules = dev.modules
              ? dev.modules.slice(0, 2).map((m, i) =>
                  t(`devpage.${dev.id}.modules.${i}`)
                )
              : [];

            return (
              <Col md={6} lg={4} className="mb-4" key={idx}>
                <CustomCard
                  title={t(`devpage.${dev.id}.title`)}
                  description={t(`devpage.${dev.id}.description`)}
                  modules={previewModules}
                  benefits={dev.benefits.map((b, i) =>
                    t(`devpage.${dev.id}.benefits.${i}`)
                  )}
                  targets={dev.targets.map((tgt, i) =>
                    t(`devpage.${dev.id}.targets.${i}`)
                  )}
                  image={`/assets/development/${dev.image}`}
                  link={dev.link}
                  cta={t("devpage.exploreMore")}
                  ctaContact={dev.ctaContact}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </MainLayout>
  );
}
