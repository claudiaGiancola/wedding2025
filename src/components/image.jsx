import Countdown from "./countdown";
import {
    Typography,
} from "@material-tailwind/react";
import { ModalWithImage } from "./dialog";

import invitoMatrimonioRegalo from '../assets/Invito Matrimonio regalo modified.png';
import CherryBlossom from '../assets/cherry blossom illustration.jpg';

export function ImgWithBlurredCaption() {
    return (
        <figure className="relative w-full rounded-lg">
            <figcaption className=" flex justify-center 
    w-full md:w-[50vw] lg:w-[38vw] 
    static md:absolute md:bottom-4 md:left-2/4 md:-translate-x-2/4  md:rounded-xl md:border md:bg-white/60 md:py-0.5 md:shadow-lg md:shadow-black/5 md:backdrop-blur-sm ">
                <div>
                    <Countdown />
                </div>
            </figcaption>
        </figure>
    );
}

export function ImgWithText() {
    return (
        <div className="relative">
            <img
            className="w-full sm:object-cover h-[34rem] sm:h-full"
            src={invitoMatrimonioRegalo} 
            />
            <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center py-4 sm:px-64 pb-6">
                    <Typography variant="h6" color="grey" className="text-2xl sm:text-4xl">
                        Regalaci...
                    </Typography>

                    <ModalWithImage imgSrc={CherryBlossom} textHeader={"Un viaggio indimenticabile!"} nome={"Claudia Giancola"} iban={"BE40 9053 8536 7263"} banca={"Wise, Rue du Trône 100, 3rd floor, Brussels, 1050, Belgium"}/>

                    <ModalWithImage imgSrc={"https://preview.redd.it/i-made-a-thermomix-drawing-yesterday-v0-7ztzgb8eh2w81.jpg?auto=webp&s=7e813abc716908b69685fc7184da5d6f9130b24b"} textHeader={"Un gadget fenomenale!"} nome={"Giada Sponzilli"} iban={"ITXXXXXX"} banca={"CheBanca!"}/>
            </div>
        </div>
    );
}