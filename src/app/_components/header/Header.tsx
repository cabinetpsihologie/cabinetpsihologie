"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  Container,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link as IntlLink } from "@/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useParams } from "next/navigation";
import { GB, HU } from "country-flag-icons/react/3x2";
import { useFirebaseAuthService } from "@/app/_services/firebase-auth-service";
import UserWidget from "./UserWidget";
import { adminMenuItems } from "../admin/AdminSidebar";
import { MdLogin, MdLogout } from "react-icons/md";
import { User } from "firebase/auth";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  label: string;
  href: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  isAuthButton?: boolean;
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      //ease: "easeOut",
    },
  }),
};

const mobileNavVariants = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      //ease: [0.34, 1.56, 0.64, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 0.2,
      //ease: "easeInOut",
    },
  },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const t = useTranslations("common.menu");
  const pathname = usePathname();
  const { locale: currentLocale } = useParams();
  const { getCurrentUser, logout } = useFirebaseAuthService();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getCurrentUser();
      setIsAuthenticated(!!user);
    };
    checkAuth();
  }, [getCurrentUser]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsAuthenticated(false);
  };

  const baseMenuItems: MenuItem[] = [
    { label: t("services"), href: "/services" },
    { label: t("about"), href: "/about" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/contact" },
  ];

  const menuItems = isAuthenticated
    ? baseMenuItems
    : [
        ...baseMenuItems,
        {
          label: t("login"),
          href: "/login",
          isAuthButton: true,
          icon: <MdLogin />,
          onClick: undefined,
        },
      ];

  const languages = [
    { code: "en", label: "English" },
    { code: "hu", label: "Magyar" },
  ];

  const FlagIcon = ({ locale }: { locale: string }) => {
    switch (locale) {
      case "en":
        return <GB width={20} height={20} />;
      case "hu":
        return <HU width={20} height={20} />;
      default:
        return null;
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)",
            //backdropFilter: "blur(12px)",
            //WebkitBackdropFilter: "blur(12px)",
            boxShadow: scrolled
              ? "0 4px 24px rgba(107, 155, 138, 0.1)"
              : "none",
            borderBottom: scrolled
              ? "none"
              : "1px solid rgba(200, 220, 220, 0.25)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
                minHeight: { xs: "64px", sm: "72px", md: "80px" },
                transition: "min-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <IntlLink
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Image
                    src="/logo.svg"
                    alt="Psychology Cabinet"
                    width={60}
                    height={60}
                    priority
                    style={{
                      transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </IntlLink>
              </motion.div>

              {/* Desktop Menu */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Button
                      href={item.href}
                      onClick={item.onClick}
                      component={item.label !== t("login") ? IntlLink : Button}
                      sx={{
                        color: "#2d4a47",
                        px: { md: 2, lg: 2.5 },
                        py: 1,
                        borderRadius: "28px",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        letterSpacing: "0.2px",
                        position: "relative",
                        overflow: "hidden",
                        transition:
                          "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "-100%",
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, transparent, rgba(107, 155, 138, 0.15), transparent)",
                          transition:
                            "left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        },
                        "&:hover::before": {
                          left: "100%",
                        },
                        "&:hover": {
                          transform: "translateY(-2px)",
                          color: "#6B9B8A",
                        },
                        ...(item.label === t("contact") && {
                          background:
                            "linear-gradient(135deg, #6B9B8A 0%, #556b68 100%)",
                          color: "white",
                          ml: 1,
                          boxShadow: "0 4px 16px rgba(107, 155, 138, 0.2)",
                          "&:hover": {
                            boxShadow: "0 8px 24px rgba(107, 155, 138, 0.3)",
                            transform: "translateY(-3px)",
                            color: "white",
                          },
                        }),
                        ...(item.isAuthButton && {
                          border: "2px solid #6B9B8A",
                          color: "#6B9B8A",
                          ml: 1,
                          "&:hover": {
                            background: "#6B9B8A",
                            color: "white",
                            transform: "translateY(-2px)",
                          },
                        }),
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              {/* Right Section - Auth & Language */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                  ml: "auto",
                }}
              >
                {isAuthenticated ? (
                  <UserWidget
                    userEmail={
                      (getCurrentUser() as unknown as User)?.email || ""
                    }
                  />
                ) : null}

                {/* Language Switch */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  {languages
                    .filter((lang) => lang.code !== currentLocale)
                    .map((lang) => (
                      <motion.div
                        key={lang.code}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IntlLink
                          href={
                            pathname === `/${currentLocale}`
                              ? "/"
                              : pathname.replace(`/${currentLocale}`, "")
                          }
                          locale={lang.code as "en" | "hu"}
                          style={{ textDecoration: "none" }}
                        >
                          <IconButton
                            size="small"
                            sx={{
                              transition:
                                "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                              color: "#6B9B8A",
                              "&:hover": {
                                bgcolor: "rgba(107, 155, 138, 0.1)",
                              },
                            }}
                          >
                            <FlagIcon locale={lang.code} />
                          </IconButton>
                        </IntlLink>
                      </motion.div>
                    ))}
                </Box>
              </Box>

              {/* Mobile Menu Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  sx={{
                    display: { xs: "flex", md: "none" },
                    color: "#2d4a47",
                  }}
                  onClick={handleDrawerToggle}
                  edge="end"
                >
                  <RxHamburgerMenu size={24} />
                </IconButton>
              </motion.div>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleDrawerToggle}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(4px)",
                zIndex: 999,
                top: 64,
              }}
            />
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "100%",
                  maxWidth: "320px",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.99) 0%, rgba(250, 252, 251, 0.99) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(200, 220, 220, 0.2)",
                  mt: 8,
                  borderRadius: "24px 0 0 24px",
                },
              }}
              variant="temporary"
            >
              <motion.div
                variants={mobileNavVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ width: "100%", height: "100%" }}
              >
                <Box sx={{ p: 3 }}>
                  {/* Mobile Menu Close */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 4,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        background:
                          "linear-gradient(135deg, #6B9B8A 0%, #556b68 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 600,
                        letterSpacing: "-0.3px",
                      }}
                    >
                      Menu
                    </Typography>
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconButton onClick={handleDrawerToggle}>
                        <IoClose size={24} />
                      </IconButton>
                    </motion.div>
                  </Box>

                  <Divider
                    sx={{ mb: 3, borderColor: "rgba(200, 220, 220, 0.2)" }}
                  />

                  {/* Mobile Menu Items */}
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {menuItems.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <Button
                          fullWidth
                          href={item.href}
                          onClick={handleDrawerToggle}
                          component={
                            item.label !== t("login") ? IntlLink : Button
                          }
                          sx={{
                            justifyContent: "flex-start",
                            py: 1.75,
                            px: 2,
                            borderRadius: "14px",
                            color: "#2d4a47",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                            transition:
                              "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            "&:hover": {
                              bgcolor: "rgba(107, 155, 138, 0.12)",
                              transform: "translateX(8px)",
                              color: "#6B9B8A",
                            },
                            ...(item.label === t("contact") && {
                              background:
                                "linear-gradient(135deg, #6B9B8A 0%, #556b68 100%)",
                              color: "white",
                              my: 1,
                              "&:hover": {
                                color: "white",
                                transform: "translateX(0)",
                                boxShadow:
                                  "0 4px 16px rgba(107, 155, 138, 0.2)",
                              },
                            }),
                            ...(item.isAuthButton && {
                              border: "2px solid #6B9B8A",
                              color: "#6B9B8A",
                              my: 1,
                              "&:hover": {
                                background: "#6B9B8A",
                                color: "white",
                                borderColor: "#6B9B8A",
                              },
                            }),
                          }}
                          startIcon={item?.icon || null}
                        >
                          {item.label}
                        </Button>
                      </motion.div>
                    ))}
                  </Box>

                  {/* Admin Menu */}
                  {isAuthenticated && (
                    <>
                      <Divider
                        sx={{ my: 3, borderColor: "rgba(200, 220, 220, 0.2)" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        {adminMenuItems.map((item) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Button
                              fullWidth
                              component={IntlLink}
                              href={item.path}
                              onClick={handleDrawerToggle}
                              sx={{
                                justifyContent: "flex-start",
                                py: 1.5,
                                px: 2,
                                borderRadius: "14px",
                                color: "#2d4a47",
                                fontWeight: 500,
                                transition:
                                  "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                "&:hover": {
                                  bgcolor: "rgba(107, 155, 138, 0.12)",
                                  transform: "translateX(8px)",
                                  color: "#6B9B8A",
                                },
                              }}
                            >
                              {item.label}
                            </Button>
                          </motion.div>
                        ))}
                      </Box>

                      <Divider
                        sx={{ my: 3, borderColor: "rgba(200, 220, 220, 0.2)" }}
                      />

                      {/* Logout Button */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button
                          fullWidth
                          onClick={() => {
                            handleLogout();
                            handleDrawerToggle();
                          }}
                          sx={{
                            justifyContent: "flex-start",
                            py: 1.5,
                            px: 2,
                            borderRadius: "14px",
                            color: "#dc3545",
                            fontWeight: 500,
                            transition:
                              "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            "&:hover": {
                              bgcolor: "rgba(220, 53, 69, 0.12)",
                              transform: "translateX(8px)",
                            },
                          }}
                          startIcon={<MdLogout />}
                        >
                          {t("logout")}
                        </Button>
                      </motion.div>
                    </>
                  )}

                  {/* Language Switch Mobile */}
                  <Divider
                    sx={{ my: 3, borderColor: "rgba(200, 220, 220, 0.2)" }}
                  />
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {languages
                      .filter((lang) => lang.code !== currentLocale)
                      .map((lang) => (
                        <IntlLink
                          key={lang.code}
                          href={
                            pathname === `/${currentLocale}`
                              ? "/"
                              : pathname.replace(`/${currentLocale}`, "")
                          }
                          locale={lang.code as "en" | "hu"}
                          style={{ flex: 1, textDecoration: "none" }}
                        >
                          <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                              borderColor: "#6B9B8A",
                              color: "#6B9B8A",
                              fontWeight: 500,
                              borderRadius: "14px",
                              transition:
                                "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                              "&:hover": {
                                bgcolor: "#6B9B8A",
                                color: "white",
                                borderColor: "#6B9B8A",
                              },
                            }}
                          >
                            {lang.label}
                          </Button>
                        </IntlLink>
                      ))}
                  </Box>
                </Box>
              </motion.div>
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
