import roaaImg from "../../assets/roaa.png";

export default function ThisIsMeSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row reverse-portfiolio-hero min-h-screen md:h-screen w-full" style={{ overflow: "visible" }}>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-start justify-center px-8 md:px-16 py-12 md:py-0">
        <h3 className="px-3 mb-5 bg-[#F4F0EB] rounded-2xl">AVAILABLE FOR FREELANCE</h3>
        <h2 className="montserrat-700 text-[#000000] text-4xl md:text-7xl">Hi, I'm </h2>
        <h2 className="montserrat-700 text-[#761C4B] text-4xl md:text-7xl">Roaa Tariq</h2>
        <p className="text-base md:text-lg mt-4 leading-relaxed">
          A Graphic Design Student at Badr University in Cairo. I'm Very
          Passionate about branding, posters, UI/UX, and social media design, and
          i would love to turn your idea into A reality
        </p>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex overflow-visible">
        <img src={roaaImg} alt="Roaa" className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
