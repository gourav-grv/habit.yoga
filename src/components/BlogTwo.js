import React from "react";
import Img from "../_next/blog_main_thumb_22101.png";
import Modal from "./Modal";

function BlogTwo() {
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
        <div className="max-w-md mx-auto px-3 py-3 sm:px-3 lg:px-3 lg: md:">
          <a href="../blog">
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
          <div className="flex flex-col mx-auto max-w-[335px]">
            <img
              alt="Blog Image"
              loading="lazy"
              width={500}
              height={500}
              decoding="async"
              data-nimg={1}
              className="w-[335px] h-[204px]"
              src={Img}
              style={{ color: "transparent" }}
            />
            <h1 className="font-bold text-[24px] my-5">
              Yoga for Insomnia: A Holistic Approach to Sleeplessness
            </h1>
            <section className="bg-[#FFF0C9] p-3 w-full">
              <div className="flex flex-col justify-center items-center mx-auto mt-3">
                <div className="flex gap-4">
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
                <div className="w-full mt-2">
                <Modal text={"Join FREE WhatsApp Group"}/>
                </div>
              </div>
              <p className="font-medium text-[16px] text-center text-[#A17603] mt-3">
                <span className="font-bold">+</span> have joined already!
              </p>
            </section>
            <h2 className="text-[20px] font-semibold mt-8 ">
              Understanding Insomnia: Definition, Symptoms, and Causes
            </h2>
            <p className="text-[16px] font-medium mt-2">
              Insomnia is a prevalent sleep disorder characterized by difficulty
              falling asleep, staying asleep, or both. It can be either
              transient (acute) or chronic, depending on its duration. Chronic
              insomnia occurs at least three nights a week for three months or
              more, while acute insomnia can last from a single night up to a
              few weeks.
            </p>
            <p className="text-[16px] font-medium mt-2">
              The causes of insomnia can range from stress related to
              significant life events, environmental factors, changes in sleep
              schedule, to genetic predisposition. Secondary insomnia may be due
              to underlying health conditions, medication side effects, or
              substance use.
            </p>
            <h2 className="text-[20px] font-semibold mt-8 ">
              Recognizing Insomnia Symptoms and Risk Factors
            </h2>
            <p className="text-[16px] font-medium mt-2">
              Insomnia symptoms include daytime sleepiness, fatigue,
              irritability, and issues with concentration or memory. Certain
              demographics and lifestyle factors increase the risk of developing
              insomnia. These include being a woman, older age, certain ethnic
              backgrounds, long-term illness, mental health issues, and working
              night or rotating shifts.
            </p>
            <h2 className="text-[20px] font-semibold mt-8 ">
              Potential Consequences of Insomnia
            </h2>
            <p className="text-[16px] font-medium mt-2">
              Insufficient sleep due to insomnia can lead to various health
              issues, such as higher risk of hypertension, obesity, depression,
              increased fall risk in older women, and cognitive difficulties. It
              can also result in anxiety, irritability, and slower reaction
              times, increasing the likelihood of accidents.
            </p>
            <h2 className="text-[20px] font-semibold mt-8 ">
              Exploring Treatment Options for Insomnia
            </h2>
            <p className="text-[16px] font-medium mt-2">
              While acute insomnia may not always require treatment, chronic
              insomnia often needs intervention. Treatment strategies may
              include short-term use of sleeping pills, addressing underlying
              causes of sleep disturbance, and behavioral therapy to encourage
              good sleep hygiene.
            </p>
            <h2 className="text-[20px] font-semibold mt-8 ">
              Preventing Insomnia through Lifestyle Changes
            </h2>
            <p className="text-[16px] font-medium mt-2">
              Prevention strategies for insomnia include maintaining a regular
              sleep schedule, avoiding electronic devices before bed, avoiding
              stimulants like caffeine and nicotine, and regular exercise.
              Ensuring a comfortable sleep environment and adhering to a
              relaxing pre-sleep routine can also be beneficial.
            </p>
            <h2 className="text-[20px] font-semibold mt-8 ">
              Yoga for Insomnia: A Natural Way to Enhance Sleep
            </h2>
            <p className="text-[16px] font-medium mt-2">
              Yoga, a centuries-old practice, has been found effective in
              addressing various health issues, including insomnia. Certain yoga
              poses, breathing techniques, and meditation can help promote
              relaxation, reducing stress and anxiety that often contribute to
              sleeplessness.
            </p>
            <p className="text-[16px] font-medium mt-2">
              Regular yoga practice can help balance the body's circadian
              rhythms, aiding in the regulation of sleep and wake cycles.
              Specific yoga postures can also help ease physical tension and
              promote a state of calm, preparing the body and mind for sleep.
            </p>
            <p className="text-[16px] font-medium mt-2">
              Practicing yoga for insomnia provides a natural,
              non-pharmacological approach to enhancing sleep quality. However,
              it's important to remember that while yoga can support sleep
              health, it should complement, not replace, conventional
              treatments. Always consult a healthcare professional for
              personalized advice on managing insomnia.
            </p>
            <h2 className="text-[20px] font-semibold mt-8 ">
              Final Thoughts: A Holistic Approach to Insomnia
            </h2>
            <p className="text-[16px] font-medium mt-2">
              While there's no absolute cure for insomnia, understanding how to
              manage and prevent it is crucial. Combining yoga, healthy sleep
              habits, and appropriate medical treatments can provide an
              effective strategy for managing insomnia. Remember, if you're
              struggling with persistent insomnia, it's crucial to seek
              professional medical advice.
            </p>
            <section className="bg-[#FFF0C9] p-3 w-full mt-3">
              <div className="flex flex-col justify-center items-center mx-auto mt-3">
                <div className="flex gap-4">
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
                <div className="w-full mt-2">
                <Modal text={"Join FREE WhatsApp Group"}/>
                </div>
              </div>
              <p className="font-medium text-[16px] text-center text-[#A17603] mt-3">
                <span className="font-bold">+</span> have joined already!
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogTwo;
