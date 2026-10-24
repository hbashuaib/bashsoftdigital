import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import appsData from "../data/apps-data.json";
import { useTranslation } from "react-i18next";

export default function AppsPage() {
  const { t } = useTranslation();

  const generalApps = {
    title: t("apps.general.title"),
    description: t("apps.general.description"),
    categories: [
      t("apps.general.categories.personal"),
      t("apps.general.categories.business"),
      t("apps.general.categories.training"),
      t("apps.general.categories.it")
    ]
  };

  return (
    <MainLayout>
      <Container className="my-5">
        <h2 className="mb-4">{t("apps.pageTitle")}</h2>
        <Row>
          {appsData.apps.map((app, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <CustomCard
                title={t(`apps.${app.id}.title`)}
                description={t(`apps.${app.id}.description`)}
                benefits={app.benefits.map((b, i) => t(`apps.${app.id}.benefits.${i}`))}
                targets={app.targets.map((tgt, i) => t(`apps.${app.id}.targets.${i}`))}
                image={`/assets/banners/${app.image}`}
                link={app.link}
                cta={t("apps.learnMore")}
              />
            </Col>
          ))}
        </Row>

        {/* General Applications Section */}
        <Row className="mt-5 gx-0">
          <CustomCard
            title={generalApps.title}
            description={generalApps.description}
            benefits={generalApps.categories}
            variant="wide"
          />
        </Row>
      </Container>
    </MainLayout>
  );
}
