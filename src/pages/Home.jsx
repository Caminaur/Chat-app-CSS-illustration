import Phone from "../Components/Phone";
import TextBox from "../Components/TextBox";
import { BGDecorations } from "../Components/Bg-decorations";
function Home() {
  return (
    <div className="w-full h-full bg-app overflow-hidden relative">
      {/* BG Decorations */}
      <BGDecorations />
      {/* BG Decorations */}
      <div className="z-10 relative flex flex-col justify-around items-center h-full w-full p-4 md:p-8 md:flex-row md:justify-center lg:gap-18">
        <Phone />
        <TextBox />
      </div>
    </div>
  );
}

export default Home;
