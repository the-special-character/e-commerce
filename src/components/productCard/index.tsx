"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const ProductCard = ({ params, page, x, first }: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const { push } = useRouter();

  useEffect(() => {
    if (!inView ) {
    //   push(`?page=${page + 1}`);
    }
  }, [inView, page, first]);

  return (
    <div key={x.id} className="h-screen bg-slate-300" ref={ref}>
      <Image src={x.thumbnail} alt={x.title} height={300} width={200} />
      <h2>{x.title}</h2>
      <p>{x.description}</p>
    </div>
  );
};

export default ProductCard;
