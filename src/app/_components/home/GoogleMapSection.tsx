"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

interface GoogleMapSectionProps {
  latitude?: number;
  longitude?: number;
  mapZoom?: number;
  title?: string;
  subtitle?: string;
}

export default function GoogleMapSection({
  latitude = 47.4979,
  longitude = 19.0402,
  mapZoom = 15,
  title = "Visit Us",
  subtitle = "Find our location and get in touch",
}: GoogleMapSectionProps) {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: "Budapest, Hungary",
      color: "#6B9B8A",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+36 1 XXX XXXX",
      color: "#8BB5A8",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "hello@cabinetpsihologie.com",
      color: "#A8C9BE",
    },
    {
      icon: FaClock,
      label: "Hours",
      value: "Mon-Fri, 9am-6pm",
      color: "#BDD8CF",
    },
  ];

  return (
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
            {title}
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
            {subtitle}
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {/* Map */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(100, 150, 150, 0.15)",
                  height: { xs: 350, md: 450 },
                }}
              >
                <iframe
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${latitude},${longitude}&z=${mapZoom}&output=embed`}
                ></iframe>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        background:
                          "linear-gradient(135deg, rgba(250, 252, 252, 0.8) 0%, rgba(245, 250, 250, 0.8) 100%)",
                        border: "1px solid rgba(200, 220, 220, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 8px 24px rgba(100, 150, 150, 0.12)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            background: `${info.color}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            color: info.color,
                            fontSize: "1.25rem",
                          }}
                        >
                          <IconComponent />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            sx={{
                              color: "#556b68",
                              fontSize: "0.85rem",
                              fontWeight: 500,
                              letterSpacing: "0.5px",
                              textTransform: "uppercase",
                              mb: 0.5,
                            }}
                          >
                            {info.label}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#2d4a47",
                              fontSize: "1.05rem",
                              fontWeight: 600,
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
