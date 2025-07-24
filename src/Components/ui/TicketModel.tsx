import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

interface TicketProps {
    icon: ReactNode;
    heading: string;
    listItems: string[];
}
export const TicketModel = ({ icon, heading, listItems }: TicketProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-auto my-6">
            <div className="w-full h-auto border py-4 px-2 font-inter hover:scale-105 transition-all duration-200">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center">
                    <div
                        className="flex items-center">
                        <span className="text-blue-500 mx-2">
                            {icon}
                        </span>
                        <h1 className="text-lg mx-2">{heading}</h1>
                    </div>
                    {
                        isOpen ? (<ChevronDownIcon className="text-blue-500" />) : (<ChevronUpIcon className="text-blue-500" />)
                    }
                </div>
            </div>
            {
                isOpen && <div className="w-full h-auto border font-inter text-blue-500 transition-all duration-200">
                    <div className="w-full h-auto p-4">
                        <ol className="list-disc list-inside flex flex-col space-y-2">
                            {
                                listItems.map((items) => (
                                    <li className="py-2 hover:text-black transition-all duration-200"> 
                                    <a href="#">{items}</a>                                    
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            }
        </div>
    )
}