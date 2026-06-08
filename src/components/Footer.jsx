import logo from "../assets/roaa_logo.png";

export default function Footer() {
  return (
    <div id="hire" className="flex items-center justify-between px-8 py-2 bg-[#F4F0EB] shadow-md border-t border-[#0F3561]/10">
      <img className="h-16" src={logo} alt="Roaa Logo" />
      <div className="flex items-center gap-2 text-[#0F3561]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p className="text-sm">Roaa.Tariq.75@gmail.com</p>
      </div>
    </div>
  );
}
