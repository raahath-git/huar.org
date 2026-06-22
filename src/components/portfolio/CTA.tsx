import { useState } from "react";
import { toast } from "sonner";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", project: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="border-b border-[#27272a] bg-[#111111] text-[#f2efeb]" style={{ backgroundImage: "none" }}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#27272a] flex flex-col justify-between gap-8">
          <div className="space-y-6 max-w-sm">
            <h2 className="text-4xl font-display font-black uppercase tracking-wider text-[#f2efeb]">
              Let's<br />talk.
            </h2>
            <p className="text-[#a1a1aa] text-sm leading-relaxed font-sans">
              Have a project or need help? Fill out the form, and we'll get back to you soon.
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest text-[#52525b] font-mono hidden lg:block">
            FORM.01 / INQUIRIES
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 p-6 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-[#a1a1aa] block font-mono">
                / Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="What's your name?"
                className="w-full bg-[#f2efeb] border border-[#dbd9d6] hover:border-[#a1a1aa] focus:border-[#111111] focus:outline-none p-4 text-sm font-sans tracking-wide text-[#111111] transition-colors placeholder-[#71717a]"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-[#a1a1aa] block font-mono">
                / Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Where can we reach you?"
                className="w-full bg-[#f2efeb] border border-[#dbd9d6] hover:border-[#a1a1aa] focus:border-[#111111] focus:outline-none p-4 text-sm font-sans tracking-wide text-[#111111] transition-colors placeholder-[#71717a]"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="project" className="text-xs uppercase tracking-widest font-semibold text-[#a1a1aa] block font-mono">
                / Your Project
              </label>
              <textarea
                id="project"
                rows={5}
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                placeholder="Tell us about your project, goals, and timeline..."
                className="w-full bg-[#f2efeb] border border-[#dbd9d6] hover:border-[#a1a1aa] focus:border-[#111111] focus:outline-none p-4 text-sm font-sans tracking-wide text-[#111111] transition-colors placeholder-[#71717a] resize-none"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center border border-[#f2efeb] bg-[#f2efeb] hover:bg-transparent hover:text-[#f2efeb] hover:border-[#f2efeb] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold text-[#111111] transition-all duration-300 w-full sm:w-auto active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
