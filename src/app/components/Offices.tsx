import Image from "next/image"
// export async function fetchOffices() {
//   const response = await fetch("http://localhost:3000/")
//   const offices = await response.json()
//   return offices
// }

const Offices = ({ offices }: any) => {
  //   const offices = await fetchOffices()
  return (
    <section className="bg-gray-900 py-16 px-10">
      <h2 className="text-4xl text-white text-center font-extralight mb-16">
        New Office Interior Design
      </h2>
      <div className="officeWrapper flex flex-col md:flex-row lg:flex-row gap-16">
        <div className="leftOffice basis-4/12">
          <Image
            className="animatedImage"
            src="/img/office/office.png"
            width={250}
            height={250}
            alt=""
          />
          <h1 className="text-2xl text-white font-extralight mt-2">
            Get Office Design Ideas
          </h1>
          <hr className="text-xl border bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600" />
          <p className="text-gray-300 mt-2 text-justify">
            Office Design has become quite trendy, and there are lots of office
            design ideas out there. You are creating a work area where your
            employees will spend a large part of their day, so investing time
            and energy looking into office ideas may well pay off in the long
            run. Planning your home office? We have lots of home office ideas to
            share with you - check them out today.
            <br />
            <br />
            One of the best ways to figure out what will work in your actual
            office space is with an office design software. The RoomSketcher App
            is a great online tool to use for planning your office design.
            Create layouts, try out different ideas, find furniture and more.
          </p>
        </div>
        <div className="rightOffice basis-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offices &&
            offices.map((office: any) => (
              <div
                key={office.id}
                className="officeCard bg-gray-800 p-4 border border-gray-700 rounded-lg cursor-pointer"
              >
                <Image
                  className="mx-auto rounded-lg"
                  src={office.img}
                  width={200}
                  height={200}
                  alt=""
                />
                <h2 className="text-xl text-white text-center font-bold mt-1">
                  {office.name}
                </h2>
                <p className="text-gray-400 text-center mt-2">
                  {office.description}
                </p>
                <div className="text-center mt-2">
                  <button className="text-white px-8 py-1 rounded-full border border-blue-600 hover:bg-blue-600">
                    See Details
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Offices
