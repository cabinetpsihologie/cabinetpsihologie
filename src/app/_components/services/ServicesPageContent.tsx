"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ServiceCard from "@/app/_components/home/ServiceCard";
import ContactForm from "@/app/_components/contact/ContactForm";
import {
  FaHeartPulse,
  FaBrain,
  FaPeopleGroup,
  FaPeopleRoof,
  FaUniversalAccess,
  FaHandHoldingHeart,
} from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function ServicesPageContent() {
  const t = useTranslations("home");

  const services = [
    {
      title: t("services.items.psychotherapy.title"),
      description: t("services.items.psychotherapy.description"),
      icon: <FaHeartPulse />,
    },
    {
      title: t("services.items.cognitive.title"),
      description: t("services.items.cognitive.description"),
      icon: <FaBrain />,
    },
    {
      title: t("services.items.couples.title"),
      description: t("services.items.couples.description"),
      icon: <FaPeopleGroup />,
    },
    {
      title: t("services.items.family.title"),
      description: t("services.items.family.description"),
      icon: <FaPeopleRoof />,
    },
    {
      title: t("services.items.anxiety.title"),
      description: t("services.items.anxiety.description"),
      icon: <FaUniversalAccess />,
    },
    {
      title: t("services.items.trauma.title"),
      description: t("services.items.trauma.description"),
      icon: <FaHandHoldingHeart />,
    },
  ];

  return (
    <>
      {/* Services Overview Section */}
      <Box
        sx={{
          py: { xs: 12, md: 16 },
          background:
            "linear-gradient(135deg, rgba(245, 252, 250, 0.8) 0%, rgba(250, 248, 255, 0.8) 100%)",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 4,
                fontWeight: 600,
                color: "#2d4a47",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                letterSpacing: "-0.5px",
              }}
            >
              Comprehensive Mental Health Support
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#556b68",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              We offer a range of evidence-based psychological services tailored
              to meet your unique needs. Our compassionate approach and safe,
              welcoming environment are designed to support you on your journey
              toward emotional wellness and personal growth.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid Section */}
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 2,
                fontWeight: 600,
                color: "#2d4a47",
                letterSpacing: "-0.5px",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              {t("services.title")}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                mb: 8,
                color: "#556b68",
                fontSize: "1rem",
                maxWidth: 600,
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Each service is designed with your wellbeing in mind, combining
              professional expertise with a compassionate, personalized
              approach.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  delay={index * 0.1}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Detailed Services Section with Descriptions */}
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          {/* Individual Service Details */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box
                sx={{
                  mb: { xs: 10, md: 14 },
                  pb: { xs: 8, md: 12 },
                  borderBottom:
                    index < services.length - 1
                      ? "1px solid rgba(200, 220, 220, 0.3)"
                      : "none",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      fontSize: "2rem",
                      color: "#6B9B8A",
                      mr: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#2d4a47",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#556b68",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    fontWeight: 400,
                    mb: 3,
                    maxWidth: "900px",
                  }}
                >
                  {service.description}
                </Typography>

                {/* Service Benefits/Details */}
                <Typography
                  sx={{
                    color: "#556b68",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    fontWeight: 400,
                    fontStyle: "italic",
                    pl: 2,
                    borderLeft: "3px solid rgba(107, 155, 138, 0.3)",
                  }}
                >
                  This service is delivered by licensed professionals in a
                  confidential, supportive setting designed for your comfort and
                  healing.
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Container>
      </Box>

      {/* Approach Section */}
      <Box
        sx={{
          py: { xs: 12, md: 16 },
          background:
            "linear-gradient(135deg, rgba(245, 252, 250, 0.9) 0%, rgba(250, 248, 255, 0.9) 100%)",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 4,
                fontWeight: 600,
                color: "#2d4a47",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                letterSpacing: "-0.5px",
              }}
            >
              Our Approach
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#556b68",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontWeight: 400,
                mb: 4,
              }}
            >
              We believe in evidence-based therapy that respects your unique
              circumstances and goals. Every session is a collaborative journey
              where your voice matters and your progress is our priority.
            </Typography>

            {/* Approach Points */}
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {[
                {
                  title: "Confidential",
                  description:
                    "Your privacy and trust are paramount in our therapeutic relationship.",
                },
                {
                  title: "Evidence-Based",
                  description:
                    "We use proven therapeutic techniques tailored to your needs.",
                },
                {
                  title: "Compassionate",
                  description:
                    "We meet you with empathy, acceptance, and genuine care.",
                },
              ].map((point, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "12px",
                        background:
                          "linear-gradient(135deg, rgba(245, 252, 250, 0.8) 0%, rgba(250, 248, 255, 0.8) 100%)",
                        border: "1px solid rgba(200, 220, 220, 0.3)",
                        textAlign: "center",
                        transition:
                          "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        "&:hover": {
                          borderColor: "rgba(107, 155, 138, 0.5)",
                          boxShadow: "0 8px 24px rgba(107, 155, 138, 0.1)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#6B9B8A",
                          mb: 1.5,
                          fontSize: "1.1rem",
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      >
                        {point.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA and Contact Section */}
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box sx={{ pl: { md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: "#2d4a47",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    Ready to Begin Your Journey?
                  </Typography>
                  <Typography
                    sx={{
                      color: "#556b68",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      fontWeight: 400,
                      mb: 4,
                    }}
                  >
                    Taking the first step toward better mental health can feel
                    challenging, but you don&apos;t have to do it alone. Our
                    experienced therapists are here to support you every step of
                    the way. Get in touch today to schedule your initial
                    consultation and discover how our services can help you
                    achieve your goals.
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6B9B8A",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    📍 Located in Budapest, Hungary
                  </Typography>
                  <Typography
                    sx={{
                      color: "#6B9B8A",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    🕐 Available Monday - Friday, 9:00 AM - 6:00 PM
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
