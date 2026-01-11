"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { blogService, Blog } from "@/app/_services/blog-service";
import { Link as IntlLink } from "@/navigation";
import { FaArrowRight } from "react-icons/fa6";

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

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const allBlogs = await blogService.getBlogs();
        // Filter published blogs and get the latest 3
        const publishedBlogs = allBlogs
          .filter((blog) => blog.status === "published")
          .slice(0, 3);
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography sx={{ textAlign: "center", color: "#556b68" }}>
            Loading blogs...
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
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
              Latest Insights
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#556b68",
                fontSize: "1rem",
                maxWidth: 600,
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Explore our latest articles on mental health, wellness, and
              psychological well-being.
            </Typography>
          </Box>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4} mb={6}>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                  <motion.div variants={itemVariants}>
                    <IntlLink
                      href={`/blog/${blog.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "16px",
                            overflow: "hidden",
                            // border: "1px solid rgba(200, 220, 220, 0.3)",
                            background:
                              "linear-gradient(135deg, rgba(245, 252, 250, 0.5) 0%, rgba(250, 248, 255, 0.5) 100%)",
                            backdropFilter: "blur(10px)",
                            transition:
                              "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            cursor: "pointer",
                            "&:hover": {
                              //   borderColor: "rgba(107, 155, 138, 0.5)",
                              boxShadow:
                                "0 12px 32px rgba(107, 155, 138, 0.15)",
                            },
                          }}
                        >
                          {/* Image */}
                          <CardMedia
                            component="div"
                            sx={{
                              height: 240,
                              backgroundColor: "rgba(107, 155, 138, 0.1)",
                              backgroundImage: `url(${blog.imageUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(135deg, rgba(45, 74, 71, 0.3) 0%, rgba(85, 107, 104, 0.2) 100%)",
                              }}
                            />
                          </CardMedia>

                          {/* Content */}
                          <CardContent sx={{ flexGrow: 1, pb: 3 }}>
                            <Typography
                              variant="h6"
                              component="h3"
                              sx={{
                                fontWeight: 600,
                                color: "#2d4a47",
                                mb: 2,
                                fontSize: "1.1rem",
                                lineHeight: 1.5,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {blog.title}
                            </Typography>

                            {/* Date */}
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#556b68",
                                fontSize: "0.85rem",
                                fontWeight: 500,
                              }}
                            >
                              {blog.createdAt
                                ?.toDate()
                                .toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </IntlLink>
                  </motion.div>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#556b68",
                    py: 4,
                  }}
                >
                  No blogs published yet.
                </Typography>
              </Grid>
            )}
          </Grid>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <IntlLink href="/blog" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#6B9B8A",
                  color: "#6B9B8A",
                  px: 4,
                  py: 1.2,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    borderColor: "#556b68",
                    color: "#556b68",
                    backgroundColor: "rgba(107, 155, 138, 0.05)",
                  },
                }}
              >
                View All Articles
                <FaArrowRight size={14} />
              </Button>
            </motion.div>
          </IntlLink>
        </motion.div>
      </Container>
    </Box>
  );
}
