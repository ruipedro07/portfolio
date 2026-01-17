import React from "react";
import { Button, CircularProgress, Box } from "@mui/material";

const CustomButton = ({
                          children,
                          variant = "primary", // "primary" | "secondary"
                          startIcon,
                          endIcon,
                          sx,
                          loading = false,
                          disabled,
                          ...props
                      }) => {
    const isPrimary = variant === "primary";
    const isIconOnly = !children && (startIcon || endIcon);

    const baseStyles = {
        textTransform: "none",
        fontWeight: 600,
        transition: "all 0.3s ease",
        position: "relative", // needed for overlay spinner
        ...(isIconOnly
            ? {
                borderRadius: "50%",
                minWidth: 0,
                width: 48,
                height: 48,
                p: 0,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }
            : {
                borderRadius: "999px", // pill / rounded
                px: 3,
                py: 1,
            }),
    };

    const variantStyles = isPrimary
        ? {
            backgroundColor: "black",
            color: "white",
            "&:hover": {
                backgroundColor: "#333",
                transform: "scale(1.03)",
            },
            // keep colors when disabled (while loading)
            "&.Mui-disabled": {
                backgroundColor: "black",
                color: "white",
                opacity: 0.7,
            },
        }
        : {
            backgroundColor: "white",
            color: "black",
            "&:hover": {
                backgroundColor: "#f5f5f5",
                transform: "scale(1.03)",
            },
            "&.Mui-disabled": {
                backgroundColor: "white",
                color: "black",
                opacity: 0.7,
            },
        };

    return (
        <Button
            // normal icons only when not icon-only
            startIcon={!isIconOnly ? startIcon : undefined}
            endIcon={!isIconOnly ? endIcon : undefined}
            sx={{ ...baseStyles, ...variantStyles, ...sx }}
            disabled={loading || disabled}
            {...props}
        >
            {/* Content (text / icon) */}
            <Box
                component="span"
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // For icon-only, hide the underlying icon when loading so spinner is clear
                    visibility: loading && isIconOnly ? "hidden" : "visible",
                    // For text buttons, you can slightly fade text when loading (optional)
                    opacity: loading && !isIconOnly ? 0.8 : 1,
                }}
            >
                {isIconOnly ? startIcon || endIcon : children}
            </Box>

            {/* Overlay spinner when loading */}
            {loading && (
                <CircularProgress
                    size={isIconOnly ? 24 : 20}
                    thickness={4}
                    sx={{
                        color: isPrimary ? "white" : "black",
                        position: "absolute",
                        inset: 0,
                        margin: "auto",
                    }}
                />
            )}
        </Button>
    );
};

export default CustomButton;