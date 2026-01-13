import MainContent from "../MainContent";
import { ProductHero } from "./Hero";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import productKite from "../../assets/images/products-kite.png";
import { Button } from "../../Components/ui/Button";
import console from "../../assets/images/console.png";
import coin from "../../assets/images/coin.png";
import landing from "../../assets/images/landing.svg";
import varsity from "../../assets/images/varsity.png";
import { Universe } from "./Universe";

function ProductPage() {
    return (
        <MainContent>
            <div className="flex flex-col gap-y-10 my-10">
                <ProductHero />
                <LeftSection
                    image={productKite}
                    heading="Kite"
                    information="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                    buttons={<> <Button text="Try Demo" varient="secondary" rightIcon={true} />
                        <Button text="Learn More" varient="secondary" rightIcon={true} />
                    </>}
                />
                <RightSection image={console} heading="Console" information="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                buttons={<Button text="Learn More" varient="secondary" rightIcon={true} />}
                />
                <LeftSection
                    image={coin}
                    heading="Coin"
                    information="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                    buttons={<> <Button text="Coin" varient="secondary" rightIcon={true} />       
                    </>}
                />

                <RightSection image={landing} heading="Kite Connect API" information="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                buttons={<Button text="Kite Connect" varient="secondary" rightIcon={true} />}
                />

                 <LeftSection
                    image={varsity}
                    heading="Varsity mobile"
                    information="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                />

                <Universe />
            </div>
        </MainContent>
    );
}

export default ProductPage;