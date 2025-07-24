import { PricingCard } from "../../Components/ui/PricingCard";
import zero from "../../assets/images/pricing0.svg";
import twenty from "../../assets/images/intradayTrades.svg";


export const PricingHero = () => {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center my-20">
            <div className="w-full h-auto font-inter space-y-4">
                <h1 className="text-3xl text-center">Charges</h1>
                <h2 className="text-xl text-lightblack text-center">List of all charges and taxes</h2>
            </div>
            <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center my-16">
                <PricingCard 
                    image={zero} 
                    heading="Free equity delivery" 
                    text="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
                 />

                 <PricingCard 
                    image={twenty} 
                    heading="Free equity delivery" 
                    text="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
                 />

                 <PricingCard 
                    image={zero} 
                    heading="Free equity delivery" 
                    text="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
                 />
            </div>
        </div>

    )
}