import MainContent from "../MainContent";
import { ProductHero } from "./Hero";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import productKite from "../../assets/images/products-kite.png";
import { Button } from "../../Components/ui/Button";
import type { Divide } from "lucide-react";

function ProductPage() {
    return (
        <MainContent>
            <div>
                <ProductHero />
                <LeftSection
                    image={productKite}
                    heading="Kite"
                    information="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."        
                
                />
                <RightSection />
            </div>
        </MainContent>
    );
}

export default ProductPage;