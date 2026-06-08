import poster1 from "../../assets/work/poster_desing/ad 2 1.png";
import poster2 from "../../assets/work/poster_desing/2 2.png";
import poster3 from "../../assets/work/poster_desing/Magazine 1 1.png";
import poster4 from "../../assets/work/poster_desing/nag 1.png";
import blender1 from "../../assets/work/blender_models/pond png 1.png";
import blender2 from "../../assets/work/blender_models/qyuiz 1.png";
import logo1 from "../../assets/work/logo_rebranding/00000-02 1.png";
import logo2 from "../../assets/work/logo_rebranding/00000-03 1.png";
import logo3 from "../../assets/work/logo_rebranding/00000-05 1.png";
import mag1 from "../../assets/work/magazines/2 1.png";
import mag2 from "../../assets/work/magazines/3 1.png";
import mag3 from "../../assets/work/magazines/Group 10.png";

const categories = [
  {
    name: "Poster Design",
    projects: [
      { title: "Advertisement Poster", image: poster1 },
      { title: "Editorial Poster", image: poster2 },
      { title: "Magazine Cover", image: poster3 },
      { title: "Nag Brand Poster", image: poster4 },
    ],
  },
  {
    name: "Logo Rebranding",
    projects: [
      { title: "Logo Rebrand 01", image: logo1 },
      { title: "Logo Rebrand 02", image: logo2 },
      { title: "Logo Rebrand 03", image: logo3 },
    ],
  },
  {
    name: "Blender Models",
    projects: [
      { title: "3D Pond Scene", image: blender1 },
      { title: "3D Quiz Scene", image: blender2 },
    ],
  },
  {
    name: "Magazines",
    projects: [
      { title: "Magazine Layout 01", image: mag1 },
      { title: "Magazine Layout 02", image: mag2 },
      { title: "Magazine Spread", image: mag3 },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="portfiolio-hero2 min-h-screen w-full pt-24 pb-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl text-[#0F3561] text-center mb-4">My Portfolio</h1>
        <p className="text-[#0F3561]/70 text-center mb-16 max-w-lg mx-auto">
          A selection of my recent work across branding, design, and visual identity.
        </p>
      </div>

      {categories.map((cat) => (
        <section key={cat.name} className="max-w-6xl mx-auto mb-20 last:mb-0">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#479FFF]">
              {cat.name}
            </span>
            <div className="flex-1 h-px bg-[#0F3561]/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.projects.map((project, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#0F3561]/5 hover:border-[#0F3561]/20"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
