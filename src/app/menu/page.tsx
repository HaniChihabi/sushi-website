import Image from "next/image";
import CustomDivider from "../components/CustomDivider";

export default function Menu() {
    return(
        <>
        <section className="h-[12vh] w-full bg-black">

        </section>

        <section className="w-full h-[30vh]">
            <div className="w-full h-full flex justify-center items-center relative -z-10">
                <Image
                    src={"/marmorwhite.jpg"}
                    alt="Coffee Shop"
                    objectFit="cover"
                    layout="fill"
                    priority
                />
                <div className="absolute text-center text-6xl flex">
                    <h1 className=" font-bold text-black z-10 relative right-0 mb-0">Menu</h1>
                </div>
            </div>

        </section>
        
        <section className="w-full h-[200vh] flex justify-center items-center relative -z-10">
        <div className="w-full h-full flex justify-center items-center relative -z-10">
            <Image
                    src={"/marmordark.jpg"}
                    alt="Coffee Shop"
                    objectFit="cover"
                    layout="fill"
                    priority
                />
            <div className="absolute w-3/5 h-full mt-40 text-white">
                <div className="ml-4 leading-loose">
                    <h1 className="text-5xl text-orange-500 font-bold">DAY TO NIGHT</h1>
                    <h2>SERVED DAILY 12PM - 10PM</h2>
                </div>
                {/* APPETIZER */}
                <div className="ml-4 mt-20">
                    <h1 className="font-bold text-3xl">APPETIZER</h1>
                    <p>Im a description for a section of your menu. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />

                {/* SPECIAL SUSHI ROLLS */}

                <div className="ml-4 mt-32">
                    <h1 className="font-bold text-3xl">SPECIAL SUSHI ROLLS</h1>
                    <p>Im a description for a section of your menu. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />


                {/* NIGIRI */}

                <div className="ml-4 mt-32">
                    <h1 className="font-bold text-3xl">NIGIRI</h1>
                    <p>Im a description for a section of your menu. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Steamed Buns</h1>
                        <h1 className="mr-4 font-bold text-xl">6.00$</h1>
                    </div>
                    <p>Im a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <CustomDivider thickness="h-0.5" color="bg-neutral-700" margin="my-8" />
                



                
            </div>
            </div>
        </section>
        </>
    )
}