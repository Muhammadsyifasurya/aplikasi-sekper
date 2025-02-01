import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  peminjam: string;
  barang: string;
}

const NotificationCard: React.FC<Props> = ({ peminjam, barang }) => {
  return (
    <Link
      href="/"
      className="flex justify-center items-center hover:border-[#88B1BA] bg-white py-2 px-4 gap-4 rounded-2xl border-[3px]"
    >
      <h1>{peminjam}</h1>
      <div className="flex items-center gap-2">
        <h1>{barang}</h1>
        <Image src="/ic_share.svg" alt="icon share" width={12} height={12} />
      </div>
    </Link>
  );
};

export default NotificationCard;
