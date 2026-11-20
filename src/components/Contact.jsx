import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  ArrowUpRight, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  CONTACT_CONFIG, 
  createMailtoLink, 
  createWhatsAppLink 
} from '../config/contact';

const SERVICE_OPTIONS = [
  'Website Design',
  '3D Website',
  'Full-Stack Development',
  'E-commerce Website',
  'UI/UX Design',
  'Other'
];

const BUDGET_RANGES = [
  '₹10,000 – ₹25,000 (Starter)',
  '₹25,000 – ₹50,000 (Growth)',
  '₹50,000 – ₹1,00,000+ (Custom / 3D)',
  'Undecided / Flexible',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Website Design',
    budget: 'Undecided / Flexible',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'mailto_opened' | null
  const [generatedMailto, setGeneratedMailto] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  // Listen for custom service select event from other sections
  useEffect(() => {
    const handleCustomService = (e) => {
      if (e.detail && SERVICE_OPTIONS.includes(e.detail)) {
        setFormData(prev => ({ ...prev, service: e.detail }));
      }
    };
    window.addEventListener('selectServiceOption', handleCustomService);
    return () => window.removeEventListener('selectServiceOption', handleCustomService);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com)';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell me a few details about your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Project description must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const mailtoUrl = createMailtoLink(formData);
      setGeneratedMailto(mailtoUrl);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {}

      // Open user's email client with prefilled details
      window.location.href = mailtoUrl;
      setSubmissionStatus('mailto_opened');
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(CONTACT_CONFIG.email);
    setCopiedField('email');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard?.writeText(CONTACT_CONFIG.displayPhone);
    setCopiedField('phone');
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden border-t border-white/[0.04]">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-violet-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 font-mono text-xs font-semibold tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span>06 // INITIATE COLLABORATION</span>
          </div>
          
          <div className="space-y-1">
            <h3 className="font-mono text-xs sm:text-sm tracking-widest text-purple-400 font-bold uppercase">
              HAVE A PROJECT IN MIND?
            </h3>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              LET'S BUILD SOMETHING<br />
              <span className="text-gradient-electric">EXTRAORDINARY.</span>
            </h2>
          </div>

          <p className="text-[#A3A3B5] max-w-2xl text-base sm:text-lg font-normal">
            Have an idea, a business or a project that needs a powerful online presence? Let's talk and turn your vision into a digital experience.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Status Card */}
            <div className="p-6 rounded-2xl bg-[#0B0B14]/90 border border-purple-500/30 backdrop-blur-md shadow-glow-subtle">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  {CONTACT_CONFIG.availabilityStatus}
                </span>
              </div>
              <p className="text-sm text-[#A3A3B5] leading-relaxed">
                Let's discuss your next digital project. I am available for new web design projects, 3D interactive experiences, and full-stack development commissions.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Option Card */}
              <div className="p-5 rounded-2xl bg-[#11111A]/90 border border-white/[0.08] hover:border-purple-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 text-purple-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3B5] block">
                      OFFICIAL EMAIL
                    </span>
                    <a 
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      className="font-mono text-sm text-white hover:text-purple-300 font-semibold truncate block transition-colors"
                      title={CONTACT_CONFIG.email}
                    >
                      {CONTACT_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-[#181828] hover:bg-purple-950/60 text-slate-300 hover:text-purple-300 border border-white/5 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-glow-subtle"
                  >
                    <span>Email Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Option Card */}
              <div className="p-5 rounded-2xl bg-[#11111A]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3B5] block">
                      WHATSAPP (DIRECT MESSAGING)
                    </span>
                    <a 
                      href={CONTACT_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-white hover:text-emerald-300 font-semibold block transition-colors"
                    >
                      {CONTACT_CONFIG.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                  <button
                    onClick={copyPhone}
                    className="p-2 rounded-xl bg-[#181828] hover:bg-emerald-950/60 text-slate-300 hover:text-emerald-300 border border-white/5 transition-colors"
                    title="Copy phone number to clipboard"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={CONTACT_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>Chat on WA</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Location Badge */}
              <div className="p-5 rounded-2xl bg-[#11111A]/90 border border-white/[0.08] flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3B5] block">
                    LOCATION & BASE
                  </span>
                  <span className="font-mono text-sm text-white font-medium">
                    {CONTACT_CONFIG.location}
                  </span>
                  <span className="text-[11px] font-mono text-[#A3A3B5] block mt-0.5">
                    Indian Standard Time (IST / UTC+5:30) • Open to Global & Remote Clients
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Instant WhatsApp Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-purple-950/30 to-[#11111A] border border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-300 block">
                  Prefer instant messaging?
                </span>
                <p className="text-[11px] text-[#A3A3B5]">
                  Reach out directly on WhatsApp for immediate discussion or quick questions.
                </p>
              </div>
              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(16,185,129,0.35)]"
              >
                <span>Open WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Working Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0B0B14]/90 border border-purple-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
              
              <div className="mb-8 pb-4 border-b border-white/[0.06]">
                <h3 className="font-display font-bold text-xl text-white">
                  Project Enquiry Form
                </h3>
                <p className="text-xs text-[#A3A3B5] mt-1">
                  Share your project vision below. On submission, this form will encode your details and launch your email application directly addressed to <span className="text-purple-300 font-mono">shyambhukya17@gmail.com</span>.
                </p>
              </div>

              {/* Status Alert feedback when mailto is triggered */}
              {submissionStatus === 'mailto_opened' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs font-mono space-y-1">
                    <p className="font-bold text-emerald-300">Email Draft Prepared Successfully!</p>
                    <p className="text-slate-300 leading-relaxed">
                      Your device's default email application (such as Gmail, Apple Mail, or Outlook) has opened with your project enquiry pre-filled to <span className="text-white font-semibold">shyambhukya17@gmail.com</span>.
                    </p>
                    <p className="text-[#A3A3B5] text-[11px] pt-1">
                      <span className="text-purple-300 font-semibold">Note:</span> Simply click <span className="text-white font-bold">Send</span> in your email client to dispatch the brief directly from your own email account.
                    </p>
                    {generatedMailto && (
                      <div className="pt-2 flex flex-wrap gap-2">
                        <a
                          href={generatedMailto}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-800/50 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-colors"
                        >
                          <span>Re-open Email App</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={CONTACT_CONFIG.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#181828] hover:bg-[#202035] text-emerald-300 text-[11px] font-semibold border border-emerald-500/30 transition-colors"
                        >
                          <span>Send via WhatsApp Instead</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Field 1 & 2: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-[#A3A3B5] uppercase tracking-wider mb-2">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-[#11111A] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${
                        errors.name ? 'border-red-500/80 bg-red-950/10' : 'border-white/[0.08] focus:border-purple-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A3A3B5] uppercase tracking-wider mb-2">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#11111A] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${
                        errors.email ? 'border-red-500/80 bg-red-950/10' : 'border-white/[0.08] focus:border-purple-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Field 3: Company / Business (optional) */}
                <div>
                  <label className="block text-xs font-mono text-[#A3A3B5] uppercase tracking-wider mb-2">
                    Business / Company Name <span className="text-slate-500 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Velvet Cafe, Hyderabad / Independent Fashion Label"
                    className="w-full px-4 py-3 rounded-xl bg-[#11111A] border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* Field 4 & 5: Service & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-[#A3A3B5] uppercase tracking-wider mb-2">
                      Required Service Selection
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#11111A] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#11111A] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A3A3B5] uppercase tracking-wider mb-2">
                      Project Budget <span className="text-slate-500 text-[10px]">(Optional)</span>
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#11111A] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                    >
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b} className="bg-[#11111A] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Field 6: Project Details */}
                <div>
                  <label className="block text-xs font-mono text-[#A3A3B5] uppercase tracking-wider mb-2">
                    Project Description & Scope <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your business goals, target audience, required features, timeline, or reference websites..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#11111A] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${
                      errors.message ? 'border-red-500/80 bg-red-950/10' : 'border-white/[0.08] focus:border-purple-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-mono text-sm font-bold uppercase tracking-wider shadow-glow-purple hover:shadow-glow-violet transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>PREPARING EMAIL BRIEF...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>SUBMIT PROJECT ENQUIRY</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    )}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-500 pt-2 border-t border-white/[0.04]">
                  <span>Opens your default email client with all details pre-filled</span>
                  <span className="text-purple-400/80">Direct to shyambhukya17@gmail.com</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
