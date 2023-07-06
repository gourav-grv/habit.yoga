import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CountryDropDown from "./CountryDropDown";

export default function Modal({text}) {
  return (
    <div>
      <Popup
        trigger={
          <button
            type="button"
            className="main-btn flex gap-1 items-center justify-center w-full font-semibold text-center mt-2 text-white rounded-md bg-[#A17603] px-3 py-3 text-[18px]"
          >
            {text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-[21px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button
              onClick={() => close()}
              class="float-right font-semibold text-[1em] border border-[#a17603] rounded bg-[#a17603] mb-2 text-white hover:bg-[#fff] hover:text-black px-[0.4em] py-[0.2em]"
            >
              X
            </button>
            <h3 class="text-center text-[1em] mt-2 font-semibold text-[#a17603] max-[640px]:mt-0">
              Register
            </h3>
            <div className="p-5">
              <form className action="#" method="POST">
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Please Enter Your Name"
                    maxLength={100}
                    required
                    className="border-[#A17603] w-full rounded-[11px] border-[1px] px-4 py-3 placeholder-[#A17603] focus:ring-2 focus:ring-inset focus:ring-[#A17603] text-[#A17603] "
                  />
                </div>
                <div>
                  <div className="p-2 PhoneInput">
                    <div className="PhoneInputCountry">
                      <CountryDropDown />
                      <div aria-hidden="true" className="PhoneInputCountryIcon">
                        <svg
                          className="PhoneInputCountryIconImg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 75 50"
                        >
                          <title />
                          <g
                            className="PhoneInputInternationalIconGlobe"
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                          >
                            <path
                              strokeLinecap="round"
                              d="M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"
                            />
                            <path d="M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"></path>
                            <line x1={26} y1={25} x2={74} y2={25} />
                            <line x1={50} y1={1} x2={50} y2={49} />
                            <path
                              strokeLinecap="round"
                              d="M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"
                            ></path>
                            <path
                              strokeLinecap="round"
                              d="M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"
                            ></path>
                          </g>
                          <path
                            className="PhoneInputInternationalIconPhone"
                            stroke="none"
                            fill="currentColor"
                            d="M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"
                          ></path>
                        </svg>
                      </div>
                      <div className="PhoneInputCountrySelectArrow" />
                    </div>
                    <input
                      type="tel"
                      autoComplete="tel"
                      placeholder="WhatsApp Number"
                      required
                      className="PhoneInputInput"
                    />
                  </div>
                </div>
                <p className=" text-[#A17603] text-right text-[12px] font-normal">
                  * Please Enter Whats App Number Only
                </p>
                <div>
                  <button
                    type="button"
                    className="main-btn flex gap-1 items-center justify-center w-full font-semibold text-center mt-6 text-white rounded-md bg-[#A17603] px-3 py-3 text-[18px]"
                  >
                    Join Now For FREE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-[21px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div>

            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
