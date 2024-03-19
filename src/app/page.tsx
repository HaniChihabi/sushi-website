import Image from "next/image";
import {Divider} from "@nextui-org/react";
import CustomDivider from './components/CustomDivider'; // Adjust the import path as necessary

export default function Home() {
  return (
    <main>
{/* test */}
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
            <h1 className=" font-bold text-orange-500 text-6xl z-10 relative bottom-20 left-5">Crafted with Passion, Served with Joy</h1>
          </div>
        </div>
      </section>

      <section className="h-screen w-full flex justify-center">
        <div className="w-full h-screen absolute flex justify-center items-center  -z-10">
          <Image
            src={"/marmordark.jpg"}
            alt="Coffee Shop"
            objectFit="cover"
            layout="fill"
            priority
          />
        </div>
        <div className="w-1/2 relative top-10 gap-10 text-white">
          <h1 className="flex justify-center items-center text-5xl font-bold py-20">TOKYO-INSPIRED JAPANESE CUISINE & COCKTAILS</h1>
          <div className="w-full h-1/2 flex">
            <div className="w-1/3 h-full relative">
              <Image
                src={"/sushi3.jpg"}
                alt="Coffee Shop"
                objectFit="cover"
                layout="fill"
                priority
              />
            </div>
            <div className="w-1/2 h-full ml-20 text-l leading-relaxed mt-10">
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <button type="button"  className="transition duration-300 ease-in-out hover:bg-purple-300 font-light py-3 px-7 bg-orange-500 rounded-full text-xl text-black mt-28">Explore the Menu</button>
            </div>
          </div>
          <div className="w-full h-1/2 relative top-0 flex">
            <div className="w-1/3 h-2/3 relative right-80 bottom-10">
              <Image
                src={"/sushi4.jpg"}
                alt="Coffee Shop"
                objectFit="cover"
                layout="fill"
                priority
              />
            </div>
            <div className="w-full h-1/2 relative left-56">
              <Image
                src={"/sushi5.jpg"}
                alt="Coffee Shop"
                objectFit="cover"
                layout="fill"
                priority
              />
            </div>
          </div>
      </div>
      </section>
      
      <section className="h-screen w-full flex justify-center text-white">
  <div className="w-full h-screen absolute flex justify-center items-center -z-10">
    <Image
      src={"/marmorwhite.jpg"}
      alt="Coffee Shop"
      objectFit="cover"
      layout="fill"
      priority
    />
  </div>
  <div className="absolute left-40 mt-40 text-black gap-x-10">
    <div className="text-5xl text-orange-500 font-bold">
      <h1>DROP BY,</h1>
      <h1>IT'S SUSHI TIME SOMEWHERE</h1>
    </div>
    {/* Flex container for aligning paragraph and image side by side */}
    <div className="flex w-full mt-20 justify-between gap-x-10">
      <div className="w-1/4 text-l text-black">
        <p className="text-xl">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
        <button type="button" className="transition duration-300 ease-in-out hover:bg-purple-300 font-light py-3 px-7 bg-orange-500 rounded-full text-xl text-black mt-28">Explore the Menu</button>
      </div>
      {/* Image container adjusted to be next to the paragraph */}
      <div className="w-1/2 h-auto mr-40">
      <img
          src={"/sushi6.jpg"}
          alt="Sushi"
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        />  
      </div>
    </div>
  </div>
</section>


      <section className="h-[150vh] w-full flex justify-center">
        <div className="w-full h-[150vh] flex justify-center items-center absolute -z-10">
          <Image
            src={"/marmordark.jpg"}
            alt="Coffee Shop"
            objectFit="cover"
            layout="fill"
            priority
          />        
        </div>
        <div className=" absolute left-40 mt-40 text-black gap-x-10">
          <div className="text-5xl text-orange-500 font-bold">
            <h1>DROP BY,</h1>
            <h1>IT'S SUSHI TIME SOMEWHERE</h1>
          </div>
          <div className="flex flex-row w-full h-[100vh] gap-x-64">
            <div className="w-2/5 flex justify-center items-center relative mt-20"> {/* Adjusted for image */}
              <Image
                src={"/sushishop.jpg"}
                alt="Coffee Shop"
                objectFit="cover"
                layout="fill"
                priority
              />   
            </div>    
            <div className="w-1/4 mt-20 h-f text-l text-white">
              <p className="text-xl">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              <div className="mt-40">                
                <CustomDivider thickness="h-0.5" color="bg-white" margin="my-8" />
                <h1 className="text-3xl font-bold">Address</h1>
                <div className="text-l mt-2">
                  <p>500 TERRY FRANCINE STREET</p>
                  <p>SAN FRANCISCO, CA 94158</p>
                </div>
              </div>
              <div className="mt-20">                
                <CustomDivider thickness="h-0.5" color="bg-white" margin="my-8" />
                <h1 className="text-3xl font-bold">Address</h1>
                <div className="text-l mt-2">
                  <p>500 TERRY FRANCINE STREET</p>
                  <p>SAN FRANCISCO, CA 94158</p>
                </div>
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
        <div className="absolute left-40 mt-40 text-black gap-x-10">
          <div className="text-5xl text-orange-500 font-bold">
            <h1>WHAT OUR CUSTOMERS </h1>
            <h1>SAY ABOUT US</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
