import ThumbnailMainpage from "../assets/images/thumbnail.png";
import ThumbnailConsquare from "../assets/images/consquare/thumbnail.png";
import { StaticImageData } from "next/image";

export interface HeadInfo {
    title: string,
    description: string,
    keywords: string,
    url: string,
    image: StaticImageData,
};

export const mainPageHead: HeadInfo = {
    title: "Marek Choiński",
    description: "I'm a (really good) frontend developer.",
    keywords: "marek,choiński,choinski,web,fontend,developer",
    url: "https://marekchoinski.com/",
    image: ThumbnailMainpage,
};

export const consquareHead: HeadInfo = {
    title: "Consquare",
    description: "GPS-based, procedurally structure generated, PokemonGo-alike multiplayer mobile game.",
    keywords: "consquare,marek,choinski,webdev,frontend,react,magic,game,mobile,unity,django,blender",
    url: "https://marekchoinski.com/consquare",
    image: ThumbnailConsquare,
};
