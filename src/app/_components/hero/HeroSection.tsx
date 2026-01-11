"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as IntlLink } from "@/navigation";

interface HeroSectionProps {
  title: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

export default function HeroSection({ title }: HeroSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#fff",
        py: { xs: 12, md: 20 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        mt: 0,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
            <Box
              sx={{
                mb: 6,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/samle_logo.png"
                  alt="Logo"
                  width={400}
                  height={300}
                  style={{
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 6,
                color: "#2d4a47",
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
          </motion.div>

          {/* Action Button */}
          <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
            <IntlLink href="#contact" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(135deg, #6B9B8A 0%, #556b68 100%)",
                    px: 6,
                    py: 1.8,
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "12px",
                    boxShadow: "0 12px 32px rgba(107, 155, 138, 0.25)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    "&:hover": {
                      boxShadow: "0 16px 48px rgba(107, 155, 138, 0.35)",
                      background:
                        "linear-gradient(135deg, #5A8A79 0%, #455b57 100%)",
                    },
                  }}
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </IntlLink>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
