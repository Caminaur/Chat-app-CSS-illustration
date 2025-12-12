import { Circle } from "lucide-react";
import React from "react";

function BookingOption({ duration, price }) {
  return (
    <div className="flex items-center max-w-3/4 p-3 bg-phone-gradient rounded-t-2xl rounded-br-2xl rounded-bl-md text-white gap-2 cursor-pointer hover:brightness-110 duration-300 animate-pulse-subtle">
      <Circle height={20} className="text-gray-100" />
      <p className="flex-1 text-md text-gray-100">{duration}</p>
      <p className="text-lg font-bold"> ${price}</p>
    </div>
  );
}

export default BookingOption;
