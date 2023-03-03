import React, { useEffect, useState } from "react";

const FakeStore = () => {
  const allCategory = ["ALL"];
  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const getAllCategories = async () => {
    const allCategories = await fetch(
      "https://fakestoreapi.com/products/categories"
    ).then((res) => res.json());
    console.log(allCategories);
    setCategory([...allCategory, ...allCategories]);
  };

  const getAllProducts = async () => {
    const allProducts = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
    setProducts(allProducts);
  };

  const getSelectedProducts = async (category) => {
    if (category === "ALL") return getAllProducts();
    const allSelectedProducts = await fetch(
      `https://fakestoreapi.com/products/category/${category.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
    setProducts(allSelectedProducts);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getSelectedProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {console.log(categories)}
      <select
        name="categories"
        id="categories"
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedCategory(e.target.value);
        }}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
          </select>
    </>
  );
};

export default FakeStore;
