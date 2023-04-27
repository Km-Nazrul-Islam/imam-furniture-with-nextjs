import Image from "next/image"
import {
  FaEnvelope,
  FaPhoneVolume,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa"

const Header = () => {
  return (
    <section className="bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 md:fixed md:top-0 md:w-full md:z-10">
      <div className="wrapperNavbar flex flex-col md:flex-row lg:flex-row justify-center items-center px-6">
        <div className="left basis-4/12">
          <Image
            className="p-2 cursor-pointer"
            src="/img/logo/1.png"
            width={200}
            height={150}
            alt=""
          />
        </div>

        <div className="middle basis-4/12 justify-center">
          <div className="flex flex-col md:flex-row lg:flex-row items-center gap-2 justify-center">
            <FaPhoneVolume className="text-red-500" />
            <p className="cursor-pointer">call: +880 17 22 26 20 41</p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2">
            <FaEnvelope className="text-red-500" />
            <p className="cursor-pointer">
              email: imamfurnituremart24@gmail.com
            </p>
          </div>
        </div>

        <div className="right basis-4/12 flex flex-col md:flex-row lg:flex-row justify-end items-center gap-4">
          <div className="w-1/2 h-8 border border-red-500 rounded-2xl flex items-center">
            <FaSearch className="text-red-500 ml-1" />
            <input
              className="border-none text-gray-600 bg-white border-0 w-9/12 focus:outline-none ml-2"
              type="text"
              placeholder="search your products"
            />
          </div>
          <div>
            <FaShoppingCart className="text-3xl text-red-500 cursor-pointer" />
          </div>
          <div>
            <Image
              className="rounded-full object-cover cursor-pointer"
              src="/img/person/profile9.png"
              width={38}
              height={38}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <hr className="text-xl border-1 border-red-400 my-2" /> */}
    </section>
  )
}

export default Header
