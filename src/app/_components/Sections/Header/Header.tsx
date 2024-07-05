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
        </div>
    )
}

export default Header