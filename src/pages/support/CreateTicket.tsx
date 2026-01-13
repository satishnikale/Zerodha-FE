import {
  LucideCircle,
  LucideCircleEqual,
  LucideIndianRupee,
  LucideLifeBuoy,
  LucideUserRound,
  PlusCircleIcon,
} from "lucide-react";
import { TicketModel } from "../../Components/ui/TicketModel";

export const CreateTicket = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row gap-8 my-10">
      <div className="w-full h-auto">
        <TicketModel
          icon={<PlusCircleIcon size={20} />}
          heading="Account Opening"
          listItems={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
          ]}
        />
        <TicketModel
          icon={<LucideUserRound size={20} />}
          heading="Your Zerodha Account"
          listItems={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
          ]}
        />
        <TicketModel
          icon={<LucideCircleEqual size={20} />}
          heading="Kite"
          listItems={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
          ]}
        />
        <TicketModel
          icon={<LucideIndianRupee size={20} />}
          heading="Funds"
          listItems={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
          ]}
        />
        <TicketModel
          icon={<LucideLifeBuoy size={20} />}
          heading="Console"
          listItems={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
          ]}
        />
        <TicketModel
          icon={<LucideCircle size={20} />}
          heading="Coin"
          listItems={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
          ]}
        />
      </div>
      <div className="w-[96] lg:w-[500px] h-auto flex flex-col gap-2">
        <div className="w-full h-auto my-6 relative bg-red-100 py-6">
          <div className="absolute top-0 left-0 w-3 h-full bg-red-400"></div>
          <div className="w-full h-auto px-6 font-inter">
            <ol className="w-full h-auto list-disc list-inside flex flex-col underline text-blue-500 space-y-2">
              <li className="w-full h-auto">
                <a href="#" className="w-full h-auto text-center">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
              <li className="w-full h-auto">
                <a href="#" className="w-full h-auto text-center">
                  Revision in expiry day of Index and Stock derivatives
                  contracts
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <div className="w-full h-auto text-md font-inter font-medium border px-4 py-3 bg-gray-100">
            Quick Links
          </div>
          <ol className="list-decimal list-inside text-blue-500 font-inter">
            {[
              "Track account opening",
              "Track segment activation",
              "Intraday margins",
              "Kite user manual",
            ].map((item, index) => (
              <li className="w-full h-auto border px-4 py-3" key={index}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
