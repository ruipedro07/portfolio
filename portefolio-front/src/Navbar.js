import React, {useEffect, useState} from "react";
import {
    AppBar,
    Toolbar,
    Button,
    MenuItem, Menu, useTheme,
} from "@mui/material";
import {useTranslation} from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";


const projects = [
    {title: "RAG Helpdesk", subtitle: "Spring AI + OpenAI", link: "https://example.com/rag", color: "#42a5f5"},
    {title: "Car Inventory", subtitle: "Next.js + Prisma", link: "https://example.com/cars", color: "#66bb6a"},
    {title: "Workout Planner", subtitle: "React + PWA", link: "https://example.com/fitness", color: "#ffa726"},
    {title: "Banking Reports", subtitle: "FRTB/COREP Toolkit", link: "https://example.com/reports", color: "#ab47bc"},
    {title: "Chat Support Bot", subtitle: "RAG + Vector DB", link: "https://example.com/bot", color: "#ef5350"},
    {title: "Dev Portfolio", subtitle: "MUI + R3F", link: "https://example.com/portfolio", color: "#26c6da"},
];

export default function Navbar() {

    const sections = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

    const {t, i18n} = useTranslation();
    // Navbar offset (height of AppBar). Tune if your AppBar is taller/shorter.
    const NAVBAR_OFFSET = 74; // px
    const [activeSection, setActiveSection] = useState("");
    const [activeLanguage, setActiveLanguage] = useState(i18n.language.split('-')[0].toUpperCase());

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLanguage(lng.toUpperCase());
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (lang) => {
        setAnchorEl(null);
        if (lang) changeLanguage(lang);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Smooth scroll helper. Uses native APIs and accounts for fixed navbar.
    const scrollToId = (id) => {
        if (typeof window === "undefined") return;
        const el = document.getElementById(id);
        if (!el) {
            console.warn("scrollToId: element not found:", id);
            return;
        }
        const top = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
        window.scrollTo({top, behavior: "smooth"});

        // Accessibility: focus the section after the scroll finishes (approx).
        setTimeout(() => {
            try {
                el.setAttribute("tabindex", "-1");
                el.focus({preventScroll: true});
            } catch (e) {
                /* ignore */
            }
        }, 650);
    };

    // Dev-time sanity checks (lightweight tests): warn if sections or projects are malformed.
    useEffect(() => {
        const missingIds = sections.map((s) => s.toLowerCase()).filter((id) => !document.getElementById(id));
        if (missingIds.length) console.warn("Missing section IDs (expected):", missingIds);

        const malformed = projects
            .map((p, i) => ({p, i}))
            .filter(({p}) => !p || typeof p.title !== "string" || typeof p.subtitle !== "string");
        if (malformed.length) console.warn("Some projects are malformed (index):", malformed.map((m) => m.i));
    }, []);


    /*useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                console.log(entries.map(e => e.target))
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold: 0.5} // section considered active when 50% visible
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.toLowerCase());
            if (el) observer.observe(el);
        });





        return () => observer.disconnect();
    }, []);*/


    return (
        <>
            {/* Navbar */}
            {!isMobile && (
                <AppBar
                    position="fixed"
                    elevation={4}
                    sx={{
                        top: 16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "fit-content",
                        borderRadius: 999, // pill shape
                        px: 2,
                        py: 0.5,
                        background: "transparent",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <Toolbar sx={{minHeight: "unset", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        {sections.map((section) => (
                            <Button
                                key={section}
                                onClick={() => scrollToId(section.toLowerCase())}
                                sx={{
                                    mx: 1,
                                    borderRadius: "999px",
                                    textTransform: "none",
                                    color: activeSection === section.toLowerCase() ? "#ffffff" : "#acacac",
                                    bgcolor: activeSection === section.toLowerCase() ? "#202020" : "transparent",
                                    "&:hover": {
                                        bgcolor: activeSection === section.toLowerCase()
                                            ? "white"
                                            : "rgba(255,255,255,0.15)",
                                    },
                                }}
                            >
                                {t(section)}
                            </Button>
                        ))}
                        {/* Language dropdown */}
                        <Button
                            onClick={handleClick}
                            endIcon={
                                <KeyboardArrowDownIcon
                                    sx={{
                                        transition: "transform 0.3s",
                                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                                    }}
                                />
                            }
                            sx={{
                                mx: 1,
                                borderRadius: "999px",
                                textTransform: "none",
                                color: "#acacac",
                                bgcolor: "transparent",
                                "&:hover": {
                                    bgcolor: "rgba(255,255,255,0.15)",
                                },
                            }}
                        >
                            {activeLanguage}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => handleClose(null)}
                            anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                            transformOrigin={{vertical: "top", horizontal: "center"}}
                            PaperProps={{
                                sx: {
                                    display: "flex",             // horizontal layout
                                    borderRadius: "100px",       // pill shape
                                    bgcolor: "white",          // same as active button
                                    px: 1,                       // horizontal padding
                                    py: 0.25,                    // vertical padding
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                },
                            }}
                        >
                            {["EN", "PT"].map((lang) => (
                                <MenuItem
                                    key={lang}
                                    onClick={() => handleClose(lang.toLowerCase())}
                                    sx={{
                                        borderRadius: "100px",
                                        mx: 0.5,
                                        color: "#acacac",
                                        bgcolor: "transparent",
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.15)",
                                        },
                                    }}
                                >
                                    {lang}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            )}
            {/* Mobile Navbar */}
            {isMobile && (
                <AppBar position="fixed" elevation={4} sx={{top: 0, left: 0, right: 0, borderRadius: 0, px: 1, py: 0.5, background: "white"}}>
                    <Toolbar sx={{minHeight: "56px", display: "flex", justifyContent: "space-between"}}>
                        <IconButton color="black" edge="end" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            )}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{width: 220, p: 2, display: "flex", flexDirection: "column", gap: 2}}>
                    {sections.map((section) => (
                        <Button
                            key={section}
                            onClick={() => {
                                scrollToId(section.toLowerCase());
                                setDrawerOpen(false);
                            }}
                            sx={{justifyContent: "flex-start", color: activeSection === section.toLowerCase() ? "#202020" : "#666"}}
                        >
                            {t(section)}
                        </Button>
                    ))}
                    <Box sx={{mt: 2, display: "flex", gap: 1}}>
                        {["EN", "PT"].map((lang) => (
                            <Button
                                key={lang}
                                onClick={() => {
                                    changeLanguage(lang.toLowerCase());
                                    setDrawerOpen(false);
                                }}
                                sx={{color: activeLanguage === lang ? "#202020" : "#666"}}
                            >
                                {lang}
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Drawer>
            {/* Offset for fixed AppBar */}
            <Toolbar/>

        </>
    )
}