"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactForm() {
  const t = useTranslations("contact");
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === "OK") {
        setSnackbarMessage(t("form.successMessage"));
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        form.current?.reset();
      }
    } catch (error) {
      setSnackbarMessage(t("form.errorMessage"));
      setSnackbarSeverity("error");
      console.log(error);
      setOpenSnackbar(true);
    }

    setLoading(false);
  };

  return (
    <>
      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit}
        sx={{
          // bgcolor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: 4,
          // p: { xs: 4, md: 6 },
          // boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 600,
            background: "linear-gradient(90deg, #1a1a1a, #333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("form.title")}
        </Typography>

        <TextField
          fullWidth
          label={t("form.fullName")}
          name="from_name"
          required
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          label={t("form.email")}
          name="email"
          type="email"
          required
          sx={{ mt: 3 }}
        />

        <TextField
          fullWidth
          label={t("form.phone")}
          name="phone"
          sx={{ mt: 3 }}
        />

        <TextField
          fullWidth
          label={t("form.message")}
          name="message"
          multiline
          rows={6}
          required
          sx={{ mt: 3 }}
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            type="submit"
            disabled={loading}
            variant="outlined"
            sx={{
              borderColor: "#6B9B8A",
              color: "#6B9B8A",
              mt: 3,
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
            {loading ? "Sending..." : t("form.submit")}
            <FaArrowRight size={14} />
          </Button>
        </motion.div>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={() => setOpenSnackbar(false)}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
