const Products = ({ toggle }: { toggle: boolean }) => {
  return (
    <div
      className={`${
        toggle ? "" : "hidden"
      } absolute left-0 top-full p-12 w-full bg-white border-4 rounded-sm border-authorify-skyblue text-black`}
    >
      hello world
    </div>
  );
};

export default Products;
