import { format } from "date-fns";
import Link from "next/link";

type CardNewProps = {
  data: {
    img: string;
    title: string;
    description: string;
    date: Date;
    link: string;
  };
};

const CardNew: React.FC<CardNewProps> = ({ data }) => {
  return (
    <div className="w-full max-w-[440px]">
      <img className="w-full h-[260px] rounded-[40px]" src={data.img} alt="" />
      <span className="flex items-center justify-between font-medium text-white text-xl mt-5 mb-5">
        {data.title}{" "}
        <Link target="_blank" href={data.link} rel="noopener noreferrer">
          <img src="img/icon-arrow-link.svg" alt="" />
        </Link>
      </span>
      <span className="text-[#A1A7BB] font-light h-[66px] mb-8 block">
        {data.description}
      </span>
      <span className="text-[#A1A7BB] font-light italic block">
        {format(data.date, "hh:mm aa - MMMM do, yyyy")}
      </span>
    </div>
  );
};

export default CardNew;
