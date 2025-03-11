'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function ContactInput({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="mb-4 group">
      <label className="block mb-1 text-light-text-darker dark:text-white font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border rounded 
                   dark:bg-gray-800 dark:border-gray-700 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-light-primary 
                   dark:focus:ring-accent transition-shadow
                   hover:shadow-md hover:border-light-primary dark:hover:border-accent"
      />
    </div>
  );
}

function ContactTextArea({ label, value, onChange }) {
  return (
    <div className="mb-4 group">
      <label className="block mb-1 text-light-text-darker dark:text-white font-medium">
        {label}
      </label>
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border rounded 
                   dark:bg-gray-800 dark:border-gray-700 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-light-primary 
                   dark:focus:ring-accent transition-shadow
                   hover:shadow-md hover:border-light-primary dark:hover:border-accent"
      />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objet: '',
    message: '',
    // password: '',
    // rePassword: '',
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (key, val) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    // const newErrors = {};
    // if (formData.password.length < 8) {
    //   newErrors.password = 'Minimum 8 caractères';
    // }
    // if (formData.rePassword !== formData.password) {
    //   newErrors.rePassword = 'Les mots de passe ne correspondent pas';
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Envoi EmailJS
    const templateParams = {
      nom: formData.name,
      email: formData.email,
      objet: formData.objet,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        'service_ak3se6g', // ✅ Ton Service ID
        'template_ariny4e', // ✅ Ton Template ID
        templateParams,
        'WvRKJxpdK5zGfFtID' // ✅ Ton Public Key
      );
      console.log('SUCCESS!', result.text);
      setStatusMessage('Message envoyé avec succès 🎉');
      // Reset form
      handleReset();
    } catch (error) {
      console.error('FAILED...', error);
      setStatusMessage("Erreur lors de l'envoi du message ❌");
    }

    setErrors({});
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      objet: '',
      message: '',
      // password: '',
      // rePassword: '',
    });
    setErrors({});
    setStatusMessage('');
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto my-12 px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg md:flex animate-[fadeIn_0.4s_ease-out]">
        {/* Contact Info Panel */}
        <div className="w-full md:w-2/5 p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 animate-[fadeInLeft_0.4s_ease-out]">
          <h1 className="text-3xl font-bold mb-4 text-light-primary dark:text-accent">
            Contactez Nous
          </h1>
          <p className="text-light-text dark:text-gray-300 mb-6">
            Une question, un souci ou simplement envie de dire bonjour ?
            N’hésitez pas à nous contacter.
          </p>
          <div className="space-y-4 text-light-text dark:text-gray-300">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <FaMapMarkerAlt className="text-light-primary dark:text-accent" />
              <span>123 Rue des Événements, Montreal, H1T 2P9</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <FaPhoneAlt className="text-light-primary dark:text-accent" />
              <span>+1 514-515-5253</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <FaEnvelope className="text-light-primary dark:text-accent" />
              <span>contact@goevents.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-3/5 p-6 animate-[fadeInRight_0.4s_ease-out]">
          <h2 className="text-xl font-semibold mb-4 text-light-text-darker dark:text-white">
            Envoyez-nous un message
          </h2>

          <form onSubmit={handleSubmit}>
            <ContactInput
              label="Nom"
              value={formData.name}
              onChange={(val) => handleChange('name', val)}
              required
            />
            <ContactInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={(val) => handleChange('email', val)}
              required
            />
            <ContactInput
              label="Objet"
              value={formData.objet}
              onChange={(val) => handleChange('objet', val)}
            />
            <ContactTextArea
              label="Message"
              value={formData.message}
              onChange={(val) => handleChange('message', val)}
            />

            {/* <ContactInput
              label="Mot de passe"
              type="password"
              value={formData.password}
              onChange={(val) => handleChange('password', val)}
              required
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )} */}
{/* 
            <ContactInput
              label="Confirmer mot de passe"
              type="password"
              value={formData.rePassword}
              onChange={(val) => handleChange('rePassword', val)}
              required
            />
            {errors.rePassword && (
              <span className="text-red-500 text-sm">{errors.rePassword}</span>
            )} */}

            {statusMessage && (
              <p className="mt-4 text-center font-medium text-green-600 dark:text-green-400">
                {statusMessage}
              </p>
            )}

            <div className="flex justify-center gap-4 my-8">
              <input
                type="submit"
                value="Envoyer"
                className="bg-blue-600 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700"
              />
              <input
                type="button"
                value="Annuler"
                onClick={handleReset}
                className="bg-gray-500 text-white rounded-lg p-2 cursor-pointer hover:bg-gray-600"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
