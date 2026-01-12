import { Box } from "@mui/material";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";
import AboutHero from "@/app/_components/about/AboutHero";
import AboutPageContent from "@/app/_components/about/AboutPageContent";
import { env } from "@/app/_config/env.config";
import { Metadata } from "next";

interface Params {
  locale: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHungarian = locale === "hu";

  return {
    title: isHungarian
      ? "Rólam | Pszichológia Kabinet"
      : "About Me | Psychology Cabinet",
    description: isHungarian
      ? "Ismerjek meg: pszichológus vagyok Budapesten, klinikaui pszichológia szakképzéssel és tapasztalattal. Egyéni terápia, pár- és családterápia szakértője."
      : "Meet me: A clinical psychologist in Budapest with specialized training and experience. Expert in individual therapy, couples counseling, and family therapy.",
    alternates: {
      canonical: `${env.SITE_URL}/${locale}/about`,
      languages: {
        en: `${env.SITE_URL}/en/about`,
        hu: `${env.SITE_URL}/hu/about`,
      },
    },
    openGraph: {
      title: isHungarian
        ? "Rólam - Pszichológia Kabinet"
        : "About Me - Psychology Cabinet",
      description: isHungarian
        ? "Pszichológus vagyok Budapesten. Klinikaui terápia, pár- és családterápia"
        : "Clinical psychologist in Budapest. Individual, couples, and family therapy",
      images: [
        {
          url: `${env.SITE_URL}/logo.jpg`,
          width: 1200,
          height: 630,
          alt: isHungarian ? "Pszichológia Kabinet" : "Psychology Cabinet",
        },
      ],
    },
  };
}

export default async function About() {
  // Replace with your actual information
  const aboutData = {
    name: "Fekete Andrea",
    introduction:
      "A dedicated clinical psychologist specializing in helping individuals, couples, and families navigate life's challenges with compassion, evidence-based approaches, and genuine support.",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", // Replace with your actual image
  };

  return (
    <Box>
      <Header />
      <AboutHero
        name={aboutData.name}
        introduction={aboutData.introduction}
        imageSrc={aboutData.imageSrc}
      />
      <AboutPageContent />
      <Footer />
    </Box>
  );
}
