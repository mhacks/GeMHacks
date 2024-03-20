import Accordion from "./Accordian"

export default function FAQ() {
    return (
        <div className="mt-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-syncopate font-bold">FAQS</h1>
            <Accordion className="m-4" question="What is Google x MHacks?" answer="Placeholder." />
            <Accordion className="m-4" question="How Many Can Be on a Team?" answer="Hackers may form teams of up to 4 people. Teams can be formed before or during the event." />
            <Accordion className="m-4" question="What is MHacks x Google?" answer="Placeholder." />
            <Accordion className="m-4" question="What is MHacks x Google?" answer="Placeholder." />
            <button className="flex cursor-pointer items-center mt-20 mb-20 rounded-md border-2 border-black bg-blue-400 px-10 py-3 font-bold font-archivo shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">Apply Now</button>
      </div>
    )
}