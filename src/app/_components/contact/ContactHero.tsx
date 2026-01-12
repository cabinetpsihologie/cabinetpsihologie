"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactHero() {
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

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                color: "#2d4a47",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                letterSpacing: "-0.5px",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Let&apos;s Talk
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                color: "#556b68",
                lineHeight: 1.8,
                fontWeight: 400,
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              I&apos;m here to support you. Whether you have questions about my services or you&apos;re ready to start your journey toward better mental health, I&apos;d love to hear from you.
            </Typography>
          </motion.div>

          {/* Decorative line */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                height: "4px",
                width: "60px",
                bgcolor: "#6B9B8A",
                mx: "auto",
                mt: 4,
                borderRadius: "2px",
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
