import React, { useState } from "react";
import {useNavigate} from  'react-router-dom'

const CustomButton = ({url, text}) => {

    const navigateTion = useNavigate()
  return (
    <div>
      <button
      onClick={() => navigateTion(url)}
        type="button"
        class="main-btn flex gap-1 items-center justify-center w-full font-semibold text-center mt-6 text-white rounded-md bg-[#A17603] px-3 py-3 text-[18px]"
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="w-[21px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CustomButton;
