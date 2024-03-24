import Accordion from "./Accordian"

export default function FAQ({id}) {
    return (
        <div className="mt-10 flex flex-col items-center justify-center" id={id}>
            <h1 className="text-4xl font-syncopate font-bold">FAQS</h1>
            <Accordion className="m-4" question="Who can apply?" answer="Anyone over the age of 18 is welcome to apply. We particularly encourage people from underrepresented groups in Computer Science!" />
            <Accordion className="m-4" question="Where will this event take place?" answer="Friday’s workshops will be held on Central Campus. The exact building will be announced later. Hacking on Saturday and Sunday will be at the Google Ann Arbor office at 2300 Traverwood Dr, Ann Arbor, MI 48105." />
            <Accordion className="m-4" question="What will be provided?" answer="Food will be provided! Please note there will not be sleeping arrangements." />
            <Accordion className="m-4" question="When are applications due?" answer="Applications are due on March 29th at 11:59pm. However, applications are reviewed on a rolling basis so our deadline may close earlier as slots fill up." />
            <Accordion className="m-4" question="How do teams work?" answer="You're welcome to form teams of up to four people, but acceptances will be on an individual basis." />
            <Accordion className="m-4" question="Do I need experience to participate?" answer="While prior experience using AI models in project will help, prior experience is not required! For this event, we encourage anyone who’s interested to apply." />
            <Accordion className="m-4" question="What if I still have additional questions??" answer="Send us an email at help@mhacks.org and we'll get back to you shortly!" />
            <button onClick={() => window.location.href = "https://tally.so/r/w2eB7j"} className="flex cursor-pointer items-center mt-20 mb-20 rounded-md border-2 border-black bg-blue-400 px-10 py-3 font-bold font-archivo shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">Apply Now</button>
      </div>
    )
}