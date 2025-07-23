import { UniverseCard } from "../../Components/ui/UniverseCards";
import fundHouse from "../../assets/images/zerodhaFundhouse.png";
import streak from "../../assets/images/streakLogo.png";
import sensible from "../../assets/images/sensibullLogo.svg";
import smallCase from "../../assets/images/smallcaseLogo.png";
import tijori from "../../assets/images/tijori.svg";
import ditto from "../../assets/images/dittoLogo.png";


export const Universe = () => {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="w-full h-auto font-inter space-y-2 my-8">
                <h1 className="text-2xl text-center">The Zerodha Universe</h1>
                <p className="text-lightblack text-center">Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="w-full h-auto flex flex-col md:flex-row gap-x-10 my-10">
                <UniverseCard
                    image1={fundHouse}
                    label1="Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals."
                    image2={streak}
                    label2="Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding."
                />
                <UniverseCard
                    image1={sensible}
                    label1="Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                            "
                    image2={smallCase}
                    label2="Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs."
                />
                <UniverseCard
                    image1={tijori}
                    label1="Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                            "                            
                    image2={ditto}
                    label2="Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling."
                />
            </div>
        </div>
    )
}