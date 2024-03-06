import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProblemCardProps {
  image: any;
  title: string;
  range: string;
  referProp: string;
}

const ProblemCards: React.FC<ProblemCardProps> = ({
  image,
  title,
  range,
  referProp,
}) => {
  return (
    <div className="bg-white rounded-2xl ">
      <Link className="" href={`/booking?q=${referProp}`}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="h-[160px] w-[250px] rounded-t-2xl"
        />
        <div className="py-3 px-4 cursor-pointer font-dmsans">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className=" text-[#818df8] font-bold leading-8 tracking-wider">
            {range}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProblemCards;
