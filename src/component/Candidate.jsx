import React from "react";

const Candidate = () => {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className=" py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-400">
          Meet Imisi
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Opeyemi Ayanwale — a 23-year-old fashion designer and actress from Oyo State,
          inspiring Nigerians with boldness, honesty, and authenticity.  
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-10">
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Early Life & Background
          </h2>
          <p className="leading-relaxed text-gray-300">
            Born in Oyo State, Imisi is a proud daughter of the soil, blending
            tradition with ambition. She holds an OND in Fashion Design from Yaba College of Technology, 
            and her roots shape the authenticity she carries into every space.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Career & Aspirations
          </h2>
          <p className="leading-relaxed text-gray-300">
            A skilled <span className="text-yellow-300 font-semibold">fashion designer</span> 
            with a vibrant brand, Imisi is also an <span className="text-yellow-300 font-semibold">
            aspiring Yoruba actress</span>. She sees Big Brother Naija as a platform 
            to amplify her talent, expand her creative influence, and inspire others to chase their dreams.  
            Beyond her career, she enjoys singing, cooking, dancing, and gaming — a testament 
            to her multifaceted personality.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Personality & Goals
          </h2>
          <p className="leading-relaxed text-gray-300">
            Imisi is celebrated for her <span className="text-yellow-300 font-semibold">
            honesty, confidence, and self-awareness</span>. She embodies energy, humor, 
            and authenticity in every interaction. With a mission to break barriers, 
            she represents a new generation of Nigerians who believe that greatness 
            is not confined to location but driven by vision and determination.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-16 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-6">
          Support Imisi’s Journey
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Be part of a movement that celebrates creativity, courage, and authenticity.  
          Together, we can amplify Imisi’s voice and inspire a new generation.  
        </p>
        <button className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition">
          Support the Campaign
        </button>
      </section>
    </div>
  );
};

export default Candidate;
