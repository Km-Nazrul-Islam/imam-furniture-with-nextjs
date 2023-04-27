import Image from "next/image"

// async function fetchProducts() {
//   const response = await fetch("http://localhost:3000/api/products")
//   const products = await response.json()
//   return products
// }

const Products = ({ products }: any) => {
  // const products = await fetchProducts()
  return (
    <div className="bg-gray-900 mt-8">
      <h2 className="text-4xl text-white text-center font-extralight py-8">
        Find Your Products
      </h2>
      <p className="text-gray-300 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae
        nostrum reprehenderit soluta,libero sed delectus. Quidem, porro est
        aspernatur cum blanditiis quidem rem, quo tempore nulla, libero sed
        delectus. Quidem, porro est aspernatur cum blanditiis
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-16 px-8">
        {products &&
          products.map((product: any) => (
            <div
              key={product.id}
              className="imageCard border cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg"
            >
              <Image
                src={product.img}
                width={150}
                height={150}
                alt=""
                className="mx-auto rounded-lg object-cover p-4"
              />
              <h2 className="font-bold">{product.name}</h2>
              <p>{product.details}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Products
