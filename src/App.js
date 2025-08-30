import React, {useState, useEffect} from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
    Container,
    Chip,
    Stack, MenuItem, Menu,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



const sections = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

const projects = [
    {title: "RAG Helpdesk", subtitle: "Spring AI + OpenAI", link: "https://example.com/rag", color: "#42a5f5"},
    {title: "Car Inventory", subtitle: "Next.js + Prisma", link: "https://example.com/cars", color: "#66bb6a"},
    {title: "Workout Planner", subtitle: "React + PWA", link: "https://example.com/fitness", color: "#ffa726"},
    {title: "Banking Reports", subtitle: "FRTB/COREP Toolkit", link: "https://example.com/reports", color: "#ab47bc"},
    {title: "Chat Support Bot", subtitle: "RAG + Vector DB", link: "https://example.com/bot", color: "#ef5350"},
    {title: "Dev Portfolio", subtitle: "MUI + R3F", link: "https://example.com/portfolio", color: "#26c6da"},
];



export default function Portfolio() {
    const { t, i18n } = useTranslation();
    // Navbar offset (height of AppBar). Tune if your AppBar is taller/shorter.
    const NAVBAR_OFFSET = 74; // px
    const [activeSection, setActiveSection] = useState("home");
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


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
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
    }, []);

    return (
        <>
            {/* Navbar */}
            <AppBar
                position="fixed"
                elevation={4}
                sx={{
                    top: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "auto",
                    borderRadius: 999, // pill shape
                    px: 2,
                    py: 0.5,
                    background: "transparent",
                    backdropFilter: "blur(8px)",
                }}
            >
                <Toolbar sx={{minHeight: "unset", display: "flex", alignItems: "center",  justifyContent: "center"}}>
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
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
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

            {/* Offset for fixed AppBar */}
            <Toolbar/>

            {/* Home */}
            <Box id="home" sx={{minHeight: "100vh", py: 10, backgroundColor: "#ffffff"}}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom>
                        {t("Home")}
                    </Typography>
                    <Typography variant="body1">
                        {t("welcome")}
                    </Typography>
                </Container>
            </Box>

            {/* About */}
            <Box id="about" sx={{minHeight: "80vh", py: 10, backgroundColor: "#ffffff"}}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom>
                        {t("About")}
                    </Typography>
                    <Typography variant="body1"> {t("aboutMe")}</Typography>
                </Container>
            </Box>

            {/* Projects */}
            <Box id="projects" sx={{minHeight: "100vh", py: 10, backgroundColor: "#ffffff"}}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom>
                        {t("Projects")}
                    </Typography>
                    <Typography variant="body2" sx={{mb: 2, opacity: 0.8}}>
                        TODO
                    </Typography>

                </Container>
            </Box>

            {/* Skills */}
            <Box id="skills" sx={{minHeight: "80vh", py: 10, backgroundColor: "#ffffff"}}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom>
                        {t("Skills")}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {["React", "TypeScript", "Node.js", "Three.js", "MUI", "Postgres", "Docker"].map((s) => (
                            <Chip key={s} label={s} sx={{fontWeight: 600}}/>
                        ))}
                    </Stack>
                </Container>
            </Box>

            {/* Experience */}
            <Box id="experience" sx={{minHeight: "80vh", py: 10, backgroundColor: "#ffffff"}}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom>
                        {t("Experience")}
                    </Typography>
                    <Typography variant="body1">
                        TODO
                    </Typography>
                </Container>
            </Box>

            {/* Contact */}
            <Box id="contact" sx={{minHeight: "70vh", py: 10, backgroundColor: "#ffffff"}}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom>
                        {t("Contact")}
                    </Typography>
                    <Typography variant="body1">
                        {t("contactMe")}
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
