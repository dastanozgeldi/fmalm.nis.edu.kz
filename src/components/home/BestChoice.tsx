import Image from "next/image";
import bestChoice from "@/lib/images/best-choice.png";

export const BestChoice = () => {
  return (
    <section className="flex flex-col lg:flex-row space-x-8 items-center">
      <div className="w-1/3">
        <Image alt="Best Choice" className="rounded-lg" src={bestChoice} />
      </div>
      <div className="w-2/3 space-y-6 p-4">
        <h1 className="text-5xl font-extrabold">Best choice for your child!</h1>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          maiores fugiat molestias, aliquid, voluptatem placeat nesciunt
          perferendis aut sint consectetur laudantium amet rerum ea possimus eos
          tempore qui. Hic, temporibus?
        </p>

        {/* Stats Cards */}
        <div className="flex">
          <div className="w-[150px] h-[150px] bg-secondary text-gray-100 text-center p-3">
            <h1 className="text-3xl font-extrabold">698</h1>
            <p>graduated since 2015-2022</p>
          </div>
          <div className="w-[150px] h-[150px] bg-green-600 text-gray-100 text-center p-3">
            <h1 className="text-3xl font-extrabold">23</h1>
            <p>studying abroad</p>
          </div>
          <div className="w-[150px] h-[150px] bg-gray-600 text-gray-100 text-center p-3">
            <h1 className="text-3xl font-extrabold">429</h1>
            <p>studying in Kazakhstan</p>
          </div>
          <div className="w-[150px] h-[150px] bg-orange-600 text-gray-100 text-center p-3">
            <h1 className="text-3xl font-extrabold">206</h1>
            <p>studying in Nazarbayev University</p>
          </div>
        </div>
      </div>
    </section>
  );
};
