"use client"
import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import BestSellsPage from "./components/BestSells"
import CarpentersPage from "./components/Carpenters"
import Header from "./components/Header"
import KitchensPage from "./components/Kitchens"
import Menu from "./components/Menu"
import Offices from "./components/Offices"
import Products from "./components/Products"

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [offices, setOffices] = useState([])
  // const [kitchens, setKitchens] = useState([])
  const [bestSells, setBestSells] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/api/products")
      const products = await res.json()
      setProducts(products)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    const fetchOffices = async () => {
      const res = await fetch("http://localhost:3000/api/offices")
      const offices = await res.json()
      setOffices(offices)
    }

    fetchOffices()
  }, [])

  useEffect(() => {
    const fetchBestSells = async () => {
      const res = await fetch("http://localhost:3000/api/bestSells")
      const bestSells = await res.json()
      setBestSells(bestSells)
    }
    fetchBestSells()
  }, [])

  // useEffect(() => {
  //   const fetchKitchens = async () => {
  //     const res = await fetch("http://localhost:3000/api/kitchen")
  //     const kitchens = await res.json()
  //     setKitchens(kitchens)
  //   }
  //   fetchKitchens()
  // }, [])

  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <Products products={products} />
      <Offices offices={offices} />
      <KitchensPage />
      <BestSellsPage bestSells={bestSells} />
      <CarpentersPage />
    </>
  )
}

export default HomePage
