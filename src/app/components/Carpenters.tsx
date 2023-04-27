import Image from "next/image"

const CarpentersPage = () => {
  return (
    <section className="bg-gray-900 p-10">
      <h2 className="text-4xl text-white text-center font-extralight my-4">
        Our Experianced Carpenters
      </h2>
      <p className="text-gray-300 text-center text-clip">
        Imam Furniture Mart is proud to offer the services of our team of
        experienced carpenters. With years of training and practical experience,
        our skilled craftsmen bring their expertise to every project they
        undertake. From custom furniture pieces to home renovations, our
        carpenters work with precision and attention to detail to ensure the
        highest quality results.
      </p>
      <div className="carpentersWrapper grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-16 justify-around">
        <div className="carpentaersCard rounded-lg cursor-pointer border border-gray-800 p-4">
          <Image
            className="rounded-full mx-auto mb-4"
            src="/img/person/profile1.jpg"
            width={80}
            height={80}
            alt=""
          />
          <h2 className="text-center text-white font-bold mb-1">
            Zulfiqar Ali || Bed Design Expertise
          </h2>
          <p className="text-center text-gray-400">
            Imam Bed Design Expertise: Crafting exceptional, functional, and
            aesthetically pleasing beds with intricate details that inspire
            comfort and relaxation.
          </p>
        </div>
        <div className="carpentaersCard rounded-lg cursor-pointer border border-gray-800 p-4">
          <Image
            className="rounded-full mx-auto mb-4"
            src="/img/person/profile2.jpg"
            width={80}
            height={80}
            alt=""
          />
          <h2 className="text-center text-white font-bold mb-1">
            Haidar Miah || Office Design Expertise
          </h2>
          <p className="text-center text-gray-400">
            Imam Bed Design Expertise: Crafting exceptional, functional, and
            aesthetically pleasing beds with intricate details that inspire
            comfort and relaxation.
          </p>
        </div>
        <div className="carpentaersCard rounded-lg cursor-pointer border border-gray-800 p-4">
          <Image
            className="rounded-full mx-auto mb-4"
            src="/img/person/profile3.jpg"
            width={80}
            height={80}
            alt=""
          />
          <h2 className="text-center text-white font-bold mb-1">
            Musfiq Ali || Door Design Expertise
          </h2>
          <p className="text-center text-gray-400 font-extralight">
            Imam Bed Design Expertise: Crafting exceptional, functional, and
            aesthetically pleasing beds with intricate details that inspire
            comfort and relaxation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CarpentersPage
