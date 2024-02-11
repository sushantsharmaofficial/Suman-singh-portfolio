// next image
import Image from "next/image";

// next link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className=" absolute z-30 w-full flex items-center  px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-2 py-8">
          {/* header logo */}
          <Link href="/">
            <div className="flex w-full items-center gap-2 ">
              <h3 className=" text-3xl xl:text-5xl font-semibold">suman</h3>{" "}
              <span className=" text-3xl relative xl:text-5xl font-extralight">
                singh
              </span>
              <span className=" mt-4 xl:mt-7 bottom-0 border border-red-800 bg-red-900 h-1 w-1"></span>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
