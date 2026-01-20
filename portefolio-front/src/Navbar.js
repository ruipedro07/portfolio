import React, {useCallback, useEffect, useState} from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    IconButton,
    Drawer,
    Box,
    useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTranslation} from "react-i18next";

const SECTIONS = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];
const LANGUAGES = ["EN", "PT"];
const NAVBAR_OFFSET = 74; // Adjust to your AppBar height

export default function Navbar() {
    const {t, i18n} = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [activeSection, setActiveSection] = useState(SECTIONS[0].toLowerCase());
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [langAnchor, setLangAnchor] = useState(null);

    const activeLanguage = i18n.language.split("-")[0].toUpperCase();
    const isLangMenuOpen = Boolean(langAnchor);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng.toLowerCase());
    };

    const handleLangMenuOpen = (event) => setLangAnchor(event.currentTarget);
    const handleLangMenuClose = (lng) => {
        setLangAnchor(null);
        if (lng) changeLanguage(lng);
    };

    const scrollToId = useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
        window.scrollTo({top, behavior: "smooth"});

        // Optional: focus the section after scroll for accessibility
        setTimeout(() => {
            try {
                el.setAttribute("tabindex", "-1");
                el.focus({preventScroll: true});
            } catch {
                // Ignore focus errors
            }
        }, 650);
    }, []);

    useEffect(() => {
        // Highlight the section currently in view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({isIntersecting, target}) => {
                    if (isIntersecting) setActiveSection(target.id);
                });
            },
            {threshold: 0.5}
        );

        SECTIONS.forEach((section) => {
            const el = document.getElementById(section.toLowerCase());
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const renderDesktopNavbar = () => {
        const NAV_HEIGHT = 46;
        const INSET = 6;
        const GAP = 2;

        return (
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    top: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "fit-content",
                    bgcolor: "transparent", // quem desenha a pill é o Box abaixo
                }}
            >
                <Box
                    sx={{
                        height: `${NAV_HEIGHT}px`,
                        display: "flex",
                        alignItems: "stretch", // <- crucial para os botões terem a altura toda
                        justifyContent: "center",
                        gap: `${GAP}px`,
                        p: `${INSET}px`, // <- padding igual em todos os lados
                        borderRadius: 999,
                        border: "2px solid black",
                        bgcolor: "rgba(255,255,255,0.8)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        overflow: "hidden", // ajuda a “cortar” perfeito nas extremidades
                    }}
                >
                    {SECTIONS.map((section) => {
                        const id = section.toLowerCase();
                        const isActive = activeSection === id;

                        return (
                            <Button
                                key={section}
                                onClick={() => scrollToId(id)}
                                disableRipple
                                sx={{
                                    height: "100%",       // <- ocupa toda a altura interna da pill
                                    m: 0,
                                    minWidth: 0,
                                    borderRadius: 999,    // pill interna
                                    textTransform: "none",
                                    px: 1.5,
                                    py: 0,                // <- evita “encolher” a altura visual
                                    lineHeight: 1,

                                    color: isActive ? "#fff" : "black",
                                    bgcolor: isActive ? "#202020" : "transparent",
                                    "&:hover": {
                                        bgcolor: isActive ? "black" : "rgba(0,0,0,0.12)",
                                    },
                                }}
                            >
                                {t(section)}
                            </Button>
                        );
                    })}

                    {/* Language dropdown */}
                    {/*<Button
                        onClick={handleLangMenuOpen}
                        endIcon={
                            <KeyboardArrowDownIcon
                                sx={{
                                    transition: "transform 0.3s",
                                    transform: isLangMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                            />
                        }
                        sx={{
                            height: "100%",
                            m: 0,
                            minWidth: 0,
                            borderRadius: 999,
                            textTransform: "none",
                            px: 1.5,
                            py: 0,
                            lineHeight: 1,

                            color: "black",
                            bgcolor: "transparent",
                            "&:hover": {
                                bgcolor: "rgba(0,0,0,0.12)",
                            },
                        }}
                    >
                        {activeLanguage}
                    </Button> */}

                    {/* <Menu
                        anchorEl={langAnchor}
                        open={isLangMenuOpen}
                        onClose={() => handleLangMenuClose(null)}
                        anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                        transformOrigin={{vertical: "top", horizontal: "center"}}
                        PaperProps={{
                            sx: {
                                display: "flex",
                                borderRadius: "100px",
                                bgcolor: "white",
                                px: 1,
                                py: 0.25,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            },
                        }}
                    >
                        {LANGUAGES.map((lang) => (
                            <MenuItem
                                key={lang}
                                onClick={() => handleLangMenuClose(lang)}
                                sx={{
                                    borderRadius: "100px",
                                    mx: 0.5,
                                    color: "black",
                                    "&:hover": {
                                        bgcolor: "rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                {lang}
                            </MenuItem>
                        ))}
                    </Menu> */}
                </Box>
            </AppBar>
        );
    };

    const renderMobileNavbar = () => (
        <AppBar position="fixed" elevation={4}
                sx={{top: 0, left: 0, right: 0, px: 1, py: 0.5, background: "transparent", boxShadow: "none"}}>
            <Toolbar sx={{minHeight: "56px", display: "flex", justifyContent: "space-between"}}>
                <IconButton color="black" sx={{border: "1px solid black", background: "white", borderRadius: "10%"}}
                            edge="end" onClick={() => setDrawerOpen(true)}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );

    return (
        <>
            {isMobile ? renderMobileNavbar() : renderDesktopNavbar()}

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{width: 220, p: 2, display: "flex", flexDirection: "column", gap: 2}}>
                    {SECTIONS.map((section) => {
                        const isActive = activeSection === section.toLowerCase();
                        return (
                            <Button
                                key={section}
                                onClick={() => {
                                    scrollToId(section.toLowerCase());
                                    setDrawerOpen(false);
                                }}
                                sx={{justifyContent: "flex-start", color: isActive ? "#202020" : "#666"}}
                            >
                                {t(section)}
                            </Button>
                        );
                    })}

                    {/*<Box sx={{mt: 2, display: "flex", gap: 1}}>
                        {LANGUAGES.map((lang) => (
                            <Button
                                key={lang}
                                onClick={() => {
                                    changeLanguage(lang);
                                    setDrawerOpen(false);
                                }}
                                sx={{color: activeLanguage === lang ? "#202020" : "#666"}}
                            >
                                {lang}
                            </Button>
                        ))}
                    </Box>*/}
                </Box>
            </Drawer>
        </>
    );
}