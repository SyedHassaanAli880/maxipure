import React from 'react';

function Missions() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">PRODUCTS WE HAVE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/images/f1.jpeg",
            "/images/f2.jpeg",
            "/images/f3.jpeg",
            "/images/f4.jpeg",
            "/images/f5.jpeg",
            "/images/f6.jpeg",
            "/images/f7.jpeg",
            "/images/f8.jpeg"
          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded shadow-lg">
              <img
                src={src}
                alt={`product-${index}`}
                className="object-cover w-full h-64"
              />
            </div>
          ))}

          {/* Video */}
          {[
            "/videos/fv1.mp4",
            "/videos/fv2.mp4",
            "/videos/fv3.mp4",
            "/videos/fv4.mp4",
            "/videos/fv5.mp4",
          ].map((src, index) => (
          <div key={index} className="overflow-hidden rounded shadow-lg">
          <video
              src={src} // Make sure this path and file exist in your public directory
              controls
              className="object-cover w-full h-64 rounded"
            />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Missions;
