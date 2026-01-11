import { Box } from "@mui/material";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";
import HeroSection from "@/app/_components/hero/HeroSection";
import HomePageContent from "@/app/_components/home/HomePageContent";
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
      ? "Pszichológia Kabinet - Mentális Egészség Tanácsadás"
      : "Psychology Cabinet - Professional Mental Health Services",
    description: isHungarian
      ? "Komprehenzív pszichológiai szolgáltatások Budapesten. Egyéni pszichoterápia, páros tanácsadás, családterápia és más mentális egészség szolgáltatások."
      : "Comprehensive mental health services in Budapest. Individual psychotherapy, couples counseling, family therapy, and professional psychological care.",
    alternates: {
      canonical: `${env.SITE_URL}/${locale}`,
      languages: {
        en: `${env.SITE_URL}/en`,
        hu: `${env.SITE_URL}/hu`,
      },
    },
    openGraph: {
      title: isHungarian ? "Pszichológia Kabinet" : "Psychology Cabinet",
      description: isHungarian
        ? "Mentális egészség tanácsadás és pszichológiai terápia Budapesten"
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

export default function Home() {
  return (
    <Box>
      <Header />
      <HeroSection title="Your Path to Emotional Wellness" />
      <HomePageContent />
      <Footer />
    </Box>
  );
}
