import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
    Stack,
    Chip,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { CustomChip } from "./components/customchip";

const projectsData = [

    {
        title: "RAG Knowledge Assistant",
        description:
            "Developed a RAG-based system to optimize technical knowledge retrieval in enterprise support environments. Built data ingestion and indexing pipelines using Spring Boot / Spring AI, Qdrant, and SQL Server, with integrations to Confluence and Control-M. The project focuses on scalable data processing, vector search optimization, and performance evaluation of retrieval configurations.",
        image: "/images/chat.png",
        techStack: ["RAG", "Spring AI", "LLMs", "Qdrant", "React", "MS SQL Server"],
        url: "https://recipp.ipp.pt/entities/publication/1bb049bb-97d1-48db-8202-57527a0a50e3",
        status: "Finished"
    },

    {
        title: "DeFile",
        description:
            "A decentralized application built with Solidity, IPFS, and React, focused on distributed data storage and metadata management. Files are ingested into IPFS, while their content identifiers (CIDs) and metadata are stored on-chain via smart contracts, enabling immutable and verifiable data references. The application integrates a Web3 wallet for authentication and emphasizes data integrity, traceability, and decentralized data access.",
        image: "/images/defile.jpeg",
        techStack: ["Blockchain","Smart Contracts",  "React", "Solidity", "IPFS"],
        status: "On going"
    },

];

function getStatusColor(status) {
    switch (status) {
        case "Finished":
            return "success";
        case "On going":
            return "warning";
        default:
            return "default";
    }
}

export default function Projects() {
    const theme = useTheme();

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
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
            {projectsData.map((project, idx) => (
                <motion.div
                    key={project.title}
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Card
                        elevation={0}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            borderRadius: 3,
                            border: `1px solid ${theme.palette.divider}`,
                            overflow: "hidden", // image flush with borders
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: theme.shadows[6],
                            },
                        }}
                    >
                        <CardActionArea
                            component="a"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "stretch",
                                height: "100%",
                            }}
                        >
                            {/* Image on top, no margins */}
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.title}
                                sx={{
                                    width: "100%",
                                    height: 180,
                                    objectFit: "cover",
                                }}
                            />

                            <CardContent
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Stack spacing={1.5} sx={{ height: "100%" }}>
                                    {/* Title + status row */}
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        spacing={1}
                                    >
                                        <Typography variant="h6" fontWeight={600}>
                                            {project.title}
                                        </Typography>
                                        <Chip
                                            label={project.status}
                                            size="small"
                                            color={getStatusColor(project.status)}
                                            sx={{ fontWeight: 500 }}
                                        />
                                    </Stack>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {project.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            mt: 1,
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1,
                                        }}
                                    >
                                        {project.techStack.map((tech) => (
                                            <CustomChip
                                                key={tech}
                                                label={tech}
                                            />
                                        ))}
                                    </Box>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </motion.div>
            ))}
        </Box>
    );
}