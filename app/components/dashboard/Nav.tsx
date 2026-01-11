import Image from "next/image";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const handleSignOut = () => {
    router.push("/");
  };
  return (
    <nav className="w-full z-50 py-[28px] px-[32px] bg-black bg-opacity-50 backdrop-blur-md">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-16">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={68}
            height={68}
          />
        </div>
        <div
          className="hidden md:flex gap-3 cursor-pointer"
          onClick={handleSignOut}
        >
          Keluar
        </div>
      </div>
    </nav>
  );
};

export default Nav;
