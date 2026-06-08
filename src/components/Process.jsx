export default function Process({ number, name, description }) {
  return (
    <div className="flex flex-col items-center bg-white/80 rounded-2xl p-6 md:p-12 shadow-lg">
      <div className="w-16 mb-4 h-16 rounded-full bg-[#7390ca] text-white flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <div className="text-xl font-semibold text-[#0F3561] mb-2">{name}</div>
      <div className="text-center text-gray-600">{description}</div>
    </div>
  );
}
