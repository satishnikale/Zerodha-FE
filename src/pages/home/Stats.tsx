import stat_1 from "../../assets/images/pricing0.svg";
import stat_2 from "../../assets/images/pricingEquity.svg";
import stat_3 from "../../assets/images/intradayTrades.svg";
import { Button } from "../../Components/ui/Button";
import MainContent from "../MainContent";

function Stat() {
    return (
        <MainContent>
            <div className="my-10">
                <div className="flex flex-col lg:flex-row text-lightblack mb-4 gap-4">
                    <div className="w-full h-atuo">
                        <h1 className="w-full h-auto text-3xl font-inter font-semibold">
                            Unbeatable pricing
                        </h1>
                        <p className="w-full h-auto font-inter text-[12px] mt-4">
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                    </div>
                    <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-x-4">
                        <div className="w-full h-auto">
                            <img className="w-28" src={stat_1} alt="pricing-img-0" loading="lazy" />
                            <p className="w-16 text-[8px] text-center">Free account opening</p>
                        </div>
                        <div className="w-full h-auto">
                            <img className="w-28" src={stat_2} alt="pricing-img-0" loading="lazy" />
                            <p className="w-20 text-[8px] text-center">Free equity delivery and direct mutual funds</p>
                        </div><div className="w-full h-auto">
                            <img className="w-28" src={stat_3} alt="pricing-img-0" loading="lazy" />
                            <p className="w-14 text-[8px] text-center"> Intraday and F&O</p>
                        </div>
                    </div>
                </div>
                <Button text="See pricing" varient="secondary" rightIcon={true} />
            </div>
        </MainContent>
    );
}

export default Stat;