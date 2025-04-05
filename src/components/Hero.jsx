import React from 'react';

function Hero() {
  return (
    <section className="min-h-[115vh] relative flex items-end justify-start pb-16 sm:pb-24 md:pb-32 lg:pb-40">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/displayVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 text-left">
        <h1 className="text-4xl text-white font-bold md:text-6xl lg:text-7xl">
          MaxiPure
        </h1>
        <h6 className="text-xl text-white md:text-3xl lg:text-4xl mt-4 sm:mt-6 md:mt-8">
          Clean Water, Smarter Living.
        </h6>
      </div>
    </section>
  );
}

export default Hero;
