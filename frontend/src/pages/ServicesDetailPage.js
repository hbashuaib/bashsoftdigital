import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col, Card } from "react-bootstrap";
import servicesData from "../data/services-data.json";
import CustomCard from "../components/CustomCard";
import { useTranslation } from "react-i18next";

export default function ServicesDetailPage() {
  const { serviceId } = useParams();
  const { t } = useTranslation();

  const service = servicesData.services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <MainLayout>
        <Container className="my-5">
          <h2>{t("servicespage.notFound.title")}</h2>
          <p>{t("servicespage.notFound.description")}</p>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Container className="my-5">
        {/* Banner */}
        <Row className="mb-4">
          <Col>
            <img
              src={`/assets/services/${service.image}`}
              alt={`${t(`servicespage.${service.id}.title`)} banner`}
              className="w-100 rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </Col>
        </Row>

        {/* Details */}
        <Row>
          <Col md={8}>
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
              link={service.link}
              ctaContact={service.ctaContact}
              variant="detail"
            />
          </Col>

          {/* Side Card */}
          <Col md={4}>
            <Card className="custom-card shadow-sm">
              <Card.Body>
                <Card.Title>
                  {t("servicespage.detail.about")} {t(`servicespage.${service.id}.title`)}
                </Card.Title>
                <Card.Text>
                  {t("servicespage.detail.learn")} {t(`servicespage.${service.id}.title`)}{" "}
                  {t("servicespage.detail.growth")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
