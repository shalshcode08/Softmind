import React from 'react';

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
          required
        />
      </div>
      <input
        type="email"
        placeholder="Your Email ID"
        className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
        required
      />
      <textarea
        placeholder="Your message"
        rows={4}
        className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
        required
      />
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 sm:py-3 rounded hover:bg-blue-700 text-sm sm:text-base"
      >
        Submit
      </button>
    </form>
  );
};