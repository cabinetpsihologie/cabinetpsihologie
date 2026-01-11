"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  delay,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ height: "100%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        sx={{
          height: "100%",
          background: isHovered
            ? "linear-gradient(135deg, rgba(230, 245, 245, 0.95) 0%, rgba(245, 240, 250, 0.95) 100%)"
            : "linear-gradient(135deg, rgba(240, 250, 250, 0.9) 0%, rgba(250, 245, 255, 0.9) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(200, 220, 220, 0.3)",
          borderRadius: 3,
          boxShadow: isHovered
            ? "0 12px 40px rgba(100, 150, 150, 0.15)"
            : "0 4px 20px rgba(100, 150, 150, 0.08)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #6B9B8A 0%, #8BB5A8 100%)",
            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <motion.div
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1.5rem",
              fontSize: "2.5rem",
            }}
          >
            {icon}
          </motion.div>

          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: "#2d4a47",
              textAlign: "center",
              fontSize: "1.1rem",
              letterSpacing: "-0.3px",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#556b68",
              textAlign: "center",
              lineHeight: 1.7,
              fontSize: "0.95rem",
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
