import MainContent from "../MainContent";
import { PricingHero } from "./Hero";

function PricingPage() {
    return (
        <MainContent>
            <div className="w-full h-auto">
                <PricingHero />
            </div>
        </MainContent>
    );
}

export default PricingPage;