import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex w-full h-screen ">
        <div className="w-full h-screen flex justify-center items-center relative -z-10">
          <Image
            src={"/mainsushi.jpg"}
            alt="Coffee Shop"
            objectFit="cover"
            layout="fill"
            priority
          />
        <div>
          <h1 className=" font-bold text-black text-7xl z-10 relative bottom-32 ">Sushi Store</h1>
          <h1 className=" font-bold text-orange-500 text-6xl z-10 relative bottom-16">Crafted with Passion, Served with Joy</h1>
        </div>
        </div>
      </section>
      <section className=""></section>
    </main>
  );
}
