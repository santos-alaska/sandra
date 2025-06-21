import React from 'react';
import sandar1 from '../assets/sandra1.jpg'; // Importing the first image

// Data for the gallery items
const galleryItems = [
  {
    title: "Fan meet moments",
    subtitle: "'Timeless Grace'",
    imageUrl: sandar1,
    alt: "Sandra Bullock smiling at a fan event",
  },
  {
    title: "Movie stills",
    subtitle: "'Cinematic Legacy'",
    imageUrl: sandar1,
    alt: "Sandra Bullock in a movie still photo",
  },
  {
    title: "Behind-the-scenes",
    subtitle: "'Sandra Unscripted'",
    imageUrl: sandar1,
    alt: "Sandra Bullock laughing candidly",
  },
  {
    title: "Charity work",
    subtitle: "'Hearts in Action'",
    imageUrl: sandar1,
    alt: "Sandra Bullock headshot for a charity event",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Caption */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-800 tracking-wide">
                  {item.title} - <span className="font-medium text-gray-700">{item.subtitle}</span>
                </p>
              </div>
              {/* Image */}
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-sm shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;