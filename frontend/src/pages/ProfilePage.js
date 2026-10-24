import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ProfilePage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Container className="my-5">
        <h2 className="mb-4">{t("profilepage.pageTitle")}</h2>
        <Row>
          {/* Main Bio */}
          <Col md={8}>
            <Card className="custom-card shadow-sm">
              <Card.Body>
                <Card.Title className="custom-card-title">
                  {t("profilepage.name")}
                </Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  {t("profilepage.subtitle")}
                </Card.Subtitle>
                <Card.Text>{t("profilepage.bio1")}</Card.Text>
                <Card.Text>{t("profilepage.bio2")}</Card.Text>
                <Card.Text>{t("profilepage.bio3")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Quick Facts */}
          <Col md={4}>
            <Card className="custom-card shadow-sm">
              <Card.Body>
                <h6 className="custom-card-subtitle">{t("profilepage.quickFacts.title")}</h6>
                <ul>
                  <li>{t("profilepage.quickFacts.location")}</li>
                  <li>{t("profilepage.quickFacts.founder")}</li>
                  <li>{t("profilepage.quickFacts.dhl")}</li>
                  <li>{t("profilepage.quickFacts.education")}</li>
                  <li>{t("profilepage.quickFacts.languages")}</li>
                  <li>{t("profilepage.quickFacts.skills")}</li>
                  <li>{t("profilepage.quickFacts.awards")}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
