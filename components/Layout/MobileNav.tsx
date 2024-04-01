import Link from "next/link";

type MobileNavProps = {
  showMenu: boolean;
};

export default function MobileNav({ showMenu }: MobileNavProps) {
  return (
    <ul
      data-show={showMenu}
      className="absolute right-0 top-full bg-gray-100/95 shadow-lg text-black shadow-black/60 rounded-md p-3 border-2 border-authorify-blue flex flex-col md:hidden fadein gap-2"
    >
      <li className="transition-all duration-200 font-medium hover:scale-105 hover:text-authorify-blue">
        <a href="#sobre">Product</a>
      </li>
      <li className="transition-all duration-200 font-medium hover:scale-105 hover:text-authorify-blue">
        <a href="#parceiras">Pricing</a>
      </li>
      <li className="transition-all duration-200 font-medium hover:scale-105 hover:text-authorify-blue">
        <a href="#solucoes">Book Library</a>
      </li>
      <li className="transition-all duration-200 font-medium hover:scale-105 hover:text-authorify-blue">
        <a href="#solucoes">Results</a>
      </li>
      <Link
        className="font-bold text-base text-start w-24 border duration-200 hover:scale-105 hover:text-authorify-blue"
        href="https://app.authorify.com/auth/login"
      >
        Login
      </Link>
      <Link
        className="whitespace-nowrap font-bold text-base text-start w-24 border duration-200 hover:scale-105 hover:text-authorify-blue"
        href="https://authorify.com/sample-book"
      >
        Free Sample
      </Link>
    </ul>
  );
}
