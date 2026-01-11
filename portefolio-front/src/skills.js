import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    useTheme
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";

const skillsData = [
    {
        title: "Frontend",
        icon: <CodeIcon />,
        skills: ["React", "TypeScript", "JavaScript", "Material UI", "HTML", "CSS"]
    },
    {
        title: "Backend",
        icon: <StorageIcon />,
        skills: ["Node.js", "Express", "REST APIs", "JWT", "GraphQL"]
    },
    {
        title: "Tools & DevOps",
        icon: <BuildIcon />,
        skills: ["Git", "Docker", "CI/CD", "GitHub Actions"]
    },
    {
        title: "Cloud & Databases",
        icon: <CloudIcon />,
        skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS"]
    }
];

export default function Skills() {
    const theme = useTheme();

    return (
        <Box sx={{ mt: 6 }}>
            <Grid container spacing={3}>
                {skillsData.map((category) => (
                    <Grid item xs={12} sm={6} md={3} key={category.title}>
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

                                    <Stack direction="row" spacing={1} flexWrap="wrap">
                                        {category.skills.map((skill) => (
                                            <Chip
                                                key={skill}
                                                label={skill}
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    mb: 1,
                                                    borderRadius: 1,
                                                    fontWeight: 500
                                                }}
                                            />
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
