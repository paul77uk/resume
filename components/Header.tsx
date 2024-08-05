import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <main className="flex justify-between w-full bg-primary text-white px-12 py-10 font-semibold">
      {/* left */}
      <div className="flex flex-col gap-2">
        <div className="text-3xl ">Paul Vickers</div>
        <div>Full Stack Web Developer</div>
        <div className="flex gap-1 items-center text-xs">
          <FaPhoneAlt />
          +44 7537 830 800
        </div>
      </div>

      {/* middle */}
      <div className="flex flex-col justify-end text-xs">
        <div className="flex gap-1 items-center">
          <MdEmail size={15} />
          <a href="mailto:paul77uk@gmail.com">paul77uk@gmail.com</a>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col justify-end text-xs">
        <div className="flex gap-1 items-center">
          <GitHubLogoIcon />
          <a href="https://github.com/paul77uk" target="_blank">https://github.com/paul77uk</a>
        </div>
      </div>
    </main>
  );
};
export default Header;
