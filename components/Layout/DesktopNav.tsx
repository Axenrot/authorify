import Link from "next/link";
import { useState } from "react";
import Products from "./Products";

type DesktopNavProps = {
  color?: string;
};

export default function DesktopNav({ color }: DesktopNavProps) {
  const [productsMenu, setProductsMenu] = useState<boolean>(false);
  return (
    <ul
      className={`${
        color ? `text-${color}` : "text-white"
      } hidden w-full fadein md:flex gap-6`}
    >
      <li className="transition-all text-lg duration-200 hover:text-authorify-skyblue nav-link">
        <button onClick={() => setProductsMenu(!productsMenu)}>Products</button>
      </li>
      {productsMenu && <Products />}
      <li className="transition-all text-lg duration-200 hover:text-authorify-skyblue nav-link">
        <a href="https://authorify.com/pricing-plans/">Pricing</a>
      </li>
      <li className="transition-all text-lg duration-200 hover:text-authorify-skyblue nav-link">
        <a href="https://authorify.com/book-library/">Book Library</a>
      </li>
      <li className="transition-all text-lg duration-200 hover:text-authorify-skyblue nav-link">
        <a href="https://authorify.com/results/">Results</a>
      </li>
      <Link
        className="ml-auto flex items-center justify-center text-white text-base font-medium w-24 border duration-200 border-white/5 rounded-md hover:text-authorify-skyblue"
        href="https://app.hubbi.app/"
      >
        Login
      </Link>
      <Link
        className="flex items-center justify-center text-white text-base font-medium w-24 border duration-200 border-white/5 rounded-md hover:text-authorify-skyblue"
        href="https://app.hubbi.app/cadastro"
      >
        Registrar
      </Link>
    </ul>
  );
}
