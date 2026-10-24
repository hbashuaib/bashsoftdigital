import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col, Card } from "react-bootstrap";
import developmentData from "../data/development-data.json";
import CustomCard from "../components/CustomCard";
import { useTranslation } from "react-i18next";

export default function DevelopmentDetailPage() {
  const { devId } = useParams();
  const { t } = useTranslation();

  const dev = developmentData.development.find(d => d.id === devId);

  if (!dev) {
    return (
      <MainLayout>
        <Container className="my-5">
          <h2>{t("devpage.notFound.title")}</h2>
          <p>{t("devpage.notFound.description")}</p>
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
              src={`/assets/development/${dev.image}`}
              alt={`${t(`devpage.${dev.id}.title`)} banner`}
              className="w-100 rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </Col>
        </Row>

        {/* Details */}
        <Row>
          <Col md={8}>
            <CustomCard
              title={t(`devpage.${dev.id}.title`)}
              description={t(`devpage.${dev.id}.description`)}
              features={dev.features.map((f, i) =>
                t(`devpage.${dev.id}.features.${i}`)
              )}
              modules={dev.modules.map((m, i) =>
                t(`devpage.${dev.id}.modules.${i}`)
              )}
              benefits={dev.benefits.map((b, i) =>
                t(`devpage.${dev.id}.benefits.${i}`)
              )}
              targets={dev.targets.map((tgt, i) =>
                t(`devpage.${dev.id}.targets.${i}`)
              )}
              ctaContact={dev.ctaContact}
              variant="detail"
            />
          </Col>

          {/* Side Card */}
          <Col md={4}>
            <Card className="custom-card shadow-sm">
              <Card.Body>
                <Card.Title>
                  {t("devpage.detail.about")} {t(`devpage.${dev.id}.title`)}
                </Card.Title>
                <Card.Text>
                  {t("devpage.detail.learn")} {t(`devpage.${dev.id}.title`)}{" "}
                  {t("devpage.detail.growth")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
