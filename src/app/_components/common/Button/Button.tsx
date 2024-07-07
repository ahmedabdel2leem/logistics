import Image from "next/image"
import Link from "next/link"
import Arrow from '@/assets/Arrow.svg'
type Props = {
    text: string,
    color: string
}
function Button({ text, color }: Props) {

    return (
        <Link href={""} className="text-lg font-medium flex flex-wrap group max-w-fit items-center">
            <p className={`pr-1 text-${color} text-xl`} >
                {text}
            </p>
            {/* <Arrow /> */}
            <div className="relative">
                <Image
                    className=" transform group-hover:translate-x-3 duration-500 transition "
                    src={Arrow}
                    alt="arrow"
                    width={30}

                />

            </div>
        </Link >

    )
}

export default Button