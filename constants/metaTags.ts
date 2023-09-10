
export interface MetaTags {
    title: string,
    description: string,
    keywords: string,
    url: string,
    image: string,
};

export const homeMetaTags: MetaTags = {
    title: "Marek Choiński",
    description: "I'm a (really good) frontend developer.",
    keywords: "marek,choiński,choinski,web,fontend,developer",
    url: "https://marekchoinski.com/",
    image: "/public/images/thumbnail.png",
};

export const consquareMetaTags: MetaTags = {
    title: "Consquare",
    description: "GPS-based, procedurally structure generated, PokemonGo-alike multiplayer mobile game.",
    keywords: "consquare,marek,choinski,webdev,frontend,react,magic,game,mobile,unity,django,blender",
    url: "https://marekchoinski.com/consquare",
    image: "/public/images/consquare/thumbnail.png"
};
