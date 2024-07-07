import { IImages } from "@/types"
import Image from "next/image"

type Props = {
    item: IImages,
    index: number
}

function AboutImages({ item, index }: Props) {

    return (
        <div className="aboutImages relative z-50 ">
            <div className="img   ">
                <Image src={item.img}
                    alt="temperature"
                    width={360}
                    height={450}
                />

            </div>
            <div className={`layer w-full h-full absolute top-0 ${index % 2 === 0 ? 'bg-mainColor bg-opacity-70' : 'bg-[#486eee] bg-opacity-45'}   `}></div>
            <div className="absolute top-0     h-full w-full left-0 ">
                <div className="about absolute top-64 left-10 text-white space-y-3 ">
                    <h3 className="block text-5xl font-nova font-normal ">{item.title}</h3>
                    <p className="text-2xl font-extralight">{item.descraption}</p>
                </div>
            </div>
        </div >
    )
}

export default AboutImages