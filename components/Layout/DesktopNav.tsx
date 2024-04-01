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
      } hidden w-full md:flex h-full items-center gap-6`}
    >
      <li className="transition-all text-sm lg:text-lg duration-200 hover:text-authorify-skyblue h-fit nav-link">
        <button onClick={() => setProductsMenu(!productsMenu)}>Products</button>
      </li>
      <Products toggle={productsMenu} />
      <li className="transition-all text-sm lg:text-lg duration-200 hover:text-authorify-skyblue h-fit nav-link">
        <a href="https://authorify.com/pricing-plans/">Pricing</a>
      </li>
      <li className="transition-all text-sm lg:text-lg duration-200 hover:text-authorify-skyblue whitespace-nowrap h-fit nav-link">
        <a href="https://authorify.com/book-library/">Book Library</a>
      </li>
      <li className="transition-all text-sm lg:text-lg duration-200 hover:text-authorify-skyblue h-fit nav-link">
        <a href="https://authorify.com/results/">Results</a>
      </li>
      <Link
        className="ml-auto btn-secondary"
        href="https://app.authorify.com/auth/login"
      >
        Login
      </Link>
      <Link className="btn-primary " href="https://authorify.com/sample-book">
        Free Sample
      </Link>
    </ul>
  );
}
