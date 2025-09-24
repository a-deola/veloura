import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <Image
        src="/logo-black.png"
        alt="logo"
        width={150}
        height={100}
        priority
      />
    </div>
  );
}
