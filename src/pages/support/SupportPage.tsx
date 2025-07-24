import MainContent from "../MainContent";
import { CreateTicket } from "./CreateTicket";
import { SupportHero } from "./Hero";

export default function SupportPage() {
  return (
    <div>
      <SupportHero />
      <MainContent>
        <div>
          <CreateTicket />
        </div>
      </MainContent>
    </div>
  )
}
