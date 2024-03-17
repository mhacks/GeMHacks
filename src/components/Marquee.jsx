export default function Marquee({ items }) {
    // Duplicate the items array
    const allItems = [...items, ...items, ...items];
  
    return (
      <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-black bg-white font-bold">
        <div className="animate-marquee whitespace-nowrap py-8">
          {allItems.map((item, index) => {
            return (
              <span key={index} className="mx-20 font-syncopate text-2xl">
                {item}
              </span>
            );
          })}
        </div>
  
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-8">
          {allItems.map((item, index) => {
            return (
              <span key={index} className="mx-20 font-syncopate text-2xl">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    );
  }