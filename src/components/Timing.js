import React from 'react'

const Timing = () => {
  return (
    <div className="p-2">
    <div className="flex justify-evenly mt-3">
      <div className="bg-[#FFF0C9] border-[1px] border-[#A17603] rounded-[5px] font-semibold p-5 text-[#A17603]">
        <div className="flex justify-center gap-2 items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-[18px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-[16px] font-semibold">Morning*</p>
        </div>
        <div className="text-[14px] font-semibold">
          <p>6:30 AM - 7:15 AM</p>
          <p>7:30 AM - 8:15 AM</p>
          <p>8:30 AM - 9:15 AM</p>
        </div>
      </div>
      <div className="bg-[#FFF0C9] border-[1px] border-[#A17603] rounded-[5px] font-semibold p-5 text-[#A17603]">
        <div className="flex justify-center gap-2 items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-[18px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-[16px] font-semibold">Evening*</p>
        </div>
        <div className="text-[14px] font-semibold">
          <p>5:00 PM - 5:45 PM</p>
          <p>6:00 PM - 6:45 PM</p>
          <p>7:00 PM - 7:45 PM</p>
        </div>
      </div>
    </div>
    <p className="text-[#A17603] font-semibold italic text-[12px] mt-1 ml-3">
      * All timings are in Indian Standard Time
    </p>
  </div>
  )
}

export default Timing