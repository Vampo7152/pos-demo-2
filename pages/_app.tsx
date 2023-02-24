import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ChakraProvider } from '@chakra-ui/react'


export const ProductContext = createContext<any>(null);
function MyApp({ Component, pageProps }: AppProps) {
  const [prod, setProd] = useState<any[]>([]);
  return (
    <>
    <ChakraProvider>
      <ProductContext.Provider value={{ prod, setProd }}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
      </ProductContext.Provider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
