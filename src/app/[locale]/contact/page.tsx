import { Box } from "@mui/material";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";
import ContactHero from "@/app/_components/contact/ContactHero";
import ContactPageContent from "@/app/_components/contact/ContactPageContent";
import { env } from "@/app/_config/env.config";
import { Metadata } from "next";

interface Params {
  locale: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  details: string;
  description: string;
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
      ? "Kapcsolatfelvétel | Pszichológia Kabinet"
      : "Contact | Psychology Cabinet",
    description: isHungarian
      ? "Vedd fel velem a kapcsolatot. Kérdéseid vannak vagy szeretnél konzultációt foglalni? Szívesen hallom tőled."
      : "Get in touch with me. Have questions or ready to book a consultation? I&apos;d love to hear from you.",
    alternates: {
      canonical: `${env.SITE_URL}/${locale}/contact`,
      languages: {
        en: `${env.SITE_URL}/en/contact`,
        hu: `${env.SITE_URL}/hu/contact`,
      },
    },
    openGraph: {
      title: isHungarian
        ? "Kapcsolatfelvétel - Pszichológia Kabinet"
        : "Contact - Psychology Cabinet",
      description: isHungarian
        ? "Vedd fel velem a kapcsolatot"
        : "Get in touch with me",
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

export default async function Contact() {
  const contactInfo: ContactInfo[] = [
    {
      icon: "phone",
      title: "Phone",
      details: "+36 (1) 555-0000",
      description: "Available Monday - Friday, 9:00 AM - 6:00 PM",
    },
    {
      icon: "email",
      title: "Email",
      details: "hello@psychologycabinet.com",
      description: "I typically respond within 24 hours",
    },
    {
      icon: "location",
      title: "Location",
      details: "Budapest, Hungary",
      description: "Conveniently located in the heart of Budapest",
    },
  ];

  return (
    <Box>
      <Header />
      <ContactHero />
      <ContactPageContent contactInfo={contactInfo} />
      <Footer />
    </Box>
  );
}
