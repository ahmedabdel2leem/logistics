import Image from "next/image"
import Link from "next/link"
import Arrow from '@/assets/Arrow.svg'
type Props = {
    text: string,
    color: string
}
function Button({ text, color }: Props) {

    return (
        <Link href={""} className="text-xl flex flex-wrap group max-w-fit items-center">
            <p className={`pr-3 text-${color}`} >
                {text}
            </p>
            {/* <Arrow /> */}
            <div className="relative">
                <Image
                    className=" transform group-hover:translate-x-3 transition "
                    src={Arrow}
                    alt="arrow"

                />

            </div>
        </Link >

    )
}

export default Button