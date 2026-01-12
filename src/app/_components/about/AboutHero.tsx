"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

interface AboutHeroProps {
  name: string;
  introduction: string;
  imageSrc: string;
}

export default function AboutHero({
  name,
  introduction,
  imageSrc,
}: AboutHeroProps) {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#fff",
        minHeight: { xs: "auto", md: "90vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            {/* Left side - Text content */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: "#2d4a47",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  letterSpacing: "-0.5px",
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  color: "#556b68",
                  lineHeight: 1.8,
                  fontWeight: 400,
                  maxWidth: "500px",
                }}
              >
                {introduction}
              </Typography>
            </motion.div>

            {/* Right side - Full body image */}
            <motion.div variants={imageVariants}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "400px", md: "600px" },
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(107, 155, 138, 0.15)",
                }}
              >
                <Image
                  src={imageSrc}
                  alt={name}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority
                />
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
