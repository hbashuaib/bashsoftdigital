import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col, Card } from "react-bootstrap";
import appsData from "../data/apps-data.json";
import CustomCard from "../components/CustomCard";
import { useTranslation } from "react-i18next";

export default function AppDetailPage() {
  const { appId } = useParams();
  const { t } = useTranslation();

  const app = appsData.apps.find(a => a.id === appId);

  if (!app) {
    return (
      <MainLayout>
        <Container className="my-5">
          <h2>{t("apps.notFound.title")}</h2>
          <p>{t("apps.notFound.description")}</p>
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
              src={`/assets/banners/${app.image}`}
              alt={`${t(`apps.${app.id}.title`)} banner`}
              className="w-100 rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </Col>
        </Row>

        {/* Screenshots Carousel (enable when screenshots available) */}
        {/* {app.screenshots && app.screenshots.length > 0 && (
          <Row className="mb-4">
            <Col>
              <Carousel>
                {app.screenshots.map((shot, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      src={`/assets/screenshots/${shot}`}
                      alt={`${t(`apps.${app.id}.title`)} screenshot ${idx + 1}`}
                      className="d-block w-100 rounded shadow"
                      style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        )} */}

        {/* Details */}
        <Row>
          <Col md={8}>
            <CustomCard
              title={t(`apps.${app.id}.title`)}
              description={t(`apps.${app.id}.description`)}
              features={app.features.map((f, i) => t(`apps.${app.id}.features.${i}`))}
              benefits={app.benefits.map((b, i) => t(`apps.${app.id}.benefits.${i}`))}
              targets={app.targets.map((tgt, i) => t(`apps.${app.id}.targets.${i}`))}
              link={app.link}
              cta={t("apps.learnMore")}
              variant="detail"
            />
          </Col>

          {/* Side Card */}
          <Col md={4}>
            <Card className="custom-card shadow-sm">
              <Card.Body>
                <Card.Title>
                  {t("apps.detail.about")} {t(`apps.${app.id}.title`)}
                </Card.Title>
                <Card.Text>
                  {t("apps.detail.learn")} {t(`apps.${app.id}.title`)}{" "}
                  {t("apps.detail.journey")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
