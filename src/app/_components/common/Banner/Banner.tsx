import Button from "../Button/Button"
import './Banner.css'

type Props = {
    title: string,
    desc: string,
    button: boolean
    buttonText: string,
    position: string
}

function Banner({ title, desc, button, buttonText, position }: Props) {

    return (
        <div className={`banner absolute ${position} left-0 sm:left-20 px-7 sm:px-0 inline-block text-center sm:text-start z-4 `} >
            <div className="bannerTitle   text-slate-100  mb-3 font-nova font-light">{title}</div>
            <p className="BannerDesc text-lg  max-w-[530px] text-white font-nova font-normal">{desc}</p>
            <div className="mt-10 flex justify-center sm:justify-start">

                {button ? <Button text={buttonText} color="white" /> : ''}
            </div>
        </div >
    )
}

export default Banner