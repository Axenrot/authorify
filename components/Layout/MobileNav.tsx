import Link from "next/link";

type MobileNavProps = {
  showMenu: boolean;
};

export default function MobileNav({ showMenu }: MobileNavProps) {
  return (
    <ul
      data-show={showMenu}
      className="absolute right-0 top-full bg-gray-100/95 shadow-lg shadow-black/60 rounded-md p-2 flex flex-col md:hidden fadein gap-2 text-blue-blue6"
    >
      <li className="transition-all duration-200 hover:scale-105">
        <a href="#sobre">Product</a>
      </li>
      <li className="transition-all duration-200 hover:scale-105">
        <a href="#parceiras">Pricing</a>
      </li>
      <li className="transition-all duration-200 hover:scale-105">
        <a href="#solucoes">Book Library</a>
      </li>
      <li className="transition-all duration-200 hover:scale-105">
        <a href="#solucoes">Results</a>
      </li>
      <Link
        className="flex items-center justify-center text-white bg-blue-blue6 text-base font-medium w-24 border duration-200 border-blue-blue6 rounded-md hover:scale-105"
        href="https://app.authorify.com/auth/login"
      >
        Login
      </Link>
      <Link
        className="flex items-center justify-center text-white bg-blue-blue6 text-base font-medium w-24 border duration-200 border-blue-blue6 rounded-md hover:scale-105"
        href="https://authorify.com/sample-book"
      >
        Free Sample
      </Link>
    </ul>
  );
}
