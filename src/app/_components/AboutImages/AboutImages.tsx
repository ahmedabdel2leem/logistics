import { IImages } from "@/types"
import Image from "next/image"

type Props = {
    item: IImages
}

function AboutImages({ item }: Props) {

    return (
        <div className="relative z-50 ">
            <div className="img   ">
                <Image src={item.img}
                    alt="temperature"
                    width={350}
                />

            </div>
            <div className="layer w-full h-full absolute top-0 opacity-35"></div>
            <div className="absolute top-0     h-full w-full left-0 ">
                <div className="about absolute top-72 left-10 text-white ">
                    <h3 className="block text-4xl font-extralight">{item.title}</h3>
                    <p className="text-xl font-extralight">{item.descraption}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutImages