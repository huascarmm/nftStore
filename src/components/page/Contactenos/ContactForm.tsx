import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí podrías agregar lógica para enviar el formulario a un backend
  };

  return (
    <div className="p-6 mx-auto mt-10 max-w-md shadow bg-base-100 rounded-box">
      <h2 className="mb-4 text-2xl font-bold">Contáctenos</h2>
      {submitted ? (
        <div className="text-success">¡Gracias por contactarnos!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="font-medium label-text">Nombre</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-medium label-text">Correo electrónico</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-medium label-text">Mensaje</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full textarea textarea-bordered"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary roudend"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
