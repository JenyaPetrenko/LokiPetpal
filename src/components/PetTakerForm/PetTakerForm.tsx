import React, { useState } from "react";
import { CaretakerForm } from "@/utils/forms";
import { Button } from "../Button";

const PetTakerForm: React.FC = () => {
  const [formData, setFormData] = useState<CaretakerForm>({
    name: "",
    email: "",
    phone: "",
    location: "",
    availability: "",
    image: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State для повідомлення

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Caretaker Form Data:", formData);

    // Встановлення повідомлення про успішну реєстрацію
    setSuccessMessage("You are registered now as Pet Caretaker!");

    // Очистка форми
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      availability: "",
      image: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Join as a Caretaker
        </h2>
        {successMessage && ( // Показ повідомлення про успішну реєстрацію
          <p className="text-green-500 text-center text-sm mt-2">
            {successMessage}
          </p>
        )}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <textarea
          name="availability"
          placeholder="Availability (e.g., Weekends, Evenings)"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 h-20"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <Button>Join as a Caretaker</Button>
      </form>
    </div>
  );
};

export default PetTakerForm;
