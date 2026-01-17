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
                    <Typography align="center" >
                        I always knew that Information Technology would be my professional path, a conviction reinforced through both academic and professional experience. My first contact with programming was through <strong><u>Java</u></strong>, which <i>sparked</i> my interest in system logic and in understanding how <strong>complex systems</strong> operate behind the scenes.
                        <br/>
                        My interest in the <strong><u>Big Data</u></strong> domain emerged in the professional environment, where I specialized as a  Data Engineer, working with technologies such as <strong><u>Apache Spark</u></strong>, <strong><u>Apache Kafka</u></strong>, <strong><u>Hadoop</u></strong>, <strong><u>Hive</u></strong>, and <strong><u>MapReduce</u></strong>, and leading several data-related projects. I have extensive experience managing the <strong>full software development lifecycle</strong>, including technically <i>leading</i> multiple releases, as well as <i>strong</i> problem-solving skills in <strong>production environments</strong>, supported by solid experience in support activities.
                        <br/>
                        I continuously invest in expanding my knowledge through hands-on experience and continuous learning, with a <i>strong</i> focus on scalable data architectures, distributed processing, and reliable data pipelines.
                    </Typography>
                </Section>

                {/* Skills */}
                <Section
                    id="skills"
                    title={t("Skills")}
                    bgColor="transparent"
                >
                    <Skills />
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