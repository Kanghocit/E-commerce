import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=1", altText: "Product 1" },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 200,
    images: [
      { url: "https://picsum.photos/500/500?random=2", altText: "Product 2" },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 300,
    images: [
      { url: "https://picsum.photos/500/500?random=3", altText: "Product 3" },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    images: [
      { url: "https://picsum.photos/500/500?random=4", altText: "Product 4" },
    ],
  },
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      { url: "https://picsum.photos/500/500?random=1", altText: "Product 1" },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 200,
    images: [
      { url: "https://picsum.photos/500/500?random=2", altText: "Product 2" },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 300,
    images: [
      { url: "https://picsum.photos/500/500?random=3", altText: "Product 3" },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    images: [
      { url: "https://picsum.photos/500/500?random=4", altText: "Product 4" },
    ],
  },
];
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best Seller  */}
      <h2 className="text-3xl text-center font-bold mb-4"> Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women{" "}
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
    </div>
  );
};

export default Home;
