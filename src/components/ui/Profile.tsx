import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  image: string;
}

const Profile: React.FC<Props> = ({ name, image }) => {
  const pathname = usePathname();
  return (
    <Link href="/" className="flex items-center gap-4 text-white">
      {pathname === "/" && <h1 className="font-semibold text-xl">{name}</h1>}
      <div className="py-2 px-3 rounded-full bg-white">
        <Image src={image} alt="icon profile" width={30} height={30} />
      </div>
    </Link>
  );
};

export default Profile;
