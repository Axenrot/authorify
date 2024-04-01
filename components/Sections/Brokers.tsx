// "use client";
import fs from "fs";
import { brokersReveal } from "@/utils/animations";
import Image from "next/image";
import { useEffect } from "react";

const Brokers = () => {
  const images = fs
    .readdirSync("./public/images/companies")
    .map((file) => `/images/companies/${file}`);

  // useEffect(() => {
  //
  // }, []);

  return (
    <section className="relative flex-col h-fit w-full flex items-center bg-black shadow-xl shadow-black justify-center text-white">
      <div className="px-3 items-center container mx-auto h-full blur-none py-24 flex flex-col gap-12">
        {/* Brokers message */}

        <h2 className="broker-title whitespace-nowrap text-center font-montserrat font-extrabold mb-12 flex flex-col text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl items-center lg:items-start justify-center animate-title">
          Elite brokers choose Authorify.
        </h2>

        {/* Brokers image */}
        <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center invert">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Company"
              width={300}
              height={131}
              className="w-2/5 mx-auto broker"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brokers;
