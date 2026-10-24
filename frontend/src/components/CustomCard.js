import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function CustomCard({
  title,
  description,
  benefits,
  targets,
  features,
  modules,
  image,
  link,
  cta,
  ctaContact,
  variant = "default"
}) {
  const { t } = useTranslation();
  const isWide = variant === "wide";
  const isDetail = variant === "detail";

  return (
    <Card
      className={`custom-card h-100 shadow-sm ${
        isWide ? "custom-card-wide" : ""
      } ${isDetail ? "custom-card-detail" : ""}`}
    >
      {image && (
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className="custom-card-img"
        />
      )}
      <Card.Body>
        <Card.Title className="custom-card-title">{title}</Card.Title>
        {description && <Card.Text>{description}</Card.Text>}

        {features && features.length > 0 && (
          <>
            <h6 className="custom-card-subtitle">{t("card.features")}</h6>
            <ul>
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </>
        )}

        {modules && modules.length > 0 && (
          <>
            <h6 className="custom-card-subtitle">
              {isDetail ? t("card.availableModules") : t("card.modules")}
            </h6>
            <ul>
              {modules.map((m, i) => {
                if (typeof m === "string") {
                  return <li key={i}>{m}</li>;
                }
                if (typeof m === "object") {
                  return (
                    <li key={i}>
                      {m.name} {m.code ? `(${m.code})` : ""}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </>
        )}

        {benefits && benefits.length > 0 && (
          <>
            <h6 className="custom-card-subtitle">
              {isWide ? t("card.categories") : t("card.benefits")}
            </h6>
            {isWide ? (
              <Row>
                {benefits.map((b, i) => (
                  <Col xs={12} md={6} key={i}>
                    <li>{b}</li>
                  </Col>
                ))}
              </Row>
            ) : (
              <ul>
                {benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {targets && targets.length > 0 && (
          <>
            <h6 className="custom-card-subtitle">{t("card.targets")}</h6>
            <ul>
              {targets.map((tgt, i) => (
                <li key={i}>{tgt}</li>
              ))}
            </ul>
          </>
        )}

        {(link || ctaContact) && (
          <div className="mt-3 d-flex gap-2">
            {link && cta && (
              <Button variant="primary" href={link}>
                {cta}
              </Button>
            )}
            {ctaContact && (
              <Button variant="outline-success" href={ctaContact}>
                {t("card.requestConsultation")}
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
