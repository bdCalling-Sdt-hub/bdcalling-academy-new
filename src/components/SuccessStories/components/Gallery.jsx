import ModalImage from "react-modal-image";
const Gallery = () => {
  const images = [
    "/images/gallery/gallery6.png",
    "/images/gallery/gallery7.png",
    "/images/gallery/gallery8.png",
    "/images/gallery/gallery5.png",
    "/images/gallery/gallery4.png",
    "/images/gallery/gallery3.png",
    "/images/gallery/gallery2.png",
    "/images/gallery/gallery1.png",
    "https://i.postimg.cc/tC8VtHcC/IMG-2612.jpg",
    "https://i.postimg.cc/qBbKqKXK/IMG-2845.jpg",
    "https://i.postimg.cc/6pR4MmsV/IMG-4612.jpg",
    "https://i.postimg.cc/C5Qn2yL7/IMG-5465.jpg",
    "https://i.postimg.cc/Vv6b4s15/IMG-5794.jpg",
    "https://i.postimg.cc/Vv6b4s15/IMG-5794.jpg",
  ];

  const animationType = [
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInUp",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-12">
      {images.map((item, index) => (
        <div
          key={index}
          style={{ width: "100%" }}
          className="bg-[#E6F8FF] rounded-md shadow-sm p-2 flex items-center justify-center"
        >
          <ModalImage
            small={item}
            large={item}
            loading="lazy"
            alt="Bdcalling Academy"
            className={`w-full rounded-md animate__animated  ${
              animationType.length <= index
                ? animationType[0]
                : animationType[index]
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
