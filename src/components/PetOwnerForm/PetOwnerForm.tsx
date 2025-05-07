import React, { useState } from "react";
import { OwnerForm } from "@/utils/forms";
import { Button } from "../Button";

const PetOwnerForm: React.FC = () => {
  const [formData, setFormData] = useState<OwnerForm>({
    name: "",
    email: "",
    phone: "",
    petType: "",
    petName: "",
    petAge: 0,
    petBreed: "",
    petGender: "",
    petImage: "",
    location: "",
    availability: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State для повідомлення

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, petImage: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Імітація успішної реєстрації
    console.log("Owner Form Data:", formData);
    setSuccessMessage("You are registered now as Pet Owner!"); // Встановлення повідомлення
    setFormData({
      name: "",
      email: "",
      phone: "",
      petType: "",
      petName: "",
      petAge: 0,
      petBreed: "",
      petGender: "",
      petImage: "",
      location: "",
      availability: "",
    }); // Очистка форми
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 mt-20">
      {/* Додано додатковий контейнер для відступу */}
      <div className="w-full sm:max-w-md mt-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-md shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Join as Pet Owner Form
          </h2>
          {successMessage && ( // Відображення повідомлення
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
            name="petType"
            placeholder="Pet Type (e.g., Dog, Cat)"
            value={formData.petType}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <input
            type="text"
            name="petName"
            placeholder="Pet Name"
            value={formData.petName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <input
            type="number"
            name="petAge"
            placeholder="Pet Age (years)"
            value={formData.petAge}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <input
            type="text"
            name="petBreed"
            placeholder="Pet Breed"
            value={formData.petBreed}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <select
            name="petGender"
            value={formData.petGender}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="file"
            name="petImage"
            accept="image/*"
            onChange={handleFileChange}
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
            placeholder="Availability (e.g., Weekends)"
            value={formData.availability}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 h-24"
          />
          <Button>Join as Pet Owner</Button>
        </form>
      </div>
    </div>
  );
};

export default PetOwnerForm;
