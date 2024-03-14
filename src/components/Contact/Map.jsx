import { AspectRatio } from "../ui/aspect-ratio";

const Map = () => {
  return (
    <div className="my-16">
      <AspectRatio ratio={16 / 7}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1085.5940534495626!2d90.42641159854915!3d23.765609689472157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78a2ad12ffd%3A0xec2e9ca208978c74!2sDaisy%20Garden!5e0!3m2!1sen!2sbd!4v1702375537133!5m2!1sen!2sbd"
          allowfullscreen=""
          className="rounded-lg w-full h-auto lg:h-[500px]"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </AspectRatio>
    </div>
  );
};

export default Map;
