import { Button } from "../Components/ui/Button";
import MainContent from "./MainContent";

function OpenAccount() {
    return (
        <MainContent>
            <div className="w-full h-auto flex-col justify-center items-center my-16 text-sm space-y-6">
                <h1 className="font-inter text-2xl font-semibold text-center">Open a Zerodha account</h1>
                <p className="font-inter text-lightblack text-center">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div className="flex justify-center">
                    <Button text="Sign up for free" varient="primary" />
                </div>
            </div>
        </MainContent>
    );
}

export default OpenAccount;