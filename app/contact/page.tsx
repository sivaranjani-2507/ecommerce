"use client";

import { useState } from "react";
import { BiSolidParty } from "react-icons/bi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    setErrors((prev: any) => {
      const newErrors = { ...prev };

      if (name === "name" && value.trim()) delete newErrors.name;

      if (name === "email" && /^[a-zA-Z0-9._%+-]+@gmail\.(com|in)$/.test(value))
        delete newErrors.email;

      if (name === "message" && value.trim()) delete newErrors.message;

      return newErrors;
    });

  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validate()) {
      setShowPopup(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md relative"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded h-24"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow text-center w-80">
            <h3 className="flex text-xl font-bold text-green-600 flex justify-center">
              Success <BiSolidParty className="ml-3 mt-1" />
            </h3>
            <p className="mt-2">Your message has been sent!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-green-600 text-white px-4 py-1 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
