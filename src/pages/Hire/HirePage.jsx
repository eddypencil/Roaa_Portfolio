import { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function HirePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Hire Inquiry from " + form.name);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:Roaa.Tariq.75@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="portfiolio-hero2 min-h-screen w-full pt-24 pb-16 px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl text-[#0F3561] text-center mb-2">
          Hire Me
        </h1>
        <p className="text-[#0F3561]/70 text-center mb-12 max-w-lg mx-auto">
          Have a project in mind? Let's bring your ideas to life.
        </p>

        {sent ? (
          <div className="bg-white/80 rounded-2xl p-12 shadow-md text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
              <Send size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-[#0F3561] mb-2">
              Message Ready!
            </h2>
            <p className="text-gray-600 mb-6">
              Your email client should open with the details pre-filled. Just hit send!
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
              className="px-6 py-2 bg-[#0F3561] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/80 rounded-2xl p-8 md:p-12 shadow-md">
            <div className="mb-6">
              <label className="flex items-center gap-2 text-[#0F3561] font-semibold mb-2">
                <User size={18} /> Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-[#0F3561]/20 focus:border-[#479FFF] focus:outline-none bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-center gap-2 text-[#0F3561] font-semibold mb-2">
                <Mail size={18} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-[#0F3561]/20 focus:border-[#479FFF] focus:outline-none bg-white"
              />
            </div>

            <div className="mb-8">
              <label className="flex items-center gap-2 text-[#0F3561] font-semibold mb-2">
                <MessageSquare size={18} /> Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg border border-[#0F3561]/20 focus:border-[#479FFF] focus:outline-none bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0F3561] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
