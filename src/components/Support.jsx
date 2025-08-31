import React, { useState } from "react";

const Support = () => {
  // Example supporters (could later come from backend / database)
  const [supporters, setSupporters] = useState([
    { id: 1, name: "Adeola B.", amount: 5000 },
    { id: 2, name: "Chukwuemeka I.", amount: 2000 },
    { id: 3, name: "Fatima S.", amount: 10000 },
  ]);

  const [form, setForm] = useState({ name: "", amount: "" });

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new supporter + redirect to Telegram
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount) return;

    const newSupporter = {
      id: supporters.length + 1,
      name: form.name,
      amount: parseInt(form.amount),
    };

    setSupporters([...supporters, newSupporter]);
    setForm({ name: "", amount: "" });

    // Redirect to Telegram
    window.open("https://t.me/+zi9nHFlLGEY5ODM8", "_blank");
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-600">
          Support the Campaign
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600">
          Your contributions keep this campaign moving.  
          Every support matters—big or small!
        </p>
      </div>

      {/* Account Info */}
      <div className="bg-yellow-400 text-gray-900 max-w-md mx-auto p-6 rounded-xl shadow-lg mb-12 text-center">
        <h3 className="text-xl font-bold mb-2">Campaign Account</h3>
        <p className="font-mono text-lg">GTBank - 0725580325</p>
        <p className="text-sm text-gray-800 mt-2">
          Use this account number to send your support.
        </p>
      </div>

      {/* Form to Submit Support */}
      <div className="max-w-lg mx-auto mb-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-4 border"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
            Add Your Support
          </h2>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount (₦)"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            I Have Supported
          </button>
        </form>
      </div>

      {/* Supporters List */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
          Recent Supporters
        </h3>
        <ul className="space-y-3">
          {supporters.map((s) => (
            <li
              key={s.id}
              className="flex justify-between items-center bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm"
            >
              <span className="font-medium text-gray-700">{s.name}</span>
              <span className="font-bold text-yellow-600">
                ₦{s.amount.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Support;
