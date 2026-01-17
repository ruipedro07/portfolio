import React from "react";
import {
    Box,
} from "@mui/material";
import {useTranslation} from "react-i18next";
import Section from "./section";
import Navbar from "./Navbar";
import Experience from "./experience";
import {connect} from "react-redux";
import {
    SET_FORM_EMAIL, SET_FORM_MESSAGE, SET_FORM_NAME, SUBMIT_CONTACT_FORM,

} from "./actions/actionTypes";
import Contact from "./contact";
import Skills from "./skills";
import Education from "./education";
import HomeSection from "./homesection";

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
                       formSubmitError
                   }) => {
    const {t, i18n} = useTranslation();

    const submitContactForm = (event) => {
        event.preventDefault();
        submitContactFormSaga(name, email, message);
    }

    return (
        <Box sx={{width: "100%", minHeight: "100vh"}}>
            <Navbar/>

            <Box sx={{display: "flex", flexDirection: "column", width: "100%"}}>
                {/* HOME with gradient */}
                <Box
                    sx={{
                        minHeight: "100vh",
                        width: "100%",
                        background:
                            "linear-gradient(180deg,rgba(81, 164, 194, 1) 0%, rgba(255, 255, 255, 1) 100%);",
                    }}
                >
                    <Section
                        notShowTitle
                        id="home"
                        title={t("Home")}
                        bgColor="transparent"
                        sx={{py: 0, m: 0, minHeight: "calc(100vh )"}}
                    >
                        <HomeSection/>
                    </Section>
                </Box>

                {/* About
                <Section id="about" title={t("About")}>
                    <DevelopmentInProgress />
                </Section>


                <Section id="projects" title={t("Projects")}>
                    <DevelopmentInProgress />
                </Section>

                */}

                {/* Skills */}
                <Section id="skills" title={t("Skills")}>
                    <Skills/>
                </Section>

                {/* Experience */}
                <Section id="experience" title={t("Experience")}>
                    <Experience />
                </Section>

                {/* Education */}
                <Section id="education" title={t("Education & Certifications")}>
                    <Education/>
                </Section>

                {/* Contact */}
                <Section id="contact" title={t("Contact")}>
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
        </Box>
    );
}

const mapStateToProps = (state) => ({
    name: state.portefolio.name,
    email: state.portefolio.email,
    message: state.portefolio.message,
    loading: state.portefolio.loading,
    submitSuccess: state.portefolio.submitSuccess,
    formSubmitError: state.portefolio.formSubmitError,
});

const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch({type: SET_FORM_NAME, payload: name}),
    setEmail: (email) => dispatch({type: SET_FORM_EMAIL, payload: email}),
    setMessage: (message) => dispatch({type: SET_FORM_MESSAGE, payload: message}),
    submitContactFormSaga: (name, email, message) => dispatch({
        type: SUBMIT_CONTACT_FORM, payload: {name, email, message}
    }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
