export default function HeroSection() {
  return (
    <div id="portfolio" className="portfiolio-hero relative h-screen w-full pt-16">
      <div className=" absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        {Array.from({ length: 7 }).map((_, i) => {
          const isCenter = i === 3;
          const margin = i < 3 ? "-mb-10 md:-mb-15" : "-mt-10 md:-mt-15";
          return (
            <h2
              key={i}
              className={`aboreto-regular text-5xl md:text-9xl ${isCenter ? "text-[#0F3561]" : "opacity-20 text-[#0F3561]"} ${margin} ${isCenter ? "z-10" : ""}`}
            >
              PORTFOLIO
            </h2>
          );
        })}
      </div>
    </div>
  );
}
