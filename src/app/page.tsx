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
          <h1 className=" font-bold text-black text-8xl z-10 relative bottom-32 ">Sushi Store</h1>
          <h1 className=" font-bold text-orange-500 text-6xl z-10 relative bottom-20 left-5">Crafted with Passion, Served with Joy</h1>
        </div>
        </div>
      </section>
      <section className="h-screen w-full flex justify-center bg-orange-50 ">
        <div className="w-1/2 relative top-20 gap-10">
        <h1 className="flex justify-center items-center text-6xl text-center font-display mb-10">TOKYO-INSPIRED JAPANESE CUISINE & COCKTAILS</h1>
        <div className="w-full h-1/2 flex">
          <div className="w-1/3 h-full relative">
            <Image
                  src={"/mainsushi.jpg"}
                  alt="Coffee Shop"
                  objectFit="cover"
                  layout="fill"
                  priority
                />
            </div>
            <div className="w-1/2 h-full ml-20 text-l leading-relaxed mt-1">
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <button type="button"  className="transition duration-300 ease-in-out hover:bg-purple-300 font-light border py-3 px-7 bg-orange-100 rounded-full text-xl mt-28">Button</button>

            </div>
        </div>
</div>
      </section>
    </main>
  );
}
