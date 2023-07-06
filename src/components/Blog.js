import React from "react";
import Img1 from "../_next/blog_thumb_134ab.png";
import Img2 from "../_next/blog_thumb_2aa67.png";
import Img3 from "../_next/blog_thumb_3e90a.png";
function Blog() {
  return (
    <div id="__next">
      <main className="__className_656221">
        <div></div>
        <div>
          <div>
            <div className="max-w-md mx-auto px-3 py-3 sm:px-3 lg:px-3 lg: md:">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-black w-[3em] my-3 ml-[1em]"
                >
                  <g clipPath="url(#clip0_9_2121)">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9_2121">
                      <path d="M0 0h20v20H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <h1 className="text-[24px] font-bold text-[#A17603] text-center">
                RESOURCES
              </h1>
              <div className="grid grid-cols-2">
                <div className="flex flex-col items-center p-2">
                  <a href="/blogone">
                    <img
                      alt="Blog_thumbnail"
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      className="w-[147px] h-[173px]"
                      src={Img1}
                      style={{ color: "transparent" }}
                    />
                    <div className=" max-w-[147px]">
                      <h1 className="text-[#A17603] text-[16px] font-bold my-1">
                        Yoga for Diabetes
                      </h1>
                      <p className="text-[14px] text-[#A17603] mt-1">
                        Diabetes, otherwise known as diabetes...read more
                      </p>
                    </div>
                  </a>
                </div>
                <div className="flex flex-col items-center p-2">
                  <a href="/blogtwo">
                    <img
                      alt="Blog_thumbnail"
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      className="w-[147px] h-[173px]"
                      src={Img2}
                      style={{ color: "transparent" }}
                    />
                    <div className=" max-w-[147px]">
                      <h1 className="text-[#A17603] text-[16px] font-bold my-1">
                        Yoga for Insomnia
                      </h1>
                      <p className="text-[14px] text-[#A17603] mt-1">
                        Insomnia is a prevalent sleep disorder...read more
                      </p>
                    </div>
                  </a>
                </div>
                <div className="flex flex-col items-center p-2">
                  <a href="/blogthree">
                    <img
                      alt="Blog_thumbnail"
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      className="w-[147px] h-[173px]"
                      src={Img3}
                      style={{ color: "transparent" }}
                    />
                    <div className=" max-w-[147px]">
                      <h1 className="text-[#A17603] text-[16px] font-bold my-1">
                        Understanding Sciatica
                      </h1>
                      <p className="text-[14px] text-[#A17603] mt-1">
                        Sciatica, a term often used to...read more
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
