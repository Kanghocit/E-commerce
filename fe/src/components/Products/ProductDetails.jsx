import React, { useEffect, useState } from "react";

const selectProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["red", "black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};
const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    if (selectProduct?.images?.length > 0) {
      setMainImage(selectProduct.images[0].url);
    }
  }, [selectProduct]);
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnails ${index}`}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnails  */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnails ${index}`}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Right Side  */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectProduct.originalPrice && `${selectProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              {" "}
              $ {selectProduct.price}
            </p>
            <p className="text-gray-600 mb-4"> {selectProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color: </p>
              <div className="flex gap-2 mt-2">
                {selectProduct.colors.map((color) => (
                  <button
                    key={color}
                    className="h-8 w-8 rounded-full border"
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size: </p>
              <div className="flex gap-2 mt-2">
                {selectProduct.sizes.map((size) => (
                  <button key={size} className="px-4 rounded border">
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                  -
                </button>
                <span className="text-lg">1</span>
                <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                  +
                </button>
              </div>
            </div>
            <button className="bg-black text-white py-2 px-6 rounded w-full mb-4">
              ADD TO CART
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristic:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Band:</td>
                    <td className="py-1">{selectProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material:</td>
                    <td className="py-1">{selectProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
