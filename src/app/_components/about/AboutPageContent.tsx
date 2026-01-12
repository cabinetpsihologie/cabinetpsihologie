"use client";

import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutPageContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <Box>
      {/* My Story Section */}
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
        <Container maxWidth="md">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  mb: 2,
                  fontWeight: 600,
                  color: "#2d4a47",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  letterSpacing: "-0.5px",
                }}
              >
                My Story
              </Typography>
              <Divider
                sx={{
                  height: "4px",
                  bgcolor: "#6B9B8A",
                  width: "60px",
                  mx: "auto",
                  mb: 6,
                  borderRadius: "2px",
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.1rem" },
                  color: "#556b68",
                  lineHeight: 1.8,
                  fontWeight: 400,
                  mb: 4,
                }}
              >
                I am a dedicated psychologist with a profound commitment to
                supporting individuals on their journey toward emotional
                well-being and personal growth. My passion for understanding the
                human mind and helping people navigate life&apos;s challenges
                has been the driving force behind my career in psychology.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.1rem" },
                  color: "#556b68",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                Over the years, I have developed a compassionate, evidence-based
                approach to therapy that respects each client&apos;s unique
                circumstances, values, and goals. I believe that healing happens
                in a safe, non-judgmental space where individuals feel genuinely
                heard and supported.
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Professional Background */}
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "rgba(245, 252, 250, 0.5)" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  mb: 8,
                  fontWeight: 600,
                  color: "#2d4a47",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  letterSpacing: "-0.5px",
                }}
              >
                Professional Background
              </Typography>
            </motion.div>

            <Grid container spacing={6}>
              {/* Education */}
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, rgba(245, 252, 250, 0.8) 0%, rgba(250, 248, 255, 0.8) 100%)",
                      border: "1px solid rgba(200, 220, 220, 0.3)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(107, 155, 138, 0.5)",
                        boxShadow: "0 8px 24px rgba(107, 155, 138, 0.1)",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "#6B9B8A",
                        mb: 3,
                        fontSize: "1.3rem",
                      }}
                    >
                      🎓 Education
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#2d4a47",
                          mb: 0.5,
                          fontSize: "1.05rem",
                        }}
                      >
                        Master&apos;s Degree in Psychology
                      </Typography>
                      <Typography
                        sx={{
                          color: "#6B9B8A",
                          fontSize: "0.95rem",
                          mb: 1,
                        }}
                      >
                        Specialization: Clinical Psychology
                      </Typography>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.9rem",
                          fontStyle: "italic",
                        }}
                      >
                        [University Name], Budapest
                      </Typography>
                    </Box>
                    <Divider
                      sx={{ my: 2, borderColor: "rgba(200, 220, 220, 0.3)" }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#2d4a47",
                          mb: 0.5,
                          fontSize: "1.05rem",
                        }}
                      >
                        Bachelor&apos;s Degree in Psychology
                      </Typography>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.9rem",
                          fontStyle: "italic",
                        }}
                      >
                        [University Name], Budapest
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* Licenses & Certifications */}
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, rgba(245, 252, 250, 0.8) 0%, rgba(250, 248, 255, 0.8) 100%)",
                      border: "1px solid rgba(200, 220, 220, 0.3)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(107, 155, 138, 0.5)",
                        boxShadow: "0 8px 24px rgba(107, 155, 138, 0.1)",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "#6B9B8A",
                        mb: 3,
                        fontSize: "1.3rem",
                      }}
                    >
                      ✓ Licenses & Certifications
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                        }}
                      >
                        • Licensed Clinical Psychologist, Hungary
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                        }}
                      >
                        • Certified Cognitive Behavioral Therapy (CBT)
                        Practitioner
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                        }}
                      >
                        • Certified Couples Therapy Specialist
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                        }}
                      >
                        • Trained in Trauma-Informed Care
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Clinical Expertise */}
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  mb: 8,
                  fontWeight: 600,
                  color: "#2d4a47",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  letterSpacing: "-0.5px",
                }}
              >
                Clinical Expertise & Specializations
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {[
                {
                  title: "Individual Psychotherapy",
                  description:
                    "Personalized one-on-one therapy addressing various mental health concerns including depression, anxiety, life transitions, and personal growth.",
                },
                {
                  title: "Cognitive Behavioral Therapy (CBT)",
                  description:
                    "Evidence-based approach focusing on the relationship between thoughts, feelings, and behaviors to create meaningful change.",
                },
                {
                  title: "Couples & Relationship Therapy",
                  description:
                    "Supporting couples in improving communication, resolving conflicts, and strengthening emotional connections.",
                },
                {
                  title: "Family Therapy",
                  description:
                    "Helping families navigate dynamics, improve relationships, and develop healthier communication patterns.",
                },
                {
                  title: "Anxiety & Stress Management",
                  description:
                    "Specialized techniques for managing anxiety disorders, panic attacks, and stress-related conditions.",
                },
                {
                  title: "Trauma & Recovery",
                  description:
                    "Compassionate, trauma-informed care for individuals processing difficult experiences and building resilience.",
                },
              ].map((expertise, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: "12px",
                        background:
                          "linear-gradient(135deg, rgba(245, 252, 250, 0.6) 0%, rgba(250, 248, 255, 0.6) 100%)",
                        border: "1px solid rgba(200, 220, 220, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "rgba(107, 155, 138, 0.5)",
                          boxShadow: "0 8px 24px rgba(107, 155, 138, 0.1)",
                        },
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#2d4a47",
                          mb: 2,
                          fontSize: "1.1rem",
                        }}
                      >
                        {expertise.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      >
                        {expertise.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Approach & Philosophy */}
      <Box
        sx={{
          py: { xs: 12, md: 16 },
          background:
            "linear-gradient(135deg, rgba(245, 252, 250, 0.9) 0%, rgba(250, 248, 255, 0.9) 100%)",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  mb: 4,
                  fontWeight: 600,
                  color: "#2d4a47",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  letterSpacing: "-0.5px",
                }}
              >
                My Approach & Philosophy
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#556b68",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontWeight: 400,
                  mb: 8,
                }}
              >
                I believe that therapy is a collaborative partnership where your
                perspective, experiences, and values guide our work together. My
                approach integrates evidence-based techniques with genuine
                empathy and unconditional respect.
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {[
                {
                  title: "Client-Centered",
                  description:
                    "Your goals, values, and pace shape our therapeutic journey. I respect your autonomy and support your own solutions.",
                },
                {
                  title: "Evidence-Based",
                  description:
                    "All interventions are grounded in current psychological research and proven therapeutic techniques.",
                },
                {
                  title: "Culturally Sensitive",
                  description:
                    "I honor your cultural background, beliefs, and identity in providing culturally-informed care.",
                },
                {
                  title: "Compassionate & Non-Judgmental",
                  description:
                    "A safe space where you are accepted fully and explored without judgment or criticism.",
                },
              ].map((principle, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "12px",
                        background:
                          "linear-gradient(135deg, rgba(245, 252, 250, 0.8) 0%, rgba(250, 248, 255, 0.8) 100%)",
                        border: "1px solid rgba(200, 220, 220, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "rgba(107, 155, 138, 0.5)",
                          boxShadow: "0 8px 24px rgba(107, 155, 138, 0.1)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#6B9B8A",
                          mb: 1.5,
                          fontSize: "1.1rem",
                        }}
                      >
                        {principle.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#556b68",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      >
                        {principle.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "#2d4a47",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  letterSpacing: "-0.5px",
                }}
              >
                Ready to Begin Your Journey?
              </Typography>
              <Typography
                sx={{
                  color: "#556b68",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontWeight: 400,
                  mb: 4,
                }}
              >
                I would be honored to work with you. Each person&apos;s journey
                is unique, and I&apos;m committed to providing the support and
                guidance you need to achieve your goals and live a more
                fulfilling life.
              </Typography>
              <Typography
                sx={{
                  color: "#6B9B8A",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Get in touch to schedule your first session.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
