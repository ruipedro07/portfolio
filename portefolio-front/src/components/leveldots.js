import {
    Box,
    Stack,
    useTheme
} from "@mui/material";



export const LevelDots = ({ level, size = 8 }) => {
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