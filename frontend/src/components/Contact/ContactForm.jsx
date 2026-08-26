import { useState } from "react";
import { LuSend } from "react-icons/lu";
import axios from "axios";

const formFields = [
  {
    id: 1,
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    id: 2,
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
  },
  {
    id: 3,
    label: "Phone Number",
    name: "number",
    type: "tel",
    placeholder: "Enter your phone number",
    required: false,
  },
  {
    id: 4,
    label: "Subject",
    name: "subject",
    type: "select",
    placeholder: "Select a subject",
    options: [
      "General Inquiry",
      "Buying Property",
      "Selling Property",
      "Renting Property",
    ],
  },
  {
    id: 5,
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Write your message here...",
    required: true,
  },
];

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await axios.post("/api/contact", formData);
      setStatus(response.data.message || "Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.response?.data?.message ||
          "Unable to send message. Please try again.",
      );
    }
  };

  return (
    <div className="w-full flex flex-col justify-between h-full">
      {}
      <div className="flex flex-col gap-1.5 mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Send Us a <span className="text-[#f59e0b]">Message</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-300">
              {field.label}
            </label>

            {}
            {field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full bg-[#121722] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-300 focus:outline-none focus:border-[#f59e0b] transition-colors"
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                rows="4"
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full bg-[#121722] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] transition-colors resize-none"
              ></textarea>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full bg-[#121722] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            )}
          </div>
        ))}

        {}
        <button
          type="submit"
          className="mt-2 w-full bg-[#f59e0b] hover:bg-[#d98206] text-black font-bold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#f59e0b]/20"
        >
          <LuSend className="w-4 h-4" />
          Send Message
        </button>
        {status && (
          <p className="text-xs text-center text-[#f59e0b]">{status}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
