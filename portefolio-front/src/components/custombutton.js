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

    const baseStyles = {
        borderRadius: "999px",      // fully rounded
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1,
        transition: "all 0.3s ease",
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

    return (
        <Button
            startIcon={startIcon}
            endIcon={endIcon}
            sx={{ ...baseStyles, ...variantStyles, ...sx }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default CustomButton;