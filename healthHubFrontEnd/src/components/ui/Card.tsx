import { cn } from "@/lib/utils";

function Card({
  title,
  description,
  image,
  gap,
}: {
  title: string;
  description: string;
  image: string;
  gap?: number | 1;
}) {
  return (
    <div
      className={`${cn(
        "min-w-[300px] min-h-[100px] bg-white rounded-lg shadow-lg ring-2 ring-blues-500/20 p-10",
        gap == 2 && "col-span-2",
        gap == 1 && "col-span-1"
      )}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-start">
          <img src={image} alt={title} />
        </div>
        <h3 className="text-2xl font-semibold text-blues-700">{title}</h3>
        <p className="text-base text-neutral-600 font-semibold leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
