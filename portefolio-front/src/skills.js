import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Stack,
    useTheme
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const LevelDots = ({ level, size = 8 }) => {
    const theme = useTheme();

    return (
        <Stack direction="row" spacing={0.6}>
            {[1, 2, 3, 4, 5].map((dot) => (
                <Box
                    key={dot}
                    sx={{
                        width: size,
                        height: size,
                        borderRadius: "50%",
                        backgroundColor:
                            dot <= level
                                ? theme.palette.primary.main
                                : theme.palette.divider
                    }}
                />
            ))}
        </Stack>
    );
};

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
        title: "AI",
        icon: <SmartToyIcon />,
        level: 4,
        skills: [
            { name: "RAG", level: 5 },
            { name: "LLMs", level: 4 },
            { name: "Fine-tuning", level: 3 },
        ]
    },
    {
        title: "Frontend",
        icon: <CodeIcon />,
        level: 3,
        skills: [
            { name: "React", level: 3 },
            { name: "Angular", level: 2 },
            { name: "JavaScript", level: 3 },
            { name: "Material UI", level: 3 },
            { name: "HTML / CSS", level: 3 }
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
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
            >
                {skillsData.map((stack) => (
                    <Grid item xs={12} sm={6} md={3} key={stack.title}>
                        <Card
                            elevation={0}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: 3,
                                border: `1px solid ${theme.palette.divider}`,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: theme.shadows[6]
                                }
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Stack spacing={2}>
                                    {/* Stack Header */}
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1.2}
                                    >
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Box color="primary.main">{stack.icon}</Box>
                                            <Typography variant="h6" fontWeight={600}>
                                                {stack.title}
                                            </Typography>
                                        </Stack>
                                        <LevelDots level={stack.level} size={10} />
                                    </Stack>

                                    {/* Skills */}
                                    <Stack spacing={1.2}>
                                        {stack.skills.map((skill) => (
                                            <Stack
                                                key={skill.name}
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center"
                                                spacing={2}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {skill.name}
                                                </Typography>
                                                <LevelDots level={skill.level} />
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
