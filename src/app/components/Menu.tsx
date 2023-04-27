import Link from "next/link"

const Menu = () => {
  return (
    <header className="px-8 mt-28">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4 text-gray-500 font-semibold">
        <Link href="/addition/addition-list">New Addition</Link>
        <Link href="/bedroom/bedroom-furniture">Bedroom</Link>
        <Link href="/kitchen/kitchen-furniture">Kitchen</Link>
        <Link href="/dining/dining-furniture">Dining</Link>
        <Link href="/living/living-furniture">Living</Link>
        <Link href="/door/door-furniture">Door</Link>
        <Link href="/office/office-furniture">Office Interior</Link>
        <Link href="/institute/institute-furniture">Institute</Link>
        <Link href="/hand/hand-furniture">Hand Craft</Link>
        <Link href="/about">About</Link>
        <Link href="/blog/blog-list">Blog</Link>
      </div>
    </header>
  )
}

export default Menu
