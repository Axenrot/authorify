import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[100vh] w-full flex items-center bg-black  bg-[url('/images/header-bg-transformed.jpeg')] justify-center ">
      <div className="bg-black w-full h-full absolute blur-[1px] bg-[url('/images/header-bg-transformed.jpeg')] bg-cover" />
      <div className="px-3 pt-32 items-center container mx-auto h-full blur-none py-12 flex flex-col gap-12 lg:flex-row">
        {/* hero message */}
        <div className="flex w-full h-full">
          <h1 className="flex flex-col items-center lg:items-start justify-center">
            <p className="text-2xl lg:text-3xl font-semibold">Authorify is a</p>{" "}
            <p className="font-semibold font-montserrat text-authorify-skyblue underline text-2xl lg:text-4xl">
              Digital Marketing Solution
            </p>
            <p className="text-2xl lg:text-3xl font-semibold">
              that gets you more customers.
            </p>
          </h1>
        </div>
        {/* hero image */}
        <div className="flex items-center juystify-center w-full">
          <Image
            src="/images/afy-hero-image.png"
            alt="Hero Image"
            width={450}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
