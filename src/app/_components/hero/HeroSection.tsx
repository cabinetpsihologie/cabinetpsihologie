"use client";
// import { Box, Typography, Container, Fade } from "@mui/material";
// import Image from "next/image";

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  height?: string;
  overlay?: boolean;
}

import React from "react";
import { HeroParallax } from "@/app/_components/ui/hero-parallax";
import { Box } from "@mui/material";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export default function HeroSection({
  // imageUrl,
  // title,
  // subtitle,
  height = "300px",
}: // overlay = true,
HeroSectionProps) {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        mt: 8,
      }}
    >
      {HeroParallaxDemo()}
      {/* <Fade in timeout={1000}>
        <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
      </Fade>

      {overlay && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            transition: "background-color 0.5s ease",
          }}
        />
      )}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Fade in timeout={1500}>
          <Box
            sx={{
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 600,
                mb: 3,
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                opacity: 0.9,
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Fade> 
      </Container> */}
    </Box>
  );
}
