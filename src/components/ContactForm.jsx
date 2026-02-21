import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values) {
    const newErrors = {};
    if (!values.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!values.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center w-full mb-6">Contact Us</h2>
      <div className="flex flex-row items-stretch gap-6 justify-center">
        <form
          className="max-w-md p-4 bg-white rounded shadow-md w-full flex flex-col"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-2 mb-1 border border-gray-300 rounded ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm mb-3">{errors.name}</span>
          )}

          <label htmlFor="email" className="block mb-2 font-semibold mt-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-2 mb-1 border border-gray-300 rounded ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mb-3">{errors.email}</span>
          )}

          <label htmlFor="message" className="block mb-2 font-semibold mt-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`w-full p-2 mb-1 border border-gray-300 rounded ${
              errors.message ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm mb-3">{errors.message}</span>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          >
            Send
          </button>
          {submitted && (
            <span className="text-green-600 text-sm mt-3">
              Thank you for your message!
            </span>
          )}
        </form>

        <img
          src="../../img/dog3.jpg"
          alt="Cute dog"
          className="max-w-md rounded-lg shadow-md object-cover"
        />
      </div>
    </section>
  );
}
