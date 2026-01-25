"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface OfficeGalleryProps {
  title: string;
  subtitle: string;
}

export default function OfficeGallery({ title, subtitle }: OfficeGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&q=80",
      alt: "Office Reception",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      alt: "Therapy Room",
    },
    {
      src: "https://images.unsplash.com/photo-1585086614394-78ae552b8857?w=800&q=80",
      alt: "Consultation Space",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        background:
          "linear-gradient(135deg, rgba(187, 194, 192, 0.8) 0%, rgba(213, 211, 218, 0.8) 100%)",
      }}
    >
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

        <Grid container spacing={4}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 350,
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(100, 150, 150, 0.1)",
                    cursor: "pointer",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background:
                        hoveredIndex === index
                          ? "rgba(107, 155, 138, 0.1)"
                          : "rgba(107, 155, 138, 0)",
                      transition: "background 0.4s ease",
                      zIndex: 2,
                    },
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform:
                        hoveredIndex === index ? "scale(1.08)" : "scale(1)",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
