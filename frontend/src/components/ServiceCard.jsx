export default function ServiceCard({
  icon,
  image,
  title,
  description,
}) {
  return (
    <div className="relative group overflow-hidden rounded-2xl h-[450px] shadow-xl cursor-pointer">

      {/* IMAGE */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      ) : (
        <div className="w-full h-full bg-[#0B0F14] grid place-items-center text-6xl text-[#00D1FF]">
          {icon}
        </div>
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75 group-hover:bg-black/60 transition duration-300"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">

        {/* ICON */}
        <div className="text-5xl text-[#F5B700] mb-4 drop-shadow-lg">
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-4 leading-7">
          {description}
        </p>

        {/* BUTTON */}
        <button className="
          mt-6 w-fit
          bg-[#00D1FF] hover:bg-[#00AACC]
          px-6 py-3 rounded-lg
          text-black font-semibold
          transition duration-300
          shadow-lg
        ">
          Découvrir le service
        </button>

      </div>

    </div>
  );
}