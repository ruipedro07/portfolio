import * as React from 'react';
import CustomTimeline from "./timeline";
import HomeWorkIcon from "@mui/icons-material/HomeWork";


export default function Education() {

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


    return (
        <CustomTimeline smallVersion={true} events={events}></CustomTimeline>
    );
}
