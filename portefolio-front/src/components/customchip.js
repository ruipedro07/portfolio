import React from "react";
import {Chip} from "@mui/material";


export const CustomChip = ({
                        key,
                        label
                    }) => {

    return (
        <Chip
            key={key}
            label={label}
            sx={{fontWeight: 300}}
        />
    )
}