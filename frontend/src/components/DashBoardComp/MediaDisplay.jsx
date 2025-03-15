// export function MediaDisplay({ media }) {
//     if (!media || media.length === 0) return null;
  
//     if (media.length === 1) {
//       // Single media: display full width
//       return (
//         <img
//           src={media[0].url}
//           alt="Media"
//           className="w-full object-cover rounded-md"
//         />
//       );
//     } else if (media.length === 2) {
//       // Two images: side by side
//       return (
//         <div className="grid grid-cols-2 gap-1">
//           {media.map((item, index) => (
//             <img
//               key={index}
//               src={item.url}
//               alt="Media"
//               className="w-full h-full object-cover rounded-md"
//             />
//           ))}
//         </div>
//       );
//     } else if (media.length === 3) {
//       // Three images: one larger image on the left, two stacked on the right
//       return (
//         <div className="grid grid-cols-2 grid-rows-2 gap-1">
//           <img
//             src={media[0].url}
//             alt="Media"
//             className="row-span-2 object-cover rounded-md"
//           />
//           <img
//             src={media[1].url}
//             alt="Media"
//             className="object-cover rounded-md"
//           />
//           <img
//             src={media[2].url}
//             alt="Media"
//             className="object-cover rounded-md"
//           />
//         </div>
//       );
//     } else if (media.length === 4) {
//       // Four images: 2x2 grid
//       return (
//         <div className="grid grid-cols-2 gap-1">
//           {media.map((item, index) => (
//             <img
//               key={index}
//               src={item.url}
//               alt="Media"
//               className="w-full h-full object-cover rounded-md"
//             />
//           ))}
//         </div>
//       );
//     } else {
//       // More than 4: show first 4 images, overlay the last one with a count of additional images
//       return (
//         <div className="grid grid-cols-2 gap-1 relative">
//           {media.slice(0, 4).map((item, index) => {
//             if (index === 3) {
//               const remaining = media.length - 4;
//               return (
//                 <div key={index} className="relative">
//                   <img
//                     src={item.url}
//                     alt="Media"
//                     className="w-full h-full object-cover rounded-md"
//                   />
//                   {remaining > 0 && (
//                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
//                       <span className="text-white text-xl">+{remaining}</span>
//                     </div>
//                   )}
//                 </div>
//               );
//             }
//             return (
//               <img
//                 key={index}
//                 src={item.url}
//                 alt="Media"
//                 className="w-full h-full object-cover rounded-md"
//               />
//             );
//           })}
//         </div>
//       );
//     }
//   }


import React, { useState } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function LightboxModal({ images, currentIndex, onClose, onPrev, onNext }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white text-2xl"
      >
        <FaTimes />
      </button>
      
      {/* Previous Button */}
      {images.length > 1 && (
        <button 
          onClick={onPrev} 
          className="absolute left-4 text-white text-3xl"
        >
          <FaArrowLeft />
        </button>
      )}
      
      {/* Displayed Image */}
      <img 
        src={images[currentIndex].url} 
        alt="Expanded view" 
        className="max-w-full max-h-full object-contain"
      />
      
      {/* Next Button */}
      {images.length > 1 && (
        <button 
          onClick={onNext} 
          className="absolute right-4 text-white text-3xl"
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  );
}

export function MediaDisplay({ media }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  const showNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  if (!media || media.length === 0) return null;

  // Single media: full width display with click-to-open modal
  if (media.length === 1) {
    return (
      <>
        <img
          src={media[0].url}
          alt="Media"
          className="w-full object-cover rounded-md cursor-pointer"
          onClick={() => openModal(0)}
        />
        {modalOpen && (
          <LightboxModal 
            images={media} 
            currentIndex={activeIndex} 
            onClose={closeModal} 
            onPrev={showPrev} 
            onNext={showNext} 
          />
        )}
      </>
    );
  }

  // Two media: display side by side
  if (media.length === 2) {
    return (
      <>
        <div className="grid grid-cols-2 gap-1">
          {media.map((item, index) => (
            <img
              key={index}
              src={item.url}
              alt="Media"
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
        {modalOpen && (
          <LightboxModal 
            images={media} 
            currentIndex={activeIndex} 
            onClose={closeModal} 
            onPrev={showPrev} 
            onNext={showNext} 
          />
        )}
      </>
    );
  }

  // Three media: one large image on left, two stacked on right
  if (media.length === 3) {
    return (
      <>
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          <img
            src={media[0].url}
            alt="Media"
            className="row-span-2 object-cover rounded-md cursor-pointer"
            onClick={() => openModal(0)}
          />
          <img
            src={media[1].url}
            alt="Media"
            className="object-cover rounded-md cursor-pointer"
            onClick={() => openModal(1)}
          />
          <img
            src={media[2].url}
            alt="Media"
            className="object-cover rounded-md cursor-pointer"
            onClick={() => openModal(2)}
          />
        </div>
        {modalOpen && (
          <LightboxModal 
            images={media} 
            currentIndex={activeIndex} 
            onClose={closeModal} 
            onPrev={showPrev} 
            onNext={showNext} 
          />
        )}
      </>
    );
  }

  // Four media: 2x2 grid
  if (media.length === 4) {
    return (
      <>
        <div className="grid grid-cols-2 gap-1">
          {media.map((item, index) => (
            <img
              key={index}
              src={item.url}
              alt="Media"
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
        {modalOpen && (
          <LightboxModal 
            images={media} 
            currentIndex={activeIndex} 
            onClose={closeModal} 
            onPrev={showPrev} 
            onNext={showNext} 
          />
        )}
      </>
    );
  }

  // More than 4 media: show first 4 images in grid with overlay on the last one
  return (
    <>
      <div className="grid grid-cols-2 gap-1 relative">
        {media.slice(0, 4).map((item, index) => {
          if (index === 3) {
            const remaining = media.length - 4;
            return (
              <div 
                key={index} 
                className="relative cursor-pointer" 
                onClick={() => openModal(index)}
              >
                <img
                  src={item.url}
                  alt="Media"
                  className="w-full h-full object-cover rounded-md"
                />
                {remaining > 0 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                    <span className="text-white text-xl">+{remaining}</span>
                  </div>
                )}
              </div>
            );
          }
          return (
            <img
              key={index}
              src={item.url}
              alt="Media"
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => openModal(index)}
            />
          );
        })}
      </div>
      {modalOpen && (
        <LightboxModal 
          images={media} 
          currentIndex={activeIndex} 
          onClose={closeModal} 
          onPrev={showPrev} 
          onNext={showNext} 
        />
      )}
    </>
  );
}
