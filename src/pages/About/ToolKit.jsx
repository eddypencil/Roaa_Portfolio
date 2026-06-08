import { Image, Video, Box, PenTool, Film } from 'lucide-react'

const tools = [
  { icon: Image, name: 'Photoshop' },
  { icon: Video, name: 'Premiere Pro' },
  { icon: Box, name: 'Blender' },
  { icon: PenTool, name: 'Figma' },
  { icon: PenTool, name: 'Illustrator' },
  { icon: Film, name: 'After Effects' },
]

export default function ToolKit() {
  return (
    <div className="portfiolio-hero min-h-screen w-full flex flex-col items-center justify-center px-8 py-16">
      <h2 className="text-5xl md:text-7xl mb-12">ToolKit & Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center bg-white/80 rounded-2xl p-4 md:p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <tool.icon className="text-[#479FFF] mb-4" size={48} strokeWidth={1.5} />
            <p className="text-lg font-semibold text-[#0F3561]">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
