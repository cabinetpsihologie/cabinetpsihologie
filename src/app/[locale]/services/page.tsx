import { Box } from "@mui/material";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";
import HeroSection from "@/app/_components/hero/HeroSection";
import ServicesPageContent from "@/app/_components/services/ServicesPageContent";
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
      ? "Pszichológiai Szolgáltatások | Pszichológia Kabinet"
      : "Psychological Services | Psychology Cabinet",
    description: isHungarian
      ? "Komprehenzív mentális egészség szolgáltatások Budapesten. Egyéni pszichoterápia, kognitív viselkedésterápia, páros tanácsadás, családterápia és egyéb pszichológiai ellátás."
      : "Comprehensive mental health services in Budapest. Individual psychotherapy, cognitive behavioral therapy, couples counseling, family therapy, and professional psychological care.",
    alternates: {
      canonical: `${env.SITE_URL}/${locale}/services`,
      languages: {
        en: `${env.SITE_URL}/en/services`,
        hu: `${env.SITE_URL}/hu/services`,
      },
    },
    openGraph: {
      title: isHungarian
        ? "Pszichológiai Szolgáltatások - Pszichológia Kabinet"
        : "Psychological Services - Psychology Cabinet",
      description: isHungarian
        ? "Professzionális mentális egészség és pszichológiai terápia Budapesten"
        : "Professional mental health and psychological services in Budapest",
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

export default async function Services() {
  return (
    <Box>
      <Header />
      <HeroSection title="Our Services" />
      <ServicesPageContent />
      <Footer />
    </Box>
  );
}
