import React from "react";

export default function Header() {
  return (
    <div className="bg-[url('assets/images/bg-sidebar-mobile.svg')] h-1/5 flex items-start pt-5 justify-center">
      <button className="text-white text-xl flex items-center justify-center mr-3">
        <span className="border border-white rounded-full w-8">1</span>
      </button>
      <button className="text-white text-xl flex items-center justify-center mr-3">
        <span className="border border-white rounded-full px-2 w-8">2</span>
      </button>
      <button className="text-white text-xl flex items-center justify-center mr-3">
        <span className="border border-white rounded-full px-2 w-8">3</span>
      </button>
      <button className="text-white text-xl flex items-center justify-center mr-3">
        <span className="border border-white rounded-full px-2 w-8">4</span>
      </button>
    </div>
  );
}
