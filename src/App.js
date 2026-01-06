import React from "react";
import {

    Typography,
    Box,
    Chip,
    Stack,
    TextField,
    Button
} from "@mui/material";
import {useTranslation} from "react-i18next";
import Section from "./section";
import Navbar from "./Navbar";
import Experience from "./experience";
import {connect} from "react-redux";
import {
    SET_FORM_EMAIL, SET_FORM_MESSAGE, SET_FORM_NAME, SUBMIT_CONTACT_FORM,

} from "./actions/actionTypes";


const Portfolio = ({
                       name,
                       email,
                       message,
                       setName,
                       setEmail,
                       setMessage,
                       submitContactFormSaga
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
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {/*["React", "TypeScript", "Node.js", "Three.js", "MUI", "Postgres", "Docker"]*/[].map((s) => (
                            <Chip key={s} label={s} sx={{fontWeight: 600}}/>
                        ))}
                    </Stack>
                </Section>


                {/* Experience */}
                <Section id="experience" title={t("Experience")}>
                    <Experience></Experience>
                </Section>


                {/* Contact */}
                <Section id="contact" title={t("Contact")}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                        <Box component="form"
                             onSubmit={submitContactForm}
                             sx={{display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, width: '100%'}}>
                            <TextField label={t("Name")}
                                       value={name}
                                       onChange={(e) => setName(e.target.value)}
                                       name="name" variant="outlined" required/>
                            <TextField label={t("Email")} name="email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       type="email" variant="outlined" required/>
                            <TextField label={t("Message")} name="message"
                                       value={message}
                                       onChange={(e) => setMessage(e.target.value)}
                                       multiline rows={4} variant="outlined"
                                       required/>
                            <Button type="submit" variant="contained" color="primary">
                                {t("Send")}
                            </Button>
                        </Box>
                    </Box>
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
