import Button from "../Button/Button"
import Styles from './Banner.module.css'

type Props = {
    title: string,
    desc: string,
    button: boolean
    buttonText: string,
    position: string
}

function Banner({ title, desc, button, buttonText, position }: Props) {

    return (
        <div className={`banner absolute ${Styles[position]} left-0 sm:left-20 px-7 sm:px-0 inline-block text-center sm:text-start z-4 `} >
            <div className="bannerTitle text-6xl font-sans  text-white  mb-10 font-thin">{title}</div>
            <p className="BannerDesc text-base  max-w-[500px] text-white font-thin">{desc}</p>
            <div className="mt-10 flex justify-center sm:justify-start">

                {button ? <Button text={buttonText} color="white" /> : ''}
            </div>
        </div >
    )
}

export default Banner