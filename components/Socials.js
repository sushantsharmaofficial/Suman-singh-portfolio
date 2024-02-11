// links
import Link from "next/link";

// iconas
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link
        href={"https://youtube.com/@Sumansingh_13?si=BBPV3MyE3h1-oZln"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/sumansingh_13?igsh=bzJmaHBnZWViNG9s"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>

      <Link
        href={"https://x.com/sumansingh_13?t=TcTTBTRxBIb2oPVkMCHJbQ&s=09"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiTwitterXLine />
      </Link>
      <Link
        href={
          "https://www.linkedin.com/in/suman-singh-4320331a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
        }
        className=" hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/sumansingh13"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
