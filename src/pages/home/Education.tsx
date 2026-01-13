import MainContent from "../MainContent";
import education_svg from "../../assets/images/education.svg";
import { Button } from "../../Components/ui/Button";

function Education() {
    return (
            <MainContent>
                <div className="w-full h-auto flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-8 my-10">
                    <div className="w-full h-auto flex items-center">
                        <img className="flex w-full lg:w-[300px] max-w-[300px] justify-center object-fill" src={education_svg} alt="" loading="lazy" />
                    </div>
                    <div className="w-full h-auto flex-col justify-center items-center space-y-2">
                        <h1 className="w-full font-inter text-2xl font-semibold text-lightblack">Free and open market education</h1>
                        <p className="w-full h-auto text-[12px] font-inter text-gray-600">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <Button text="Varsity" varient="secondary" rightIcon={true} />
                        <p className="w-full h-auto text-[12px] font-inter text-gray-600">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <Button text="TradingQ&A" varient="secondary" rightIcon={true} />
                    </div>
                </div>
            </MainContent>
    );
}

export default Education;