import { PlusCircleIcon } from "lucide-react"
import { TicketModel } from "../../Components/ui/TicketModel"

export const CreateTicket = () => {
    return (
        <div className="w-full h-auto flex gap-8">
            <div className="w-full h-auto">
                <TicketModel
                    icon={<PlusCircleIcon />}
                    heading="Account Opening"
                    listItems={["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]}
                />
                <TicketModel
                    icon={<PlusCircleIcon />}
                    heading="Account Opening"
                    listItems={["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]}
                />
                <TicketModel
                    icon={<PlusCircleIcon />}
                    heading="Account Opening"
                    listItems={["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]}
                />
                <TicketModel
                    icon={<PlusCircleIcon />}
                    heading="Account Opening"
                    listItems={["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]}
                />
            </div>
            <div className="w-[500px] h-auto flex flex-col">
                <div className="w-full h-auto my-6 relative bg-red-100 py-6">
                    <div className="absolute top-0 left-0 w-3 h-full bg-red-400"></div>
                    <div className="w-full h-auto mx-6 font-inter">
                        <ol className="w-full h-auto list-disc list-inside flex flex-col underline text-blue-500 space-y-2">
                            <li className="w-full h-auto">
                                <a href="#" className="w-full h-auto">
                                    Exclusion of F&O contracts on 8 securities from August 29, 2025
                                </a>
                            </li>
                            <li className="w-full h-auto">
                                <a href="#" className="w-full h-auto">
                                    Revision in expiry day of Index and Stock derivatives contracts
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}