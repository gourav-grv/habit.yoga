import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigation = useNavigate()
  

  return (
    <footer className="max-w-md mx-auto relative top-[1em]">
      <div className="p-3 bg-[#A17603] text-white text-[9px] font-semibold">
        <div className="flex justify-between mt-3">
          <div style={{cursor: "pointer"}} onClick={() => navigation('/')}>
            <a >
              <p className="whitespace-nowrap ">Home</p>
            </a>
          </div>
          <div style={{cursor: "pointer"}} onClick={() => navigation('/privacypolicy')}>
            <a >
              <p className="whitespace-nowrap ">Privacy Policy</p>
            </a>
          </div>
          <div style={{cursor: "pointer"}} onClick={() => navigation('/termscondition')}>
            <a >
              <p className="whitespace-nowrap ">Terms &amp; Conditions</p>
            </a>
          </div>
          <div style={{cursor: "pointer"}} onClick={() => navigation('/contactus')}>
            <a >
              <p className="whitespace-nowrap ">Contact Us</p>
            </a>
          </div>
        </div>
        <hr className="border-white mx-auto mt-3" />
        <p className="my-4 text-center text-[10px]">
          Habuild Healthtech Pvt. Ltd. © {/* */}2023{/* */} | All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
