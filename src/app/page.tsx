import Input from "@/components/input";
import Banner from "@/modules/home/banner";
import Categories from "@/modules/home/categories";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BannerImg from "../../public/images/banner@1x.jpg";
import EyeIcon from "../../public/icons/eye.svg";
import CustomImage from "@/components/customImage";

async function getData() {
  const res = await fetch(
    "https://learningapi.thespecialcharacter.com/store/products"
  );

  const json = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(json);
  }

  return json.products;
}

// const data = [
//   {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture",
//     price: 7.95,
//     description:
//       "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     rating: { rate: 4.5, count: 146 },
//   },
//   {
//     id: 20,
//     title: "DANVOUY Womens T Shirt Casual Cotton Short",
//     price: 12.99,
//     description:
//       "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     rating: { rate: 3.6, count: 145 },
//   },
// ];

export default async function Home() {
  // const router = useRouter();
  const data = await getData();

  return (
    <div>
      <CustomImage img1="https://ik.imagekit.io/mdzi40eohii/tsc/607e15d7c0c9f4037bde6f44_image_home_hero_education_x_template_b173c6c7db_TNZ_2gvf02_95be5fe4e2_nu4JKy3wF.jpg" img2="https://ik.imagekit.io/mdzi40eohii/tsc/Full_Stack_Image_daa0e85929_mkCd6n2su.png" />

    </div>
  );
}
