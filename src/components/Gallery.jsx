// add tailwind css classes for styling

import { useState } from "react";

const photos = [
  { id: 1, src: "../../public/img/cat1.jpg", caption: "Playful cat" },
  { id: 2, src: "../../public/img/dog1.jpg", caption: "Sweet puppy" },
  { id: 3, src: "../../public/img/rabbit1.jpg", caption: "Happy Bunny" },
  { id: 4, src: "../../public/img/cat2.jpg", caption: "Sweet kitten" },
  { id: 5, src: "../../public/img/dog2.jpg", caption: "Loyal dog" },
  { id: 6, src: "../../public/img/dog3.jpg", caption: "Curious dog" },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };
  return (
    <section id="gallery" className="py-12 bg-gray-200">
      <h2 className="text-3xl font-bold text-center w-full mb-6">Our Pets</h2>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="cursor-pointer hover:scale-105 transform transition duration-200  shadow-lg rounded-lg overflow-hidden"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className=" w-full h-70 object-cover"
              />
            </div>
          ))}
        </div>
        {isModalOpen && selectedPhoto && (
          <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            onClick={closeModal}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-2xl w-96 h-96 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full h-72 object-cover rounded"
              />
              <p className="text-center mt-4 text-lg">
                {selectedPhoto.caption}
              </p>
              <button
                className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
