import React, { Suspense } from "react";
import ProductList from "@/components/productList";
import Image from "next/image";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import ProductCard from "@/components/productCard";

type Props = {};

const limit = 2;

const getData = async (page: number) => {
  try {
    const offset = page * limit - 2;

    console.log(`https://learningapi.thespecialcharacter.com/store/products?limit=${limit}&offset=${offset}`);
    
    const res = await fetch(
      `https://learningapi.thespecialcharacter.com/store/products?limit=${limit}&offset=${offset}`
    );
    const json = await res.json();
    return json;
  } catch (error) {}
};

const Products = async ({  searchParams: { page } }: Props) => {
  const currnetPage = parseInt(page || 1)
  const data = await getData(currnetPage);
  const pages = Math.ceil(data.count / limit);

  return (
    <div>
      <div className="flex flex-col gap-10">
      {data.products.map((x) => {
        return (
          <ProductCard key={x.id} x={x} page={currnetPage} first={data.products[0].id} />
        );
      })}
      </div>
      {[...Array(pages).keys()].map((x, i) => {
        return (
          <Link key={i} href={`?page=${i + 1}`}>
            {i + 1}
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
