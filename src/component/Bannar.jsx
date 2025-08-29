import React from "react";
import bannerImg from "../assets/banner.jpg"; // replace with your own image

const Bannar = () => {
  const telegramLink = "https://t.me/+zi9nHFlLGEY5ODM8";

  return (
    <section
      className="relative bg-gray-900 text-white h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Imisioluwa <span className="text-yellow-400">Campaign Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Support the move of Imisi Vote Campaign all around Nigeria.
        </p>
        <div className="flex justify-center gap-4">
          {/* Join Our Team Button */}
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
          >
            Join Our Team
          </a>

          {/* Learn More Button */}
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
