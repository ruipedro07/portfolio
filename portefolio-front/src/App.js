import React from "react";
import {
    Typography,
    Box,
    Chip,
    Stack,
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
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CustomTimeline from "./timeline";

const events = [

    {
        id: 1,
        period: "SET 2022 - OUT 2025",
        company: "Instituto Superior de Engenharia do Porto",
        location: "Porto, Portugal",
        type: "Master of Science (B.Sc.)",
        workTitle: "Software Engineering",
        description: `
Course covering advanced programming and software architecture content.
It has an ABET certification ‑ global accreditation body for university
programs in natural and applied sciences, computer science, engineering
and engineering technologies. 
`,
        icon: (<HomeWorkIcon color="primary"></HomeWorkIcon>)
    },

    {
        id: 2,
        period: "OCT 2019 - SET 2022",
        company: "Instituto Superior de Engenharia do Porto",
        location: "Porto, Portugal",
        type: "Bachelor of Science (B.Sc.)",
        workTitle: "Informatics Engineering",
        description: `
Course that addresses modern content focused on software development,
systems management, network management and teamwork. It was the first
degree in Portugal distinguished with the EUR‑ACE quality certification of the
Order of Engineers, recognized throughout Europe, Latin America and Asia.
I was awarded the 3rd highest ranked student by the Department of
Computer Engineering at my university.
`,
        icon: (<HomeWorkIcon color="primary"></HomeWorkIcon>)
    },


];


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
                    {/*<Typography variant="body1">{t("welcome")}</Typography>*/}
                </Section>


                {/* About */}
                <Section id="about" title={t("About")}>
                    {/*<Typography variant="body1"> {t("aboutMe")}</Typography>*/}
                </Section>


                {/* Projects */}
                <Section id="projects" title={t("Projects")}>
                    <Typography variant="body1">TODO</Typography>
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
                    <CustomTimeline smallVersion={true} events={events}></CustomTimeline>
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
