// async function fetchKitchens() {
//   const res = await fetch("http://localhost:3000/api/kitchens")
//   const kitchens = await res.json()
//   return kitchens
// }

import Image from "next/image"
import Link from "next/link"

const KitchensPage = () => {
  //   const kitchens = await fetchKitchens()
  return (
    <section className="bg-gray-900 p-10">
      <h2 className="text-4xl text-white text-center font-extralight my-4">
        New Kitchen Design Interior
      </h2>
      <p className="text-gray-300 text-center">
        Imam Stylish Kitchen Interior is a design company that specializes in
        creating modern and elegant kitchen spaces. Their designs are
        characterized by clean lines, minimalist aesthetics, and the use of
        high-quality materials. With a focus on functionality and style, Imam
        Stylish Kitchen Interior creates beautiful spaces for cooking and
        entertaining.
      </p>
      <div className="kitchenWrapper flex flex-col md:flex-row lg:flex-row gap-4 mt-16">
        <div className="rightKitchen basis-6/12">
          <div className="rightKitchenRapper flex flex-col md:flex-row lg:flex-row gap-4">
            <div className="singleSection kitchenAnimation basis-6/12 border border-gray-800 rounded-lg p-4">
              <Link href="/kitchen/kitchen-furniture">
                <Image
                  className="mx-auto mt-6 rounded-lg cursor-pointer"
                  src="/img/kitchen/kitchen2.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </Link>
            </div>
            <div className="tripleSection basis-6/12">
              <div className="kitchenAnimation border border-gray-800 rounded-lg p-4 mb-4">
                <Image
                  className="mx-auto rounded-lg cursor-pointer"
                  src="/img/kitchen/kitchen3.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <div className="kitchenAnimation border border-gray-800 rounded-lg p-4">
                <Image
                  className="mx-auto rounded-lg cursor-pointer"
                  src="/img/kitchen/kitchen4.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="leftKitchen basis-6/12">
          {/* <Lottie
            animationData={parrot}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "auto" }}
          /> */}
          <Image
            className="mx-auto animatedKitchenImage"
            src="/img/kitchen/4.png"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default KitchensPage
