import MainContent from "./MainContent";
import logo from "../assets/images/logo.svg";
import {
    LucideFacebook,
    LucideInstagram,
    LucideLinkedin,
    LucideTwitter,
    LucideYoutube,
} from "lucide-react";
import { FooterLinks } from "../Components/ui/FooterLinks";

const accountUrl = [
    {
        text: "Open demat account",
        link: "/",
    },
    {
        text: "Minor demat account",
        link: "/",
    },
    {
        text: "NRI demat account",
        link: "/",
    },
    {
        text: "Commodity",
        link: "/",
    },
    {
        text: "Dematerialisation",
        link: "/",
    },
    {
        text: "Fund transfer",
        link: "/",
    },
    {
        text: "MTF",
        link: "/",
    },
    {
        text: "Referral program",
        link: "/",
    },
];

const supportUrl = [
    {
        text: "Contact us",
        link: "/",
    },
    {
        text: "Support portal",
        link: "/",
    },
    {
        text: "How to file a complaint?",
        link: "/",
    },
    {
        text: "Status of your complaints",
        link: "/",
    },
    {
        text: "Bulletin",
        link: "/",
    },
    {
        text: "Circular",
        link: "/",
    },
    {
        text: "Z-Connect blog",
        link: "/",
    },
    {
        text: "Downloads",
        link: "/",
    },
]

const companyUrl = [
    {
        text: "About",
        link: "/",
    },
    {
        text: "Philosophy",
        link: "/",
    },
    {
        text: "Press & media",
        link: "/",
    },
    {
        text: "Careers",
        link: "/",
    },
    {
        text: "Zerodha Cares (CSR)",
        link: "/",
    },
    {
        text: "Zerodha.tech",
        link: "/",
    },
    {
        text: "Open source",
        link: "/",
    },
]
const quickLinkUrl = [
    {
        text: "Upcoming IPOs",
        link: "/",
    },
    {
        text: "Brokerage charges",
        link: "/",
    },
    {
        text: "Market holidays",
        link: "/",
    },
    {
        text: "Economic calendar",
        link: "/",
    },
    {
        text: "Calculators",
        link: "/",
    },
    {
        text: "Markets",
        link: "/",
    },
    {
        text: "Sectors",
        link: "/",
    },
]

function Footer() {
    return (
        <MainContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-6 gap-6">
                <div className="h-auto w-full text-[13px] text-lightblack space-y-2 mr-4">
                    <img className="w-28 max-w-28" src={logo} alt="" />
                    <p className="h-auto w-full">© 2010 - 2025, Zerodha Broking Ltd.</p>
                    <p className="h-auto w-full">All rights reserved.</p>
                    <div className="flex gap-4 my-2">
                        <LucideTwitter size={16} />
                        <LucideFacebook size={16} />
                        <LucideInstagram size={16} />
                        <LucideLinkedin size={16} />
                    </div>
                    <div className="h-[1px] w-full bg-gray-200"></div>
                    <div className="flex my-2">
                        <LucideYoutube size={16} />
                    </div>
                </div>
                {/* footer links  */}
                <div className="flex flex-col">
                    <h2 className="font-medium">Account</h2>
                    {accountUrl.map((input) => FooterLinks(input.text, input.link))}
                </div>
                <div className="flex flex-col">
                    <h2 className="font-medium">Support</h2>
                    {supportUrl.map((input) => FooterLinks(input.text, input.link))}
                </div>
                <div className="flex flex-col">
                    <h2 className="font-medium">Company</h2>
                    {companyUrl.map((input) => FooterLinks(input.text, input.link))}
                </div>
                <div className="flex flex-col">
                    <h2 className="font-medium">Quick Links</h2>
                    {quickLinkUrl.map((input) => FooterLinks(input.text, input.link))}
                </div>
            </div>
            <div className="h-auto w-full flex flex-col">
                <p className="font-inter text-[10px] text-gray-500 my-2">Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICFZerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p className="font-inter text-[10px] text-gray-500 my-2">Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p className="font-inter text-[10px] text-gray-500 my-2">Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                <p className="font-inter text-[10px] text-gray-500 my-2">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p className="font-inter text-[10px] text-gray-500 my-2">Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p className="font-inter text-[10px] text-gray-500 my-2">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 text-gray-500 text-[12px] my-2 mx-2">
                <p className="hover:text-blue-700 font-medium">NSE</p>
                <p className="hover:text-blue-700 font-medium">BSE</p>
                <p className="hover:text-blue-700 font-medium">MCX</p>
                <p className="hover:text-blue-700 font-medium">Terms & Conditions</p>
                <p className="hover:text-blue-700 font-medium">Policies & procedures</p>
                <p className="hover:text-blue-700 font-medium">Privacy policy</p>
                <p className="hover:text-blue-700 font-medium">Disclosure</p>
                <p className="hover:text-blue-700 font-medium">For investor's attention</p>
                <p className="hover:text-blue-700 font-medium">Investor charter</p>
            </div>
        </MainContent>
    );
}

export default Footer;
