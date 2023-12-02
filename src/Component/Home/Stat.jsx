

const Stat = (male,premiumData,female) => {

    return (
        <div className="px-4 py-16 bg-[#ffa3b3] rounded-2xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
          <div>
            <div className="flex ">
              <h6 className="mr-2 text-3xl font-bold text-deep-purple-accent-400">
                Premium Users: <span className="text-[#ff3366]">  {premiumData.length}</span>
            
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-[#ff3366] w-20 h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
       
            <p className="text-gray-700 text-lg py-2">
            Explore profiles curated by our elite members, where exceptional individuals converge for meaningful connections, setting the stage for unparalleled journeys into lasting love
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-3xl  font-bold text-deep-purple-accent-400">
               Total Male-biodatas: <span className="text-[#ff3366]">   {male.length}</span>
              
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-[#ff3366] w-20 h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
        
            <p className="text-gray-700 py-2 text-lg">
            Discover a diverse array of accomplished men seeking meaningful connections. Our male biodatas showcase a spectrum of professions, backgrounds, and personalities, each embodying a unique journey towards love and companionship.
            </p>
          </div>
          <div>
            <div className="flex">
            <h6 className="mr-2 text-3xl  font-bold text-deep-purple-accent-400">
          Female biodatas: <span className="text-[#ff3366]">   {female.length}</span>
              
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-[#ff3366] w-20 h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            
            <p className="text-gray-700 py-2 text-lg">
            Explore a collection of inspiring women, each with a distinct story and a shared desire for lasting connections. Our female biodatas offer a glimpse into the lives of accomplished individuals seeking the magic of genuine and enduring relationships
            </p>
          </div>
        </div>
      </div>
    );
};

export default Stat;