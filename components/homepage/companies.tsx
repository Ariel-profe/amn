import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";


const reviews = [
  {
    name: "onic",
    img: "/works/onic/logo.svg",
  },
  {
    name: "instituto san pablo",
    img: "/works/instituto-san-pablo/logo.svg",
  },
  {
    name: "titulizar",
    img: "/works/titulizar/logo.webp",
  },
  {
    name: "re ingenieria",
    img: "/works/rg-ingenieria/logo.webp",
  },
  {
    name: "mónica ojeda",
    img: "/works/monica/logo.webp",
  },
  {
    name: "valvtronic",
    img: "/works/valvtronic/logo.svg",
  },
  {
    name: "osar",
    img: "/works/osar/logo.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure className={cn("relative h-[120px] w-60 overflow-hidden flex items-center justify-center p-4")}>
        <img className="w-full"  alt="" src={img} />
    </figure>
  );
};

export function Companies() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden lg:py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
