import React from "react";

export default function ThankYou() {
  return (
    <div className="h-1/2 bg-blue-100">
      <div className="flex flex-col items-center justify-center bg-white w-10/12 rounded-md mx-auto py-10 px-3">
        <img
          className="w-14"
          src="assets/images/icon-thank-you.svg"
          alt="icon thank you"
        />
        <h1 className="text-blue-950 font-semibold text-2xl my-4">
          Thank You!
        </h1>
        <p className="text-center text-gray-400">
          Thanks For confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at
          <a href="mailto:support@loremgaming.com.">support@loremgaming.com.</a>
        </p>
      </div>
    </div>
  );
}
