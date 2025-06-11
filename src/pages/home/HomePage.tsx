import { Navbar } from "../Navbar"
import OpenAccount from "../OpenAccount"
import Award from "./Award"
import Education from "./Education"
import Hero from "./Hero"
import Pricing from "./Pricing"
import Stat from "./Stats"

export const HomePage = () => {
    return(
        <>
        <Navbar />
        <Hero />
        <Award />
        <Stat />
        <Pricing />
        <Education />
        <OpenAccount />
        </>
    )
}
