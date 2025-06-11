import AwardCard from "../../Components/ui/AwardCard";
import MainContent from "../MainContent";
import ecosystem_img from "../../assets/images/ecosystem.png";
import { Button } from "../../Components/ui/Button";

function Award() {
  return (
    <MainContent>
      <div className="w-full h-auto flex justify-center gap-8">
        <div className="w-full h-auto space-y-7">
            <h1 className="font-inter text-2xl">Trust with confidence</h1>
          <AwardCard
            label="Customer-first always"
            text="That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."
          />
          <AwardCard
            label="No spam or gimmicks"
            text="No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies."
          />
          <AwardCard
            label="The Zerodha universe"
            text="Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
          />
          <AwardCard
            label="Do better with money"
            text="With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
          />
        </div>
        <div>
          <img src={ecosystem_img} alt="" />
          <div className="flex my-2">
            <Button text="Explore our products" varient="secondary" rightIcon={true} />
            <Button text="Try kite demo" varient="secondary" rightIcon={true} />
          </div>
        </div>
      </div>
    </MainContent>
  );
}

export default Award;
