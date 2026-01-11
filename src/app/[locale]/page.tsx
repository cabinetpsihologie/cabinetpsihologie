"use client";

import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";
import HeroSection from "@/app/_components/hero/HeroSection";
import { useTranslations } from "next-intl";
import { env } from "@/app/_config/env.config";
import ServiceCard from "@/app/_components/home/ServiceCard";
import OfficeGallery from "@/app/_components/home/OfficeGallery";
import ContactForm from "@/app/_components/contact/ContactForm";
import GoogleMapSection from "@/app/_components/home/GoogleMapSection";
import BlogSection from "@/app/_components/home/BlogSection";
import { motion } from "framer-motion";
import {
  FaHeartPulse,
  FaBrain,
  FaPeopleGroup,
  FaPeopleRoof,
  FaUniversalAccess,
  FaHandHoldingHeart,
} from "react-icons/fa6";

export default function Home() {
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Psychology Cabinet",
    image: `${env.SITE_URL}/logo.jpg`,
    "@id": `${env.SITE_URL}`,
    url: `${env.SITE_URL}`,
    telephone: "+36-1-XXX-XXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Budapest",
      addressLocality: "Budapest",
      postalCode: "1000",
      addressCountry: "HU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <Box>
      <Header />
      {/* Hero Section */}
      <HeroSection title={t("hero.title")} />
      {/* Introduction Section */}
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
              {t("introduction.title")}
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
              {t("introduction.description")}
            </Typography>
          </motion.div>
        </Container>
      </Box>
      {/* Services Section */}
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
              {t("services.subtitle")}
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
      {/* Gallery Section */}
      <OfficeGallery
        title={t("gallery.title")}
        subtitle={t("gallery.subtitle")}
      />
      {/* Blog Section */}
      <BlogSection /> <div id="contact"></div>
      {/* Contact Section */}
      <Box sx={{ bgcolor: "#fff" }}>
        <Divider
          variant="middle"
          sx={{ borderColor: "lightgray", width: "70%", margin: "auto" }}
        />
      </Box>
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="flex-start"
            // bgcolor={"#6B9B8A"}
            paddingBottom={0}
            borderRadius={6}
          >
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
                    {t("cta.title")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#556b68",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      fontWeight: 400,
                    }}
                  >
                    {t("cta.subtitle")}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#fff" }}>
        <Divider
          variant="middle"
          sx={{ borderColor: "lightgray", width: "70%", margin: "auto" }}
        />
      </Box>
      {/* Map Section */}
      <GoogleMapSection
        latitude={47.4979}
        longitude={19.0402}
        title={t("gallery.title")}
        subtitle={t("gallery.subtitle")}
      />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Box>
  );
}
