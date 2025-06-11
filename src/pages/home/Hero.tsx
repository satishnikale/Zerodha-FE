import { Button } from "../../Components/ui/Button";
import MainContent from "../MainContent";
import hero from "../../assets/images/homeHero.png";

function Hero() {
    return ( 
        <MainContent>
            <div className="w-full h-full flex flex-col justify-center items-center font-inter my-10">
                <img className="w-full h-full" src={hero} alt="" />
                <h1 className="text-3xl font-semibold mt-8 mb-4">Invest in everything</h1>
                <p className="mb-8">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Button text={"Sign Up for free"} varient="primary" />
            </div>
        </MainContent>
     );
}

export default Hero;