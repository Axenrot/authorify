import BooksScene from "../Scenes/BooksScene";

const Hero = () => {
  return (
    <section className="relative flex-col h-[100vh] w-full flex items-center bg-black  bg-[url('/images/header-bg-transformed.jpeg')] justify-center ">
      <div className="bg-black w-full h-full absolute blur-[1px] bg-[url('/images/header-bg-transformed.jpeg')] bg-cover" />
      <div className="px-3 items-center container mx-auto h-full blur-none py-12 flex flex-col gap-12 lg:flex-row">
        {/* hero message */}
        <div className="flex w-full  justify-center h-[30vh] lg:justify-start lg:w-1/2 lg:h-full text-center sceneFadeIn">
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
        {/* hero image label */}
        <div className="relative z-20 flex w-full justify-center h-[70vh] lg:justify-center lg:w-1/2 lg:h-full sceneFadeIn">
          <h2 className="absolute bottom-[15vh] flex flex-col items-center justify-center text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              You can instantly transform into a
            </p>
            <p className="font-semibold font-montserrat text-authorify-skyblue underline text-2xl md:text-3xl lg:text-4xl">
              Trusted Authority.
            </p>
          </h2>
        </div>
      </div>
      <div className="absolute w-full h-full flex items-center juystify-center book-vanish">
        <BooksScene />
      </div>
    </section>
  );
};

export default Hero;
