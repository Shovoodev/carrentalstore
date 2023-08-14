import Image from "next/image"
import { CustomButton } from "."

const Hero = () => {
  return (
    <div className="hero">
        <div className="flex-1 ft-36 paddin-x">
            <h1 className="hero__title">
                car store 
            </h1>
            <p className="hero_subtitle"> best place to get information abuot you new car  </p>
        <CustomButton/>
        </div>

    </div>
  )
}

export default Hero
