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
      <section className="h-screen w-full flex justify-center text-white">
      <div className="w-full h-screen absolute flex justify-center items-center  -z-10">
          <Image
            src={"/marmordark.jpg"}
            alt="Coffee Shop"
            objectFit="cover"
            layout="fill"
            priority
          />
        </div>
        <div className="w-1/2 relative top-10 gap-10">
        <h1 className="flex justify-center items-center text-6xl font-display py-20 text-white">TOKYO-INSPIRED JAPANESE CUISINE & COCKTAILS</h1>
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
            <div className="w-1/2 h-full ml-20 text-l leading-relaxed mt-10">
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <button type="button"  className="transition duration-300 ease-in-out hover:bg-purple-300 font-light py-3 px-7 bg-orange-500 rounded-full text-xl text-black mt-28">Explore the Menu</button>
              <div className="w-full h-1/2 relative top-40 ml-32">
            <Image
                  src={"/mainsushi.jpg"}
                  alt="Coffee Shop"
                  objectFit="cover"
                  layout="fill"
                  priority
                />
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="h-[150vh] w-full flex justify-center">
      <div className="w-full h-[150vh] flex justify-center items-center absolute -z-10">
          <Image
            src={"/marmorwhite.jpg"}
            alt="Coffee Shop"
            objectFit="cover"
            layout="fill"
            priority
          />        
        </div>
        <div className=" absolute left-40 mt-40 text-black">
          <div className="text-6xl">
          <h1>DROP BY,</h1>
          <h1>IT'S SUSHI TIME SOMEWHERE</h1>
          </div>
            <div className="flex flex-row w-full h-[85vh]">
              <div className="w-2/5 h-[85vh] flex justify-center items-center absolute mt-20">
              <Image
                src={"/themainburger.jpg"}
                alt="Coffee Shop"
                objectFit="cover"
                layout="fill"
                priority
              />   
              </div>    
              <div className="w-1/2 h-full text-l">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet excepturi similique repellat velit esse exercitationem laudantium obcaecati veritatis, nisi dolore, facilis dolor quae rerum fugit labore doloribus! Non voluptate veniam doloribus expedita, explicabo rerum aliquid sit tenetur unde alias neque velit dolorum officia, voluptatibus harum blanditiis, dignissimos corrupti similique.</p>
              </div> 
            
          </div>
        </div>
      </section>
    </main>
  );
}
