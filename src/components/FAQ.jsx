import Accordion from "./Accordian"

export default function FAQ() {
    return (
        <div className="mt-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-syncopate font-bold">FAQS</h1>
            <Accordion className="m-4" question="Who can apply?" answer="Anyone that is 18+ is welcome to apply!" />
            <Accordion className="m-4" question="When will this event take place?" answer="The event will be held on April 12th - 14th. Workshops will be held on Friday (4/12) and hacking will be done on Saturday and Sunday." />
            <Accordion className="m-4" question="Where will this event take place?" answer="Friday’s workshops will be held on Central Campus. The exact building will be announced later. Hacking on Saturday and Sunday will be at the Google Ann Arbor office at 2300 Traverwood Dr, Ann Arbor, MI 48105." />
            <Accordion className="m-4" question="What will be provided?" answer="Food will be provided! Please note there will not be sleeping arrangements." />
            <Accordion className="m-4" question="When are applications due?" answer="Applications are due on March 29th at 11:59pm. However, applications are reviewed on a rolling basis so our deadline may close earlier as slots fill up." />
            <Accordion className="m-4" question="How do teams work?" answer="Teams can be up to 4 members, but acceptances are individual." />
            <Accordion className="m-4" question="Do I need experience to participate?" answer="While prior experience using AI models in project will help, prior experience is not required! At MHacks 16 last fall, almost half of all hackers had never attended a hackathon before. For this event, we encourage anyone who’s interested to apply." />
            <Accordion className="m-4" question="What if I still have additional questions??" answer="Send us an email at help@mhacks.org and we'll get back to you shortly :)." />
      </div>
    )
}