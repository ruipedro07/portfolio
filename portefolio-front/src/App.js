import React from "react";
import {Box, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "./section";
import Navbar from "./Navbar";
import Experience from "./experience";
import { connect } from "react-redux";
import {
    SET_FORM_EMAIL,
    SET_FORM_MESSAGE,
    SET_FORM_NAME,
    SUBMIT_CONTACT_FORM,
} from "./actions/actionTypes";
import Contact from "./contact";
import Skills from "./skills";
import Education from "./education";
import HomeSection from "./homesection";
import Footer from "./footer";
import About from "./about";
import Projects from "./projects";

const Portfolio = ({
                       name,
                       email,
                       message,
                       setName,
                       setEmail,
                       setMessage,
                       submitContactFormSaga,
                       loading,
                       submitSuccess,
                       formSubmitError,
                   }) => {
    const { t } = useTranslation();

    const submitContactForm = (event) => {
        event.preventDefault();
        submitContactFormSaga(name, email, message);
    };

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#ffffff",
                backgroundImage: `
                    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
            }}
        >
            <Navbar />

            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                {/* HOME */}
                <Box
                    sx={{
                        minHeight: "100vh",
                        width: "100%",
                    }}
                >
                    <Section
                        notShowTitle
                        id="home"
                        title={t("Home")}
                        bgColor="transparent"
                        sx={{ py: 0, m: 0, minHeight: "calc(100vh)" }}
                    >
                        <HomeSection />
                    </Section>
                </Box>

                {/* Skills */}
                <Section
                    id="about"
                    title={t("About")}
                    bgColor="transparent"
                >

                   <About/>
                </Section>

                {/* Skills */}
                <Section
                    id="skills"
                    title={t("Skills")}
                    bgColor="transparent"
                >
                    <Skills />
                </Section>

                {/* Projects */}
                <Section
                    id="projects"
                    title={t("Projects")}
                    bgColor="transparent"
                >
                    <Projects />
                </Section>

                {/* Experience */}
                <Section
                    id="experience"
                    title={t("Experience")}
                    bgColor="transparent"
                >
                    <Experience />
                </Section>

                {/* Education */}
                <Section
                    id="education"
                    title={t("Education & Certifications")}
                    bgColor="transparent"
                >
                    <Education />
                </Section>

                {/* Contact */}
                <Section
                    id="contact"
                    title={t("Contact")}
                    bgColor="transparent"
                >
                    <Contact
                        {...{
                            formSubmitError,
                            submitSuccess,
                            name,
                            email,
                            message,
                            setMessage,
                            setName,
                            setEmail,
                            loading,
                            submitContactForm,
                        }}
                    />
                </Section>
            </Box>

            <Footer />
        </Box>
    );
};

const mapStateToProps = (state) => ({
    name: state.portefolio.name,
    email: state.portefolio.email,
    message: state.portefolio.message,
    loading: state.portefolio.loading,
    submitSuccess: state.portefolio.submitSuccess,
    formSubmitError: state.portefolio.formSubmitError,
});

const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch({ type: SET_FORM_NAME, payload: name }),
    setEmail: (email) => dispatch({ type: SET_FORM_EMAIL, payload: email }),
    setMessage: (message) => dispatch({ type: SET_FORM_MESSAGE, payload: message }),
    submitContactFormSaga: (name, email, message) =>
        dispatch({
            type: SUBMIT_CONTACT_FORM,
            payload: { name, email, message },
        }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);