import { ModalWithImage } from "./dialog";
import { Typography } from "@material-tailwind/react";

import CherryBlossom from '../assets/cherry blossom illustration.jpg';

export function GiftButtons() {

    return (

        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 justify-center items-center py-4 pb-12">
            <ModalWithImage imgSrc={CherryBlossom} textHeader={"Un viaggio indimenticabile!"} textBody={"In Giappone!"} nome={"Claudia Giancola"} iban={"BE40 9053 8536 7263"} banca={"Wise, Rue du Trône 100, 3rd floor, Brussels, 1050, Belgium"} />

            <ModalWithImage imgSrc={"https://preview.redd.it/i-made-a-thermomix-drawing-yesterday-v0-7ztzgb8eh2w81.jpg?auto=webp&s=7e813abc716908b69685fc7184da5d6f9130b24b"} textHeader={"Un gadget fenomenale!"} textBody={"Il Bimby!"} nome={"Giada Sponzilli"} iban={"BE26 9053 8563 5429"} banca={"Wise, Rue du Trône 100, 3rd floor, Brussels, 1050, Belgium!"} />
        </div>

    );

}