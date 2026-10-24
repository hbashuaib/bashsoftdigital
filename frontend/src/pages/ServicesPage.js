import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import servicesData from "../data/services-data.json";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Container className="my-5">
        <h2 className="mb-4">{t("servicespage.pageTitle")}</h2>
        <Row>
          {servicesData.services.map((service, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <CustomCard
                title={t(`servicespage.${service.id}.title`)}
                description={t(`servicespage.${service.id}.description`)}
                features={service.features.map((f, i) =>
                  t(`servicespage.${service.id}.features.${i}`)
                )}
                benefits={service.benefits.map((b, i) =>
                  t(`servicespage.${service.id}.benefits.${i}`)
                )}
                targets={service.targets.map((tgt, i) =>
                  t(`servicespage.${service.id}.targets.${i}`)
                )}
                image={`/assets/services/${service.image}`}
                link={service.link}
                cta={t("servicespage.exploreMore")}
                ctaContact={service.ctaContact}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
}
