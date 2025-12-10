import React from "react";

function Home() {
  return (
    <div className="w-full h-full bg-app overflow-hidden relative">
      <div
        className="bg-app-gradient rounded-b-[100%] min-w-80 h-180 md:rounded-b-full w-2/3 md:w-120 lg:h-6/9 absolute -top-50 lg:top-0 -left-30 z-5
      "
      ></div>
      <div
        className="bg-2 opacity-30 rounded-t-[100%] min-w-80 h-180 md:rounded-t-full w-2/3 md:w-120 lg:h-6/9 absolute -bottom-50 lg:bottom-0 -right-30 z-5
      "
      ></div>

      <div className="z-10 relative flex flex-col justify-between items-center h-full w-full p-8 md:flex-row md:justify-center">
        <div className="min-w-70 w-70 min-h-150 bg-gray-100 rounded-4xl shadow-inner shadow-gray-900/50 overflow-hidden border-10 border-white relative flex flex-col justify-between">
          {/* top menu */}
          <div className="w-full h-20 bg-phone-gradient relative flex rounded-b-xl shadow-black/20 shadow-lg">
            <div className="w-40 h-8 rounded-b-3xl bg-white absolute top-0 left-1/2 -translate-x-1/2"></div>
            <div className="py-9 px-6 flex gap-2">
              <p>{"<"}</p>
              <img
                className="h-10 w-10 rounded-full border-2 border-white"
                src="./images/avatar.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-white text-sm">Samuel Green</p>
                <p className="text-gray-300 text-xs opacity-70">
                  Available to Walk
                </p>
              </div>
              <p>█</p>
            </div>
          </div>
          {/* chat */}
          <div className="px-4">
            <p>That sounds great. I’d be happy with that.</p>
            <p>Could you send over some pictures of your dog, please?</p>
            <div className="flex justify-end gap-1">
              <img
                className="h-14 rounded-lg"
                src="./images/dog-image-1.jpg"
                alt=""
              />
              <img
                className="h-14 rounded-lg"
                src="./images/dog-image-2.jpg"
                alt=""
              />
              <img
                className="h-14 rounded-lg"
                src="./images/dog-image-3.jpg"
                alt=""
              />
            </div>
            <p>Here are a few pictures.</p>
            <p>
              She’s a happy girl! Can you make it? She looks so happy! The time
              we discussed works. How long shall I take her out for?
            </p>
            {/* componente de pago */}
            <div>
              <p>30 minute walk</p>
              <p> $29</p>
            </div>
            <div>
              <p>1 hour walk</p>
              <p> $49</p>
            </div>
          </div>
          <div className="w-full p-4">
            <input className="p-2" type="text" placeholder="Type message..." />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 p-8 max-w-140 lg:items-start">
          <p className="text-heading-main text-4xl font-semibold lg:text-left">
            Simple booking
          </p>
          <p className="text-subheading text-center lg:text-left">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
