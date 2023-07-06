import React from "react";
import saurabhImage from "../_next/yoga9706.png";
import BounousImg1 from "../_next/bonus1b414.png";
import BounousImg2 from "../_next/bonus262cf.png";
import BounousImg3 from "../_next/bonus42000.png";
import BounousImg4 from "../_next/bonus34b95.png";
import WorldRecordLogo from "../_next/worldRecordb251.png";
import CountryDropDown from "./CountryDropDown";
import Modal from "./Modal";
import Popup from "reactjs-popup";

import { useNavigate } from "react-router-dom";
import Highlights from "./Highlights";
import Timing from "./Timing";

const Home = () => {
  const navigation = useNavigate();
  return (
    <div id="__next">
      <main className="__className_656221">
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            top: "16px",
            left: "16px",
            right: "16px",
            bottom: "16px",
            pointerEvents: "none",
          }}
        ></div>
        <div className="bg-[#f8f7f2] max-w-md mx-auto">
          <div
            style={{
              backgroundImage:
                "linear-gradient(181.79deg, #FFFFFF 62.63%, #BB9952 98.49%)",
            }}
          >
            <div className="bg-[#A17603] text-white text-center p-1">
              <p className="font-medium text-[24px] mt-1" id="join">
                FREE 6 DAYS
              </p>
              <p className="font-bold text-[24px] mb-2">YOGA CHALLENGE</p>
            </div>
            <div>
              <p className="text-[#A17603] font-semibold text-center pt-2 px-4 text-[24px] my-3 leading-7">
                Burn Fat, Reduce Stress &amp; <br />
                Increase Flexibility
              </p>
              <div className="flex justify-center items-center gap-2 mx-auto mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="text-[#A17603] w-[29px] h-[30px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  ></path>
                </svg>
                <p className="text-[#A17603] font-normal text-[22px]">
                  Starts 26<sup>th</sup> June
                </p>
              </div>
            </div>
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
            <p className="font-medium text-[#A17603] text-center">
              <span className="font-bold">+ </span> have joined already!
            </p>
            <div className="p-4 mt-5">
              <img
                alt="saurabh-image"
                loading="lazy"
                width={1000}
                height={1000}
                decoding="async"
                data-nimg={1}
                className="h-full w-full"
                style={{ color: "transparent" }}
                src={saurabhImage}
              />
            </div>
          </div>
          <div className="text-[#A17603] text-center p-4">
            <p className="text-[20px]">
              with <span className="font-bold">SAURABH BOTHRA</span>
            </p>
            <p className="text-[14px] font-normal">
              Govt Certified Yoga Teacher
              <br />{" "}
              <span className="text-[12px]">IIT Graduate | TEDx Speaker</span>
            </p>
            <div className="flex justify-evenly mt-4">
              <div>
                <p className="font-bold text-[20px] leading-5">10+</p>
                <p className="text-[12px]">
                  <span className="font-bold">Years</span> Experience
                </p>
              </div>
              <div>
                <p className="font-bold text-[20px] leading-5 ml-0.5">
                  10,00,000+
                </p>
                <p className="text-[12px]">Students taught</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFE7A9] text-[#A17603] p-4 ">
            <p className="font-bold text-[20px] text-center">
              “Biggest ONLINE YOGA Session”
            </p>
            <div className="flex justify-evenly items-center mt-4">
              <p className="text-[15px] font-bold pl-4 text-left">
                World Record
                <br /> Created on 21st JUNE
              </p>
              <img
                alt="world-record-logo"
                loading="lazy"
                width={150}
                height={150}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src={WorldRecordLogo}
              />
            </div>
          </div>
          <div className="px-7 py-2">
            <Modal text={"Join Now For FREE"} />
          </div>
          <Timing />
          <Highlights />
          <div className="px-7 py-2">
            <p className="text-[#A17603] font-semibold text-[14px] p-4 text-center">
              Explore the opportunities to improve your health and feel great.
            </p>
            <Modal text={"Join Now For FREE"} />
          </div>
          <div className="px-7 py-2">
            <p className="font-bold text-center text-[#A17603] text-[24px] mt-5">
              EXCLUSIVE BONUSES
            </p>
            <div className="grid grid-cols-2 gap-2 my-4">
              <div>
                <img
                  alt="bonus_images"
                  loading="lazy"
                  width={180}
                  height={140}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src={BounousImg1}
                />
              </div>
              <div>
                <img
                  alt="bonus_images"
                  loading="lazy"
                  width={180}
                  height={140}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src={BounousImg2}
                />
              </div>
              <div>
                <img
                  alt="bonus_images"
                  loading="lazy"
                  width={180}
                  height={140}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src={BounousImg3}
                />
              </div>
              <div>
                <img
                  alt="bonus_images"
                  loading="lazy"
                  width={180}
                  height={140}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src={BounousImg4}
                />
              </div>
            </div>
            <div className="mb-20">
              <a
                onClick={() => navigation("/blog")}
                style={{ cursor: "pointer" }}
                type="button"
                className="main-btn flex gap-1 items-center justify-center w-full font-semibold text-center mt-1  text-white rounded-md bg-[#A17603] px-3 py-3 text-[18px]"
              >
                Read More FREE Content
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
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
