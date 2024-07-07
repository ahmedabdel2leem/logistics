import localFonts from "next/font/local";

const nova = localFonts({
    src: [
        {
            path: "../assets/fonts/ProximaNovaLight.ttf",
            weight: "100",
            style: "normal"
        }, {
            path: "../assets/fonts/ProximaNovaRegular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/ProximaNovaSemibold.ttf",
            weight: "700",
            style: "normal",
        },],
    variable: "--font-nova"
})

export { nova }