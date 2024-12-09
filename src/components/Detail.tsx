import React from "react";
import Image from "next/image";





const Detail = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden bg-[#F6F7F9]">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="flex flex-col items-center py-8">
              {/* Car Section */}
              <div className="bg-[#3563E9] max-w-[492px] w-full rounded-[10px] p-6 relative">
                {/* Heading and Description */}
                <div className="text-white mb-6">
                  <h1 className="font-sans font-semibold text-4xl leading-[48px] tracking-[-3%] mb-4">
                    Sports car with the best design and acceleration
                  </h1>
                  <p className="font-medium text-base leading-[24px] tracking-[-2%]">
                    Safety and comfort while driving a <br />
                    futuristic and elegant sports car
                  </p>
                </div>

                {/* Car Image */}
                <div className="relative">
                  <Image
                    alt="Sports Car"
                    className="w-full object-cover rounded"
                    src="/car8.png"
                    width={380}
                    height={220}
                  />
                </div>
              </div>

              {/* Thumbnails Section */}
              <div className="flex gap-4 justify-center mt-6">
                <div className="w-[148px] h-[124px]">
                  <Image
                    src="/View 1.png"
                    alt="View 1"
                    width={148}
                    height={124}
                  />
                </div>
                <div className="w-[148px] h-[124px]">
                  <Image
                    src="/View 2.png"
                    alt="View 2"
                    width={148}
                    height={124}
                  />
                </div>
                <div className="w-[148px] h-[124px]">
                  <Image
                    src="/View 3.png"
                    alt="View 3"
                    width={148}
                    height={124}
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2  lg:pl-10 lg:py-6  ml-9 lg:mt-4 bg-[#FFFFFF] w-[492px] h-[508px] top-[32px] left-[916px] rounded-[10px] mt-4 pt-8">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Nissan GT - R
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">440+ Reviewer</span>
                </span>
              </div>
              <p className="leading-relaxed">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </p>
              <div className="mt-6 pb-5 border-b-2 border-gray-100 mb-5  mr-10 ml-10">
                <div className="flex justify-between text-sm text-[#90A3BF] ">
                  <div>
                    Type Car <span className="text-black">Sport</span>
                  </div>
                  <div>
                    Capacity <span className="text-black">2 Person</span>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-[#90A3BF]">
                  <div>
                    Steering <span className="text-black">Manual</span>
                  </div>
                  <div>
                    Gasoline <span className="text-black ">70L</span>
                  </div>
                </div>
              </div>

              <div className="flex ">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $80.00/ days <br />
                  <div className="text-[#90A3BF] w-[200px] h-[20px] leading-[20.16px] line-through text-base font-bold">
                    {" "}
                    $100.00
                  </div>
                </span>
                <button className="flex ml-auto text-white bg-[#3563E9] items-center w-[140px] h-[56px] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mr-5">
                  Rent Now
                </button>
                
              </div>
            </div>

            <div className="  w-[1016px] h-[452px] top-[572px] left-[392px] rounded-[10px] bg-[#FFFFFF] ml-7">
              <div className="flex gap-2">
                <h2 className="font-semibold text-xl leading-[25.2px] tracking-[-2%] text-[#1A202C] ">
                  Reviews
                </h2>
                <div className="w-[44px] h-[28px] rounded-[4px] pr-[20px] pl-[20px] gap-8px bg-[#3563E9] text-white flex items-center justify-center">
                  13
                </div>
              </div>
              <div className="w-[968px] h-[124px] top-[84px] left-[24px] ml-9 ">
                <div className="flex"><Image src="/Image.png" alt="" width={56} height={56}/>
                <h1 className="w-[128px] h-[28px] font-bold text-xl leading-[30px] text-[#1A202C] tracking-[-3%] mt-4 ">Alex Stanton</h1></div>
                <br />
                <p className="text-[#90A3BF] w-[128px] h-[20px] leading-[21px] tracking-[-2%] font-medium text-sm">CEO at Bukalapak</p>
                <span className="flex justify-end">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">21 July 2022</span>
                </span>
                <br />
                <p className="w-[896px] h-[56px] top-[152px] left-[96px] leading-[28px] tracking-[-2%] text-[#596780] font-normal text-sm">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>

              <div className="w-[968px] h-[124px] top-[84px] left-[24px] pt-20 ml-9">
              <div className="flex"><Image src="/Profill.png" alt="" width={56} height={56}/>
              <h1 className="w-[128px] h-[28px] font-bold text-xl leading-[30px] text-[#1A202C] tracking-[-3%] mt-4">Skylar Dias</h1></div>
                <br />
                <p className="text-[#90A3BF] w-[128px] h-[20px] leading-[21px] tracking-[-2%] font-medium text-sm">CEO at Amazon</p>
                <span className="flex justify-end">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">20 July 2022</span>
                </span>
                <br />
                <p className="w-[896px] h-[56px] top-[152px] left-[96px] leading-[28px] tracking-[-2%] text-[#596780] font-normal text-sm">
                We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                </p>
              </div>


            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
