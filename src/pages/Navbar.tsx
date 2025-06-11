import { LucideAlignJustify } from "lucide-react"
import logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom"

export const Navbar = () => {
       return(
        <div className="w-full h-12 border border-b-gray-200 ">
            {/* navbar code  */}
            <div className="w-7/12 max-w-[1080px] h-full mx-auto flex justify-between items-center">
                <img className="w-24 h-3" src={logo} alt="" /> 
                <ul className="flex font-inter text-gray-500 text-[12px] gap-6">
                    <Link to={"/open-account"} className="cursor-pointer">Signup</ Link > 
                    <Link to={"/about"} className="cursor-pointer">About</Link>
                    <Link to={"/product"} className="cursor-pointer">Product</Link>
                    <Link to={"/pricing"} className="cursor-pointer">Pricing</Link>
                    <Link to={"/support"} className="cursor-pointer">Support</Link>
                    <li className="mx-auto">
                        <LucideAlignJustify className="text-black" size={15} />
                    </li>
                </ul>
            </div>
        </div>
    )
}