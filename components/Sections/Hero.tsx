import BooksScene from "../Scenes/BooksScene";

const Hero = () => {
  return (
    <section className="relative flex-col h-[100vh] w-full flex items-center bg-black  bg-[url('/images/header-bg-transformed.jpeg')] justify-center ">
      <div className="bg-black w-full h-full absolute blur-[1px] bg-[url('/images/header-bg-transformed.jpeg')] bg-cover" />
      <div className="px-3 items-center container mx-auto h-full blur-none py-12 flex flex-col gap-12 lg:flex-row">
        {/* hero message */}
        <div className="flex w-full  justify-center h-[30vh] lg:justify-start lg:w-1/2 lg:h-full">
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
      </div>
      <div className="lg:absolute w-full h-1/2 lg:h-full flex items-center juystify-center">
        <BooksScene />
      </div>
    </section>
  );
};

export default Hero;
