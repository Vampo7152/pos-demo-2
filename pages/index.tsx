/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Solana Partner Merch",
      href: "#",
      price: 20,
      color: "Free with Attendance token",
      imageSrc:
      "https://res.cloudinary.com/dtzqgftjk/image/upload/v1678791831/SolanaPartnerMerch_1_-min_c0jtuf.png",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 2,
      name: "SamoIsComing T Shirt",
      href: "#",
      color: "Free with Attendance token",
      price: 20,
      imageSrc:
      "https://res.cloudinary.com/dtzqgftjk/image/upload/v1678714674/photo_6087002594955342483_x_nvpjvm.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-10 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-12">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">powered by CandyPay X Samoyedcoin</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Pay with Solana, USDC and what not!</h1>
    </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                onClick={() => {
                  router.push(`/items/${product.id}`);
                }}
                key={product.id}
                className="group text-sm"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="italic text-gray-500">{product.color}</p>
                <p className="mt-2 font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
