import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import trainingsData from "../data/trainings-data.json";
import { useTranslation } from "react-i18next";

export default function TrainingsPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Container className="my-5">
        <h2 className="mb-4">{t("trainingspage.pageTitle")}</h2>
        <Row>
          {trainingsData.trainings.map((training, idx) => {
            // ✅ Slice first 2 modules directly (objects)
            const previewModules = training.modules
              ? training.modules.slice(0, 2).map((m, i) =>
                  t(`trainingspage.${training.id}.modules.${i}.name`)
                )
              : [];

            return (
              <Col md={6} lg={4} className="mb-4" key={idx}>
                <CustomCard
                  title={t(`trainingspage.${training.id}.title`)}
                  description={t(`trainingspage.${training.id}.description`)}
                  modules={previewModules}
                  benefits={training.benefits.map((b, i) =>
                    t(`trainingspage.${training.id}.benefits.${i}`)
                  )}
                  targets={training.targets.map((tgt, i) =>
                    t(`trainingspage.${training.id}.targets.${i}`)
                  )}
                  image={`/assets/trainings/${training.image}`}
                  link={training.link}
                  cta={t("trainingspage.exploreMore")}
                  ctaContact={training.ctaContact}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </MainLayout>
  );
}
