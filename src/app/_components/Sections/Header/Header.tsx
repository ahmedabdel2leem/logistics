import BackGroundVideo from "../../BackGroundVideo/BackGroundVideo"
import Banner from "../../common/Banner/Banner"
import './header.css'

function Header() {

    return (
        <div className="header h-dvh relative ">
            <div className=" HeaderLayer absolute bottom-0 left-0 w-full h-[80%]  "></div>
            <BackGroundVideo />
            <Banner
                title="Lorem ipsum dolor"
                desc="Lorem ipsum dolor sit amet consectetur. Et ultrices auctor tempor urna lectus diam pretium."
                button={true}
                buttonText="Discover more"
                position="Bannerbottom" />

            <div className="arrowDown">
                <svg className="arrows w-3" width={20} viewBox="0 0 60 72">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
        </div >
    )
}

export default Header