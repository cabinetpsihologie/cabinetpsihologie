"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link as IntlLink } from "@/navigation";
import { motion } from "framer-motion";

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
      //ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export default function Footer() {
  const t = useTranslations();

  const socialLinks = [
    {
      icon: FaFacebook,
      label: "Facebook",
      href: "#",
      color: "#1877F2",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "#",
      color: "#E4405F",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "#",
      color: "#0A66C2",
    },
  ];

  const menuItems = [
    { label: t("common.menu.services"), href: "/services" },
    { label: t("common.menu.about"), href: "/about" },
    { label: t("common.menu.blog"), href: "/blog" },
    { label: t("common.menu.contact"), href: "/contact" },
  ];

  return (
    <footer>
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(245, 252, 250, 0.8) 0%, rgba(250, 248, 255, 0.8) 100%)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(200, 220, 220, 0.25)",
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Grid container spacing={{ xs: 4, md: 8 }} mb={8}>
              {/* Brand Section */}
              <Grid item xs={12} sm={6} md={4}>
                <motion.div variants={itemVariants}>
                  <Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        background:
                          "linear-gradient(135deg, #6B9B8A 0%, #556b68 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-0.5px",
                        fontSize: { xs: "1.4rem", md: "1.6rem" },
                      }}
                    >
                      {t("common.brand.name")}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#556b68",
                        lineHeight: 1.8,
                        mb: 4,
                        maxWidth: "100%",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                      }}
                    >
                      Compassionate psychological services designed to support
                      your emotional wellbeing and personal growth.
                    </Typography>

                    {/* Social Links */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                      {socialLinks.map((social) => (
                        <motion.div
                          key={social.label}
                          whileHover={{
                            scale: 1.15,
                            y: -6,
                            rotateZ: 10,
                          }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <IconButton
                            component="a"
                            href={social.href}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: "14px",
                              background: `linear-gradient(135deg, ${social.color}15 0%, ${social.color}08 100%)`,
                              color: social.color,
                              transition:
                                "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                              border: `1.5px solid ${social.color}30`,
                              "&:hover": {
                                background: `linear-gradient(135deg, ${social.color}25 0%, ${social.color}15 100%)`,
                                borderColor: social.color,
                                boxShadow: `0 8px 24px ${social.color}20`,
                              },
                            }}
                          >
                            <social.icon size={20} />
                          </IconButton>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* Quick Links */}
              <Grid item xs={12} sm={6} md={4}>
                <motion.div variants={itemVariants}>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mb: 3,
                        color: "#2d4a47",
                        fontWeight: 700,
                        letterSpacing: "-0.3px",
                        fontSize: "1.05rem",
                      }}
                    >
                      Quick Links
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {menuItems.map((item) => (
                        <motion.div
                          key={item.label}
                          whileHover={{ x: 6 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                        >
                          <IntlLink
                            href={item.href}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                color: "#556b68",
                                fontWeight: 500,
                                fontSize: "0.95rem",
                                cursor: "pointer",
                                position: "relative",
                                width: "fit-content",
                                transition:
                                  "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                "&::after": {
                                  content: '""',
                                  position: "absolute",
                                  bottom: -4,
                                  left: 0,
                                  width: "0%",
                                  height: "2px",
                                  background:
                                    "linear-gradient(90deg, #6B9B8A, #8BB5A8)",
                                  transition:
                                    "width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                },
                                "&:hover": {
                                  color: "#6B9B8A",
                                  "&::after": {
                                    width: "100%",
                                  },
                                },
                              }}
                            >
                              {item.label}
                            </Typography>
                          </IntlLink>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* Contact Info */}
              <Grid item xs={12} sm={6} md={4}>
                <motion.div variants={itemVariants}>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mb: 3,
                        color: "#2d4a47",
                        fontWeight: 700,
                        letterSpacing: "-0.3px",
                        fontSize: "1.05rem",
                      }}
                    >
                      Get in Touch
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2.5,
                      }}
                    >
                      {/* Email */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Typography
                          component="a"
                          href="mailto:hello@cabinetpsihologie.com"
                          sx={{
                            color: "#556b68",
                            textDecoration: "none",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                            transition:
                              "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            "&:hover": {
                              color: "#6B9B8A",
                            },
                          }}
                        >
                          hello@cabinetpsihologie.com
                        </Typography>
                      </motion.div>

                      {/* Phone */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Typography
                          component="a"
                          href="tel:+361xxxxxxxx"
                          sx={{
                            color: "#556b68",
                            textDecoration: "none",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                            transition:
                              "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            "&:hover": {
                              color: "#6B9B8A",
                            },
                          }}
                        >
                          +36 1 XXX XXXX
                        </Typography>
                      </motion.div>

                      {/* Location */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#556b68",
                            fontSize: "0.95rem",
                            fontWeight: 400,
                            lineHeight: 1.6,
                          }}
                        >
                          Budapest
                          <br />
                          Hungary
                        </Typography>
                      </motion.div>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          >
            <Divider
              sx={{
                mb: 4,
                borderColor: "rgba(200, 220, 220, 0.3)",
              }}
            />
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "center", md: "flex-end" },
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#556b68",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "0.85rem",
                  fontWeight: 400,
                }}
              >
                © {new Date().getFullYear()} Psychology Cabinet. All rights
                reserved.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <motion.div whileHover={{ color: "#6B9B8A" }}>
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: "#556b68",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      "&:hover": {
                        color: "#6B9B8A",
                      },
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </motion.div>
                <motion.div whileHover={{ color: "#6B9B8A" }}>
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: "#556b68",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      "&:hover": {
                        color: "#6B9B8A",
                      },
                    }}
                  >
                    Terms of Service
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </footer>
  );
}
