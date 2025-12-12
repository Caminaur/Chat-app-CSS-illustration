import { ChevronLeft, EllipsisVertical, ChevronRight } from "lucide-react";
import BookingOption from "../Components/BookingOption";
import useSlowScroll from "../Hooks/useSlowScroll";
import { useRef } from "react";

function Phone() {
  const scrollRef = useRef(null);
  useSlowScroll(scrollRef, 0.2);

  return (
    <div className="min-w-75 w-75 min-h-150 max-h-150 bg-gray-100 rounded-4xl shadow-inner shadow-gray-900/50 overflow-hidden border-10 border-white relative flex flex-col justify-between animate-fade-in-phone">
      <div className="w-full h-22 bg-phone-gradient relative flex rounded-b-xl shadow-black/20 shadow-lg">
        <div className="w-40 h-6 rounded-b-3xl bg-white absolute top-0 left-1/2 -translate-x-1/2"></div>
        <div className="py-13 px-2 flex gap-1 items-center justify-between w-full">
          <ChevronLeft className="text-white cursor-pointer" height={18} />
          <div className="flex items-center gap-2 flex-1">
            <img
              className="h-10 w-10 rounded-full border-2 border-white  cursor-pointer"
              src="./images/avatar.jpg"
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-white text-sm">Samuel Green</p>
              <p className="text-gray-300 text-xs opacity-70">
                Available to Walk
              </p>
            </div>
          </div>
          <EllipsisVertical
            className=" cursor-pointer"
            color="white"
            height={16}
          />
        </div>
      </div>
      {/* chat */}
      <div
        className="px-4 pt-4 flex flex-col text-xs gap-2 overflow-y-scroll"
        ref={scrollRef}
      >
        <p className="text-chat-left">
          That sounds great. I’d be happy with that.
        </p>
        <p className="text-chat-left ">
          Could you send over some pictures of your dog, please?
        </p>
        <div className="flex justify-end gap-1">
          <img
            className="h-14 rounded-lg cursor-pointer hover:brightness-110"
            src="./images/dog-image-1.jpg"
            alt=""
          />
          <img
            className="h-14 rounded-lg cursor-pointer hover:brightness-110"
            src="./images/dog-image-2.jpg"
            alt=""
          />
          <img
            className="h-14 rounded-lg cursor-pointer hover:brightness-110"
            src="./images/dog-image-3.jpg"
            alt=""
          />
        </div>
        <p className="text-chat-right">
          Here are a few pictures. She’s a happy girl!
        </p>
        <p className="text-chat-right">Can you make it? </p>
        <p className="text-chat-left">
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </p>
        <BookingOption duration="30 minute walk" price={29} />
        <BookingOption duration="1 hour walk" price={49} />
      </div>
      <div className="px-4 py-4">
        <div className="bg-white rounded-4xl flex items-center gap-2 px-4 py-2">
          <input
            className="flex-1 bg-transparent text-sm text-slate-600 placeholder:text-slate-400 outline-none border-none"
            type="text"
            placeholder="Type message..."
          />

          <button className="w-8 h-8 rounded-full bg-purple-950 flex items-center justify-center hover:bg-purple-800 cursor-pointer duration-300">
            <ChevronRight className="w-[18px] h-[18px] text-gray-100" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Phone;
