const Map = () => {
  return (
    <div className="w-full h-[250px] my-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        className="w-full h-full border-none rounded-xl shadow-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
