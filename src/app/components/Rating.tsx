import FiveStar from "./FiveStar";

export default function Rating() {
  return (
      <div>
          <div className="relative ml-40 mt-32 text-5xl text-orange-500 font-bold">
              <h1>WHAT OUR CUSTOMERS</h1>
              <h1>SAY ABOUT US</h1>
          </div>
          <div className="mt-0 w-full grid grid-cols-2 grid-rows-2 py-24 px-24 relative bottom-10">
              <div className=" p-6 border-t-2 border-l-2 bg-gray-50 border-black">
                  <div className="px-8 py-12">
                      <p className="text-l w-1/2">Im a testimonial. Click to edit me and add text that says something nice about you and your services.</p>
                      <h1 className="mt-5 font-bold">hgv ghbh</h1>
                      <FiveStar />
                  </div>
              </div>
              <div className="bg-gray-50 p-6 border-t-2 border-r-2 border-l-2 border-black">
                  <div className="px-8 py-12">
                      <p className="text-l w-1/2">Im a testimonial. Click to edit me and add text that says something nice about you and your services.</p>
                      <h1 className="mt-5 font-bold">hgv ghbh</h1>
                      <FiveStar />
                  </div>
              </div>
              <div className="bg-gray-50 p-6 border-t-2 border-l-2 border-b-2 border-black">
                  <div className="px-8 py-12">
                      <p className="text-l w-1/2">Im a testimonial. Click to edit me and add text that says something nice about you and your services.</p>
                      <h1 className="mt-5 font-bold">hgv ghbh</h1>
                      <FiveStar />
                  </div>
              </div>
              <div className="bg-gray-50 p-6 border-2 border-black">
                  <div className="px-8 py-12">
                      <p className="text-l w-1/2">Im a testimonial. Click to edit me and add text that says something nice about you and your services.</p>
                      <h1 className="mt-5 font-bold">hgv ghbh</h1>
                      <FiveStar />
                  </div>
              </div>
          </div>
      </div>
  );
}
