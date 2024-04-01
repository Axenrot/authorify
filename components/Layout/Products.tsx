const Products = ({ toggle }: { toggle: boolean }) => {
  return (
    <div
      data-toggle={toggle}
      className={`${
        toggle ? "" : ""
      } absolute font-bold text-5xl text-center left-0 top-full p-24 w-full bg-white border-4 rounded-sm border-authorify-skyblue text-black/50 transition-all duration-300 data-[toggle=true]:opacity-95 opacity-0`}
    >
      *Products Here*
    </div>
  );
};

export default Products;
