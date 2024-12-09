import React from "react";

const HeroSection = () => {
  const heroData = [
    {
      title: "The Best Platform for Car Rental",
      description: "Ease of doing a car rental safely and reliably. Of course at a low price.",
      buttonText: "Rental Car",
      image: "/hero1.png",
    },
    {
      title: "Easy way to rent a car at a low price",
      description: "Providing cheap car rental services and safe and comfortable facilities.",
      buttonText: "Rental Car",
      image: "/hero2.png",
    },
  ];

  const PickupDropoffSection = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md mt-6">
        <div className="flex-1 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Pick-Up</h3>
          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded px-4 py-2 w-1/3">
            <h1>Location</h1>
              <option>Select your city</option>
            </select>
            <h1>Date</h1>
            <input
              type="date"
              className="border border-gray-300 rounded px-4 py-2 w-1/3"
            />

            
            <input
              type="time"
              className="border border-gray-300 rounded px-4 py-2 w-1/3"
            />
          </div>
        </div>
        <div className="flex justify-center my-4 lg:my-0">
          <button className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600">
            <i className="transform rotate-90">↔️</i>
          </button>
        </div>
        <div className="flex-1 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Drop-Off</h3>
          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded px-4 py-2 w-1/3">
              <option>Select your city</option>
            </select>
            <h1>LOcation</h1>
            <input
              type="date"
              className="border border-gray-300 rounded px-4 py-2 w-1/3"
            />
            <input
              type="time"
              className="border border-gray-300 rounded px-4 py-2 w-1/3"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-blue-100">
        {heroData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-blue-500 text-white rounded-lg p-6 shadow-lg"
          >
            <div className="lg:w-1/2">
              <h2 className=" font-semibold  leading-[48px] tracking-[-3%] text-3xl mb-4  w-[272px] h-[96px]">{item.title}</h2>
              <p className="mb-6 text-base  leading-[24px] tracking-[-2%] font-medium">{item.description}</p>
              <button className="text-white bg-[#3563E9] font-semibold py-2 px-4 rounded hover:bg-blue-100  leading-[24px] tracking-[-2%] text-base">
                {item.buttonText}
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
              <img src={item.image} alt={item.title} className="w-3/4 h-auto" />
            </div>
          </div>
        ))}
      </div>
      <PickupDropoffSection />
    </>
  );
};

export default HeroSection;
