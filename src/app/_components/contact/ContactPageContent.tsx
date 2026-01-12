"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ContactForm from "@/app/_components/contact/ContactForm";

interface ContactInfo {
  icon: string;
  title: string;
  details: string;
  description: string;
}

interface ContactPageContentProps {
  contactInfo: ContactInfo[];
}

export default function ContactPageContent({ contactInfo }: ContactPageContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const iconMap: { [key: string]: string } = {
    phone: "📞",
    email: "✉️",
    location: "📍",
  };

  return (
    <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#2d4a47",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                letterSpacing: "-0.5px",
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              sx={{
                color: "#556b68",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontWeight: 400,
                mb: 8,
                maxWidth: "600px",
              }}
            >
              I&apos;m here to help. Reach out with any questions, and let&apos;s discuss how I can support your mental health journey.
            </Typography>
          </motion.div>

          {/* Contact Info & Form */}
          <Grid container spacing={8} alignItems="stretch">
            {/* Left - Contact Information */}
            <Grid item xs={12} md={5}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Box
                        sx={{
                          p: 4,
                          borderRadius: "12px",
                          background: "linear-gradient(135deg, rgba(245, 252, 250, 0.6) 0%, rgba(250, 248, 255, 0.6) 100%)",
                          border: "1px solid rgba(200, 220, 220, 0.3)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "rgba(107, 155, 138, 0.5)",
                            boxShadow: "0 8px 24px rgba(107, 155, 138, 0.1)",
                            transform: "translateY(-4px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2.5,
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: "2rem",
                              mt: 0.5,
                            }}
                          >
                            {iconMap[info.icon] || info.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: "#2d4a47",
                                mb: 1,
                                fontSize: "1.1rem",
                              }}
                            >
                              {info.title}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#6B9B8A",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                mb: 0.5,
                              }}
                            >
                              {info.details}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#556b68",
                                fontSize: "0.9rem",
                                lineHeight: 1.5,
                              }}
                            >
                              {info.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Right - Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(245, 252, 250, 0.4) 0%, rgba(250, 248, 255, 0.4) 100%)",
                    border: "1px solid rgba(200, 220, 220, 0.3)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <ContactForm />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
