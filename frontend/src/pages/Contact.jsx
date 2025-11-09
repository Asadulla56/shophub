import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Show success popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); 

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, title: "Email Us", content: "shophub21@gmail.com", link: "mailto:shophub21@gmail.com" },
    { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, title: "Visit Us", content: "123 Commerce St, Airport,Dhaka", link: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500">{item.content}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-8 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={6}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in">
          <Send className="w-5 h-5" />
          <span>Message sent successfully!</span>
        </div>
      )}
    </div>
  );
};

export default Contact;
