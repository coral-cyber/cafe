import car1 from "./../../assets/items/New folder/car1.webp";
import cars1 from "./../../assets/items/New folder/cars1.webp";
import car2 from "./../../assets/items/New folder/car2.webp";
import cars2 from "./../../assets/items/New folder/cars2.webp";
import car3 from "./../../assets/items/New folder/car3.webp";
import cars3 from "./../../assets/items/New folder/cars3.webp";
import car4 from "./../../assets/items/New folder/car4.webp";
import cars4 from "./../../assets/items/New folder/cars4.webp";
import car5 from "./../../assets/items/New folder/car5.webp";
import cars5 from "./../../assets/items/New folder/cars5.webp";

const cards = [
  { id: 1, title: "Burger", desc: "tasty", bgImg: cars1, fgImg: car1 },
  { id: 2, title: "Donut", desc: "tasty", bgImg: cars2, fgImg: car2 },
  { id: 3, title: "Cupcake", desc: "tasty", bgImg: cars3, fgImg: car3 },
  { id: 4, title: "Cinnamon roll", desc: "tasty", bgImg: cars4, fgImg: car4 },
  { id: 5, title: "Kewi juices", desc: "tasty", bgImg: cars5, fgImg: car5 },
];

export default function CardsSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-16">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              group relative bg-white rounded-2xl
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
              transition-shadow duration-300
              pt-20 pb-6 px-6 text-center overflow-visible
            "
          >
            {/* IMAGE STACK */}
            <div
              className=" 
               absolute -top-20 left-1/2 -translate-x-1/2
    w-36 h-36
    transition-transform duration-300 ease-out
    group-hover:-translate-y-2
              "
            >
              {/* Background image (clipped inside card) */}
              <img
                src={card.bgImg}
                alt=""
                className="absolute inset-0 w-full h-full object-contain rounded-3xl"
                style={{ clipPath: "inset(65% 0 0 0)" }}
              />

              {/* Foreground image (peeks out) */}
              <img
                src={card.fgImg}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-contain z-10"
              />
            </div>

            {/* Content */}
            <h3 className="text-lg font-medium -mt-2 mb-1">{card.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
