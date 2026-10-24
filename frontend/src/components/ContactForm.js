import React, { useState, useEffect } from "react";
import theme from "../core/theme";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";
import api from "../api/axios";   // ✅ use axios helper

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusKey, setStatusKey] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    e.target.setCustomValidity("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInvalid = (e) => {
    if (e.target.name === "name") {
      e.target.setCustomValidity(t("contactForm.validation.nameRequired"));
    } else if (e.target.name === "email") {
      e.target.setCustomValidity(t("contactForm.validation.emailRequired"));
    } else if (e.target.name === "message") {
      e.target.setCustomValidity(t("contactForm.validation.messageRequired"));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusKey("sending");
    setIsSubmitting(true);

    try {
      const response = await api.post("/contact/", formData);  // ✅ correct endpoint
      if (response.status === 200) {
        setStatusKey("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusKey("error");
      }
    } catch (error) {
      console.error("ContactForm error:", error.response || error);
      setStatusKey("networkError");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (statusKey && statusKey !== "success") {
      const timer = setTimeout(() => setStatusKey(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [statusKey]);

  const getVariant = (key) => {
    switch (key) {
      case "success": return "success";
      case "error": return "danger";
      case "networkError": return "warning";
      case "sending": return "info";
      default: return "secondary";
    }
  };

  const resetForm = () => {
    setStatusKey("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" style={{ padding: theme.spacing.section }}>
      {statusKey === "success" ? (
        <div className="text-center my-4">
          <FaCheckCircle size={48} color="green" />
          <h5 className="mt-3">{t("contactForm.thankYouTitle")}</h5>
          <p>{t("contactForm.thankYouMessage")}</p>
          <Button variant="secondary" onClick={resetForm} className="mt-3">
            {t("contactForm.reset")}
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>{t("contactForm.name")}</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onInvalid={handleInvalid}
              placeholder={t("contactForm.placeholders.name")}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{t("contactForm.email")}</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onInvalid={handleInvalid}
              placeholder={t("contactForm.placeholders.email")}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>{t("contactForm.message")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              onInvalid={handleInvalid}
              placeholder={t("contactForm.placeholders.message")}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                {t("contactForm.sending")}
              </>
            ) : (
              t("contactForm.send")
            )}
          </Button>
        </Form>
      )}

      {statusKey && statusKey !== "success" && (
        <Alert variant={getVariant(statusKey)} className="mt-3">
          {t(`contactForm.${statusKey}`)}
        </Alert>
      )}
    </div>
  );
}
