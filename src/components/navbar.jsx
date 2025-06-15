import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 flex justify-center gap-x-4">
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#top-illustration">
                    Home
                </a>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#timeline">
                    Timeline
                </a>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#regalo">
                    Gift
                </a>
            </Typography>
        </Navbar>
    );
}