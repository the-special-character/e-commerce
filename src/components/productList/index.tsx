import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  page: number;
};

const limit = 2;

const getData = async (page: number) => {
    try {
        
    
  const offset = page * limit - 2;
  const res = await fetch(
    `https://learningapi.thespecialcharacter.com/store/products?limit=${limit}&offset=${offset}`
  );
  const json = await res.json();
  return json;
} catch (error) {
        
}
};

const ProductList = async ({ page }: Props) => {
  const data = await getData(page);
  if(!data) return;
  
  const pages = Math.ceil(data.count / limit);


  return (
    <>
      {data.products.map((x) => {
        return (
          <div key={x.id}>
            <Image
              src={x.images[0].url}
              alt={x.title}
              height={300}
              width={200}
            />
            <h2>{x.title}</h2>
            <p>{x.description}</p>
          </div>
        );
      })}
      {[...Array(pages).keys()].map((x, i) => {
        return (
          <Link key={i} href={`?page=${i + 1}`}>
            {i + 1}
          </Link>
        );
      })}
    </>
  );
};

export default ProductList;
