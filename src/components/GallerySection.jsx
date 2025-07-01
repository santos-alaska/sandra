import React from 'react';
import sandra1 from '../assets/sandra1.jpg'; 
import sandra2 from '../assets/sandra2.png'; 
import sandra3 from '../assets/sandra3.jpg' 
import sandra4 from '../assets/sandra4.png'; 

// Data for the gallery items
const galleryItems = [
  {
    title: "Fan meet moments",
    subtitle: "'Timeless Grace'",
    imageUrl: sandra1,
    alt: "Sandra Bullock smiling at a fan event",
  },
  {
    title: "Movie stills",
    subtitle: "'Cinematic Legacy'",
    imageUrl: sandra2,
    alt: "Sandra Bullock in a movie still photo",
  },
  {
    title: "Behind-the-scenes",
    subtitle: "'Sandra Unscripted'",
    imageUrl: sandra3,
    alt: "Sandra Bullock laughing candidly",
  },
  {
    title: "Charity work",
    subtitle: "'Hearts in Action'",
    imageUrl: sandra4,
    alt: "Sandra Bullock headshot for a charity event",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 h-[400px] overflow-hidden">
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
                  className="w-full h-[400px] object-cover  shadow-md"
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