import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import trainingsData from "../data/trainings-data.json";
import CustomCard from "../components/CustomCard";
import { useTranslation } from "react-i18next";

export default function TrainingDetailPage() {
  const { trainingId } = useParams();
  const { t } = useTranslation();

  const training = trainingsData.trainings.find(tg => tg.id === trainingId);

  if (!training) {
    return (
      <MainLayout>
        <Container className="my-5">
          <h2>{t("trainingspage.notFound.title")}</h2>
          <p>{t("trainingspage.notFound.description")}</p>
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
              src={`/assets/trainings/${training.image}`}
              alt={`${t(`trainingspage.${training.id}.title`)} banner`}
              className="w-100 rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </Col>
        </Row>

        {/* Details Row */}
        <Row>
          <Col md={8}>
            <CustomCard
              title={t(`trainingspage.${training.id}.title`)}
              description={t(`trainingspage.${training.id}.description`)}
              features={training.features.map((f, i) =>
                t(`trainingspage.${training.id}.features.${i}`)
              )}
              benefits={training.benefits.map((b, i) =>
                t(`trainingspage.${training.id}.benefits.${i}`)
              )}
              targets={training.targets.map((tgt, i) =>
                t(`trainingspage.${training.id}.targets.${i}`)
              )}
              ctaContact={training.ctaContact}
              variant="detail"
            />
          </Col>

          {/* Side Card */}
          <Col md={4}>
            <Card className="custom-card shadow-sm">
              <Card.Body>
                <Card.Title>
                  {t("trainingspage.detail.about")} {t(`trainingspage.${training.id}.title`)}
                </Card.Title>
                <Card.Text>
                  {t("trainingspage.detail.learn")} {t(`trainingspage.${training.id}.title`)}{" "}
                  {t("trainingspage.detail.skills")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Training & Exam Table BELOW the row */}
        {training.modules && training.modules.length > 0 && (
          <Row className="mt-4">
            <Col>
              <Card className="custom-card shadow-sm mb-5">
                <Card.Body>
                  <Card.Title>{t("trainingspage.detail.tableTitle")}</Card.Title>
                  <Table striped bordered hover responsive className="mt-3 pricing-table">
                    <thead>
                      <tr>
                        <th>{t("trainingspage.detail.module")}</th>
                        <th>{t("trainingspage.detail.code")}</th>
                        <th>{t("trainingspage.detail.trainingCost")}</th>
                        <th>{t("trainingspage.detail.trainingDuration")}</th>
                        <th>{t("trainingspage.detail.examCost")}</th>
                        <th>{t("trainingspage.detail.examDuration")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {training.modules.map((mod, idx) => (
                        <tr key={idx}>
                          <td>{t(`trainingspage.${training.id}.modules.${idx}.name`)}</td>
                          <td>{mod.code || "N/A"}</td>
                          {mod.training ? (
                            <>
                              <td>
                                {mod.training.cost.replace("$", "")} {t("trainingspage.units.usd")}
                              </td>
                              <td>
                                {mod.training.duration.split(" ")[0]} {t("trainingspage.units.hours")}
                              </td>
                            </>
                          ) : (
                            <td colSpan={2} className="text-muted">
                              {t("trainingspage.detail.noTraining")}
                            </td>
                          )}
                          {mod.exam ? (
                            <>
                              <td>
                                {mod.exam.cost.replace("$", "")} {t("trainingspage.units.usd")}
                              </td>
                              <td>
                                {mod.exam.duration.split(" ")[0]} {t("trainingspage.units.minutes")}
                              </td>
                            </>
                          ) : (
                            <td colSpan={2} className="text-muted">
                              {t("trainingspage.detail.noExam")}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </MainLayout>
  );
}
