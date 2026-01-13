import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Stack,
    useTheme, Chip
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SmartToyIcon from '@mui/icons-material/SmartToy';



const skillsData = [
    {
        title: "Big Data",
        icon: <WarehouseIcon />,
        level: 5,
        skills: [
            { name: "Hadoop", level: 5 },
            { name: "Java Spark", level: 5 },
            { name: "Hive", level: 5 },
            { name: "MapReduce", level: 4 },
        ]
    },
    {
        title: "Backend",
        icon: <StorageIcon />,
        level: 4,
        skills: [
            { name: "Java", level: 5 },
            { name: "Spring Boot", level: 5 },
            { name: "Python", level: 4 },
        ]
    },

    {
        title: "AI",
        icon: <SmartToyIcon />,
        level: 3,
        skills: [
            { name: "RAG", level: 5 },
            { name: "LLMs", level: 4 },
            { name: "Fine-tuning", level: 2 },
            { name: "Fine-tuning", level: 2 },
            { name: "Fine-tuning", level: 2 },
            { name: "Fine-tuning", level: 2 },
            { name: "Fine-tuning", level: 2 },
            { name: "Fine-tuning", level: 2 },
            { name: "Fine-tuning", level: 2 },
        ]
    },

    {
        title: "Frontend",
        icon: <CodeIcon />,
        level: 2,
        skills: [
            { name: "React", level: 2 },
            { name: "JavaScript", level: 3 },
            { name: "Material UI", level: 2 },
            { name: "HTML / CSS", level: 3 }
        ]
    },
    {
        title: "Tools & DevOps",
        icon: <BuildIcon />,
        level: 4,
        skills: [
            { name: "Git", level: 5 },
            { name: "Jira", level: 5 },
            { name: "Docker", level: 4 },
            { name: "CI/CD", level: 4 },
            { name: "Linux", level: 4 },
        ]
    },
    {
        title: "Cloud & Databases",
        icon: <CloudIcon />,
        level: 3,
        skills: [
            { name: "MongoDB", level: 4 },
            { name: "PostgreSQL", level: 3 },
            { name: "Firebase", level: 4 },
            { name: "AWS", level: 3 }
        ]
    }
];

export default function Skills() {
    const theme = useTheme();

    return (
        <Box sx={{ mt: 6 }}>
            <Grid container spacing={3}>
                {skillsData.map((category) => (
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(auto-fit, minmax(260px, 1fr))",
                            },
                            gap: 3,
                        }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                border: `1px solid ${theme.palette.divider}`,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: theme.shadows[6]
                                }
                            }}
                        >
                            <CardContent>
                                <Stack spacing={2}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box color="primary.main">{category.icon}</Box>
                                        <Typography variant="h6" fontWeight={600}>
                                            {category.title}
                                        </Typography>
                                    </Stack>

                                    <Box
                                        sx={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(4, 1fr)", // 👈 exactly 4 per row
                                            gap: 1,
                                        }}
                                    >
                                        {category.skills.map((skill) => (
                                            <Chip
                                                key={skill}
                                                label={skill.name}
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    mb: 1,
                                                    borderRadius: 1,
                                                    fontWeight: 500
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}
