import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: "",
    email: "",
    message: "",
  }); const [copied, setCopied] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  const copyToClipboard = () => {
  navigator.clipboard.writeText("mike.dorcelan@gmail.com").then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  });
};


  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >

      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
<div className="mt-10 flex flex-col items-center justify-center text-white space-y-4">
  <p className="text-lg font-semibold text-center">Or contact me directly :</p>

  <div className="flex items-center gap-2 hover:text-blue-400 transition">
    {/* Lien email */}
    <a
      href="mailto:mike.dorcelan@gmail.com"
      className="flex items-center gap-2 text-white hover:text-blue-400 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z" stroke="none" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
      <span className="underline">mike.dorcelan@gmail.com</span>
    </a>

  <svg
    onClick={copyToClipboard}
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 cursor-pointer text-gray-400 hover:text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    title={copied ? "Copié !" : "Copier l’adresse"}
  >
    <path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2h-2" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
  {copied && (
    <span className="text-sm text-green-400 mt-1 transition-opacity duration-500">
      Adresse copiée dans le presse-papier !
    </span>
  )}
</div>
  

  <div className="flex gap-6 mt-4">
    <a
      href="https://www.linkedin.com/in/mike-vaël-dorcelan-4b3a4b373/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.72v2.19h.07c.66-1.24 2.28-2.56 4.7-2.56 5.03 0 5.95 3.31 5.95 7.61V24h-5V14.62c0-2.24-.04-5.12-3.12-5.12-3.12 0-3.6 2.44-3.6 4.96V24h-5V8z"/>
      </svg>
    </a>

    <a
      href="https://github.com/Genesissx"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.438 9.76 8.207 11.35.6.11.82-.26.82-.58 0-.29-.01-1.04-.015-2.04-3.338.73-4.042-1.61-4.042-1.61-.547-1.38-1.336-1.75-1.336-1.75-1.092-.75.083-.73.083-.73 1.205.09 1.838 1.25 1.838 1.25 1.072 1.84 2.81 1.31 3.495 1 .108-.776.42-1.31.763-1.61-2.665-.3-5.467-1.33-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.17 0 0 1.005-.32 3.3 1.23.957-.27 1.984-.4 3.003-.405 1.018.005 2.046.135 3.004.405 2.292-1.55 3.295-1.23 3.295-1.23.654 1.65.242 2.87.12 3.17.77.84 1.233 1.91 1.233 3.22 0 4.61-2.806 5.625-5.478 5.92.432.37.816 1.096.816 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.216.695.825.577C20.565 22.26 24 17.78 24 12.5 24 5.87 18.63.5 12 .5z"/>
      </svg>
    </a>
  </div>
</div>

      </RevealOnScroll>
    </section>
  );
};
