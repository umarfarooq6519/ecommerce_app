export default function Carousel() {
  return (
    <>
      <div className="carousel-item w-full">
        <img
          src="https://images.pexels.com/photos/18131912/pexels-photo-18131912/free-photo-of-young-men-in-trendy-outfits-standing-in-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1080"
          className="w-full object-cover object-center"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="https://images.pexels.com/photos/2406549/pexels-photo-2406549.jpeg?auto=compress&cs=tinysrgb&w=1080"
          className="w-full object-cover object-center"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="https://images.pexels.com/photos/15883360/pexels-photo-15883360/free-photo-of-young-man-in-a-trendy-outfit-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1080"
          className="w-full object-cover object-center"
          alt="Tailwind CSS Carousel component"
        />
      </div>
    </>
  );
}
