import React, { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

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
          <Input
            label="Nombres"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Correo electrónico"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            label="Mensaje"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <Button type="submit">Enviar</Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
