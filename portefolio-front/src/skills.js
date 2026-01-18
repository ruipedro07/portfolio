import {
    Box,
    Card,
    CardContent,
    Typography,
    Stack,
    useTheme
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import {motion} from "framer-motion";
import {CustomChip} from "./components/customchip";


const skillsData = [
    {
        title: "Big Data & Databases",
        icon: <WarehouseIcon/>,
        level: 5,
        skills: [
            {name: "Hadoop", level: 5},
            {name: "MapReduce", level: 4},
            {name: "HDFS", level: 5},
            {name: "Spark", level: 5},
            {name: "ETL Pipelines", level: 5},
            {name: "Kafka", level: 4},
            {name: "Hive", level: 5},
            {name: "MS SQL Server", level: 5},
            {name: "MySql", level: 5},

        ]
    },
    {
        title: "Backend",
        icon: <StorageIcon/>,
        level: 4,
        skills: [
            {name: "Java", level: 5},
            {name: "Spring Boot", level: 5},
            {name: "Python", level: 4},
            {name: "OOP", level: 4},
            {name: "Design patterns", level: 4},
            {name: "System design", level: 4},
        ]
    },

    {
        title: "AI",
        icon: <SmartToyIcon/>,
        level: 3,
        skills: [
            {name: "RAG", level: 5},
            {name: "Spring AI", level: 4},
            {name: "LLMs", level: 4},
            {name: "Fine-tuning", level: 2},
            {name: "Vector Databases", level: 3},
        ]
    },

    {
        title: "Frontend",
        icon: <CodeIcon/>,
        level: 2,
        skills: [
            {name: "React", level: 2},
            {name: "JavaScript", level: 3},
            {name: "Material UI", level: 2},
            {name: "HTML / CSS", level: 3}
        ]
    },
    {
        title: "DevOps",
        icon: <BuildIcon/>,
        level: 4,
        skills: [
            {name: "OpenShift", level: 3},
            {name: "Github Actions", level: 4},
            {name: "Jenkins", level: 4},
            {name: "Docker", level: 5},
            {name: "CI/CD", level: 4},
            {name: "Ansible", level: 3},
            {name: "Terraform", level: 3},


        ]
    },
    {
        title: "Tools",
        icon: <BuildIcon/>,
        level: 4,
        skills: [
            {name: "Git", level: 5},
            {name: "Jira", level: 5},
            {name: "Confluence", level: 5},
            {name: "Linux", level: 4},
        ]
    },
];

export default function Skills() {
    const theme = useTheme();

    const cardVariants = {
        hidden: {opacity: 0, y: 30},
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {delay: i * 0.08, duration: 0.5, ease: "easeOut"},
        }),
    };


    return (
        <Box
            sx={{
                mt: 6,
                display: "grid",
                gap: 3,
                gridTemplateColumns: {
                    xs: "repeat(1, minmax(0, 1fr))",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(3, minmax(0, 1fr))",
                },
            }}
        >
            {skillsData.map((category, idx) => (
                <motion.div
                    key={category.title}
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}} // animate once when 20% of card is in view
                >
                    <Card
                        key={category.title}
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            borderRadius: 3,
                            border: `1px solid ${theme.palette.divider}`,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: theme.shadows[6],
                            },
                        }}
                    >
                        <CardContent sx={{flex: 1, display: "flex", flexDirection: "column"}}>
                            <Stack spacing={2} sx={{height: "100%"}}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Box color="primary.main">{category.icon}</Box>
                                    <Typography variant="h6" fontWeight={600}>
                                        {category.title}
                                    </Typography>
                                </Stack>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        // justifyContent: "center", // center horizontally
                                        gap: 1,                   // space between chips
                                    }}
                                >
                                    {category.skills.map((skill) => (
                                        <CustomChip
                                            key={skill.name}
                                            label={skill.name}>
                                        </CustomChip>
                                    ))}
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </Box>
    );
}
