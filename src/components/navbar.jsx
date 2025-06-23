import {
    Navbar,
    Typography,
} from "@material-tailwind/react";

export function StickyNavbar() {

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-4 sm:py-3 flex justify-center gap-x-3 sm:gap-x-4">
            <Typography
                color="blue-gray"
                className="p-1 font-normal text-lg sm:text-sm text-blue-gray-800">
                <a href="#top-illustration">
                    Home
                </a>
            </Typography>
            <Typography
                color="blue-gray"
                className="p-1 font-normal text-lg sm:text-sm text-blue-gray-800">
                <a href="#timeline">
                    Programma
                </a>
            </Typography>
            <Typography
                color="blue-gray"
                className="p-1 font-normal text-lg sm:text-sm text-blue-gray-800">
                <a href="#regalo">
                    Regalo
                </a>
            </Typography>
            <Typography
                color="blue-gray"
                className="p-1 font-normal text-lg sm:text-sm text-blue-gray-800">
                <a href="#grazie">
                    Grazie!
                </a>
            </Typography>
        </Navbar>
    );
}