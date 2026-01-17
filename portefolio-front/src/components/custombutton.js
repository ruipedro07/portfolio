import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
                          children,
                          variant = "primary",        // "primary" | "secondary"
                          startIcon,
                          endIcon,
                          sx,
                          ...props
                      }) => {
    const isPrimary = variant === "primary";
    const isIconOnly = !children && (startIcon || endIcon);

    const baseStyles = {
        textTransform: "none",
        fontWeight: 600,
        transition: "all 0.3s ease",
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
        }
        : {
            backgroundColor: "white",
            color: "black",

            "&:hover": {
                backgroundColor: "#f5f5f5",
                transform: "scale(1.03)",
            },
        };

    // For icon-only, we render the icon as the button child directly
    const content = isIconOnly ? startIcon || endIcon : children;

    return (
        <Button
            // Only use MUI's startIcon/endIcon when not icon-only,
            // otherwise they add unwanted spacing.
            startIcon={!isIconOnly ? startIcon : undefined}
            endIcon={!isIconOnly ? endIcon : undefined}
            sx={{ ...baseStyles, ...variantStyles, ...sx }}
            {...props}
        >
            {content}
        </Button>
    );
};

export default CustomButton;