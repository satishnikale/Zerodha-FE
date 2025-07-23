import { LucideAlignJustify } from "lucide-react"
import logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="w-full h-16 border border-b-gray-200 ">
            {/* navbar code  */}
            <div className="w-11/12 lg:w-9/12 max-w-[1080px] h-full mx-auto flex justify-between items-center">
                <img className="w-32 h-4" src={logo} alt="" />
                <div className="flex items-center gap-8">
                    <ul className="hidden lg:flex font-inter text-gray-500 text-md gap-8">
                        <Link to={"/open-account"} className="cursor-pointer">Signup</ Link >
                        <Link to={"/about"} className="cursor-pointer">About</Link>
                        <Link to={"/product"} className="cursor-pointer">Product</Link>
                        <Link to={"/pricing"} className="cursor-pointer">Pricing</Link>
                        <Link to={"/support"} className="cursor-pointer">Support</Link>
                    </ul>
                    <div className="mx-auto">
                        <LucideAlignJustify className="text-black" size={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}