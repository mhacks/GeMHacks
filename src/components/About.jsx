
export default function About({id}) {
    return (
        <div id={id} >
            <h1 className="text-4xl font-syncopate font-bold pt-10 px-20">About</h1>
            <h1 className="text-4xl font-syncopate font-bold px-20">Google x MHacks</h1>
            <p className="px-20 py-10 font-medium font-inter">
            MHacks is the University of Michigan's premier student-run hackathon. <span className="font-bold">This April 12th to 14th</span>, 
            we are collaborating with Google to host Google x MHacks, the Google AI Hackathon, at the Google Ann Arbor Office.
            A few workshops, led by Google engineers and PMs, will be hosted on Friday the 12th, 
            while the hackathon will take place Saturday and Sunday. 
            <br/> <br/>
            Participants will get <span className="font-bold">exclusive early-access</span> to <span className="font-bold">
                recently announced Gemini 1.5 API</span> along with a host of other Google AI Studio tools. 
            Assorted tech talks and workshops accompany a few speakers you don't want to miss. Of course, hackathon swag will be plentiful, 
            along with networking opportunities with Google employees and other students. Teams are of up to four, but acceptances are individual. 
            The prize pool is as follows: first prize is $<span className="font-bold">3000</span>, 
            second prize is $<span className="font-bold">1500</span>, and third prize is $<span className="font-bold">500</span>. 
            <br/> <br/>

            Food is provided, but there will be no overnight accommodations. 
            Please apply by <span className="font-bold">March 29th, 11:59pm</span>; 
            note that we will be reviewing applications on a <span className="font-bold">rolling basis</span> so 
            our deadline may close earlier as slots fill up.
            </p>
      </div>
    )
}