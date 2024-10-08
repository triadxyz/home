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
      <img className="w-full h-[210px] lg:h-[260px]" src={data.img} alt="" />
      <div className="flex justify-between font-medium text-white lg:text-xl mt-5 mb-5">
       <div className="w-3/4"> {data.title}{" "}</div>
        <Link target="_blank" href={data.link} rel="noopener noreferrer">
          <img src="img/icon-arrow-link.svg" alt="" />
        </Link>
      </div>
      <span className="text-fire-gray-medium/80 font-light text-sm lg:text-base  lg:h-[66px] block">
        {data.description}
      </span>

      <div className="text-fire-gray-medium text-sm lg:text-base font-light mt-4 lg:h-[66px] block">
        {data.date.toDateString()}
      </div>
    </div>
  );
};

export default CardNew;
