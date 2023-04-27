import Image from "next/image"

// export async function fetchBestSells() {
//   const res = await fetch("http://localhost:3000/api/bestSells")
//   const bestSells = await res.json()
//   return bestSells
// }

const BestSellsPage = ({ bestSells }: any) => {
  //   const bestSells = await fetchBestSells()
  return (
    <div className="bg-gray-900 mt-16 px-10">
      <h2 className="text-center text-2xl font-bold text-white">
        Best Sell Of This Year
      </h2>
      <p className="text-white text-center my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        corporis eum quidem error, debitis recusandae magni perferendis,
        reiciendis cumque cum accusamus aliquid amet maiores quo. Nesciunt,
        iusto voluptatem labore impedit doloremque voluptatibus rerum quos fuga,
        natus aliquid harum qui, aspernatur molestias quas! Aspernatur modi quos
        illo ullam culpa atque numquam?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bestSells.map((bestSell: any) => (
          <div
            key={bestSell.id}
            className="border border-gray-800 rounded-lg mt-4 p-4"
          >
            <div className="">
              <Image
                src={bestSell.img}
                width={300}
                height={200}
                alt=""
                className="rounded-lg mx-auto"
              />
            </div>
            <p className="text-white mt-2">{bestSell.description}</p>
            <div className="flex justify-between mt-2 px-2">
              <h2 className="text-white font-bold">{bestSell.name}</h2>
              <h2 className="text-white font-bold">
                Total Sell: {bestSell.total}
              </h2>
              <button className="text-white font-bold">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestSellsPage
