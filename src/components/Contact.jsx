import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

const EMAILJS_SERVICE_ID = "service_ozesq4q";
const EMAILJS_TEMPLATE_ID = "template_bk11za6";
const EMAILJS_PUBLIC_KEY = "x-EqkYbk98z1b3NIP";
const RECIPIENT_EMAIL = "AT010Abdallha@gmail.com";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasEmailJS =
      EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

    if (!hasEmailJS) {
      const form = formRef.current;
      const name = form?.user_name?.value || "";
      const email = form?.user_email?.value || "";
      const subject = form?.subject?.value || "Portfolio contact";
      const message = form?.message?.value || "";
      const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
      window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          const text = (error?.text || error?.message || "").toLowerCase();
          const isServiceNotFound =
            text.includes("service") &&
            (text.includes("not found") || text.includes("invalid"));
          if (isServiceNotFound) {
            setErrorMessage(
              "EmailJS Service ID not found. Check .env and copy the exact Service ID from Email Services at dashboard.emailjs.com/admin"
            );
          } else {
            setErrorMessage(error?.text || error?.message || "Failed to send. Try again.");
          }
          setStatus("error");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="py-32" id="contact">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Let's Work Together
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to say hi? Feel free to reach
                out.
              </p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
              <div className="bg-primary p-12 md:w-2/5 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-8">Contact Info</h3>
                  <p className="mb-10 text-blue-50 text-lg leading-relaxed">
                    I am available for freelance work and internship
                    opportunities.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <span className="material-symbols-outlined bg-white/20 p-2.5 rounded-full">
                        email
                      </span>
                      <div>
                        <span className="block text-xs uppercase opacity-70 mb-1 tracking-wider">
                          Email
                        </span>
                        <a
                          className="font-medium hover:underline text-lg"
                          href={`mailto:${RECIPIENT_EMAIL}`}
                        >
                          {RECIPIENT_EMAIL}
                        </a>
                      </div>
                    </div>
                    {/* <div className="flex items-start gap-5">
                    <span className="material-symbols-outlined bg-white/20 p-2.5 rounded-full">call</span>
                    <div>
                      <span className="block text-xs uppercase opacity-70 mb-1 tracking-wider">Phone</span>
                      <a className="font-medium hover:underline text-lg" href="tel:+201005344368">+20 100 534 4368</a>
                    </div>
                  </div> */}
                    <div className="flex items-start gap-5">
                      <span className="material-symbols-outlined bg-white/20 p-2.5 rounded-full">
                        location_on
                      </span>
                      <div>
                        <span className="block text-xs uppercase opacity-70 mb-1 tracking-wider">
                          Location
                        </span>
                        <span className="font-medium text-lg">
                          Cairo, Egypt
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex gap-5">
                  <a
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all text-xl"
                    href="https://www.linkedin.com/in/abdallah-taha01"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all text-xl"
                    href="https://github.com/AbdallhaTaha0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="p-12 md:w-3/5 bg-white dark:bg-surface-dark flex flex-col justify-center">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2.5"
                        htmlFor="user_name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-5 py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:text-white"
                        id="user_name"
                        name="user_name"
                        placeholder="John Doe"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2.5"
                        htmlFor="user_email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-5 py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:text-white"
                        id="user_email"
                        name="user_email"
                        placeholder="john@example.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2.5"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="w-full px-5 py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:text-white"
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2.5"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full px-5 py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:text-white"
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  {status === "success" && (
                    <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                      Message sent. I&apos;ll get back to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                      {errorMessage}
                    </p>
                  )}
                  <button
                    className="w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:bg-primary dark:hover:bg-primary/90 transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
