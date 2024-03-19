export default function Prizes() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className='mb-6 text-4xl font-syncopate font-bold'>PRIZES</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">

            <div class="p-10 w-64 h-64 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
                <div class="flex flex-col items-center justify-center h-full">
                    <h1 class="text-xl font-syncopate font-bold text-black">1st Place</h1>
                    <h1 class="text-4xl font-syncopate font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animated-gradient">$3000</h1>
                </div>
            </div>
            
            <div class="p-10 w-64 h-64 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
                <div class="flex flex-col items-center justify-center h-full">
                    <h1 class="text-xl font-syncopate font-bold text-black">2nd Place</h1>
                    <h1 class="text-4xl font-syncopate font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animated-gradient">$1000</h1>
                </div>
            </div>

            <div class="p-10 w-64 h-64 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
                <div class="flex flex-col items-center justify-center h-full">
                    <h1 class="text-xl font-syncopate font-bold text-black">3rd Place</h1>
                    <h1 class="text-4xl font-syncopate font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animated-gradient">$500</h1>
                </div>
            </div>
            
            </div>
        
        </div>
    )
}