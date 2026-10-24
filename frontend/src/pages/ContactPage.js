import React from "react";
import MainLayout from "../layouts/MainLayout";
import ContactForm from "../components/ContactForm";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Container className="my-5">
        <h2 className="mb-4">{t("contactpage.pageTitle")}</h2>
        <Row>
          {/* Contact Form */}
          <Col md={8}>
            <Card className="custom-card shadow-sm">
              <Card.Body>
                <ContactForm />
              </Card.Body>
            </Card>
          </Col>

          {/* Social & Phone Links */}
          <Col md={4}>
            <Card className="custom-card shadow-sm">
              <Card.Body>
                <h6 className="custom-card-subtitle">{t("contactpage.connectTitle")}</h6>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaFacebook color="#3b5998" />{" "}
                    <a
                      href="https://www.facebook.com/bashsoftdigital"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("contactpage.facebook")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <FaInstagram color="#E1306C" />{" "}
                    <a
                      href="https://www.instagram.com/bashsoftdigital"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("contactpage.instagram")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <FaWhatsapp color="#25D366" />{" "}
                    <a
                      href="https://wa.me/967734555978"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("contactpage.whatsapp")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <FaPhone color="#007bff" />{" "}
                    <a href="tel:+967734555978">+967 734 555 978</a>
                  </li>
                  <li className="mb-2">
                    <FaPhone color="#007bff" />{" "}
                    <a href="tel:+967775518001">+967 775 518 001</a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
