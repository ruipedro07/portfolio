import React from "react";
import {
    Typography,
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
import DevelopmentInProgress from "./components/devprogress";

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
    // Navbar offset (height of AppBar). Tune if your AppBar is taller/shorter.


    const submitContactForm = (event) => {
        event.preventDefault();
        submitContactFormSaga(name, email, message);
    }

    return (
        <>

            <Navbar/>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column", // vertical stacking
                    width: "100%",            // make sure it spans full width
                }}
            >

                <Section id="home" title={t("Home")}>
                    <DevelopmentInProgress></DevelopmentInProgress>
                </Section>


                {/* About */}
                <Section id="about" title={t("About")}>
                    <DevelopmentInProgress></DevelopmentInProgress>
                </Section>


                {/* Projects */}
                <Section id="projects" title={t("Projects")}>
                    <DevelopmentInProgress></DevelopmentInProgress>
                </Section>


                {/* Skills */}
                <Section id="skills" title={t("Skills")}>
                    <Skills></Skills>
                </Section>


                {/* Experience */}
                <Section id="experience" title={t("Experience")}>
                    <Experience></Experience>
                </Section>

                {/* Experience */}
                <Section id="education" title={t("Education & Certifications")}>
                    <Education></Education>
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
                            submitContactForm
                        }}

                    >
                    </Contact>
                </Section>
            </Box>
        </>
    )
        ;
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
        type: SUBMIT_CONTACT_FORM,
        payload: {name, email, message}
    }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
