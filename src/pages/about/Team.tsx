import MainContent from "../MainContent";
import nithinKamath from "../../assets/images/nithinKamath.jpg";
import { TeamProfile } from "../../Components/ui/TeamProfile";
import nikhilImg from "../../assets/images/Nikhil.jpg";
import kailashImg from "../../assets/images/Kailash.jpg";
import venuImg from "../../assets/images/Venu.jpg";
import hananImg from "../../assets/images/Hanan.jpg";
import seemaImg from "../../assets/images/Seema.jpg";
import karthikImg from "../../assets/images/karthik.jpg";
import austhinImg from "../../assets/images/Austin.jpg";

export const Team = () => {
    return (
        <MainContent>
            <div className="w-full h-auto">
                <h1 className="text-3xl font-inter text-center">People</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                    <div className="flex flex-col justify-center items-center">
                        <img className="rounded-full bg-cover w-56 mb-4" src={nithinKamath} alt="" />
                        <h2>Nithin Kamath</h2>
                        <p className="text-sm">Founder, CEO</p>
                    </div>
                    <div className="w-full flex flex-col gap-2 text-lightblack font-inter text-sm">
                        <p className="py-6">
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

                        </p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>   Playing basketball is his zen.</p>
                        <p>Connect on Homepage / TradingQnA / Twitter</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center content-center gap-20 my-10">
                <TeamProfile image={nikhilImg} profileName="Nikhil Kamath" position="Co-founder & CFO" bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />
                <TeamProfile image={kailashImg} profileName="Dr. Kailash Nadh" position="CTO" bio="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day." />
                <TeamProfile image={venuImg} profileName="Venu Madhav" position="COO" bio="Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha." />

                <TeamProfile image={hananImg} profileName="Hanan Delvi" position="COO" bio="We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time." />
                <TeamProfile image={seemaImg} profileName="Seema Patil" position="Director" bio="Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast." />
                <TeamProfile image={karthikImg} profileName="Karthik Rangappa" position="Chief of Education" bio="Karthik 'Guru' Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography." />

                <TeamProfile image={austhinImg} profileName="Austin Prakesh" position="Director Strategy" bio="Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches." />

            </div>
        </MainContent >
    )
}