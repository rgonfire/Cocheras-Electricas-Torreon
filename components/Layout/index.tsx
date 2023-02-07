/**
 * @description  Esqueleto de cualquier pagina web del sitio.
 */

import Head from "next/head";
import { TypeLayout } from "components/types/layout.types";
import Navbar from "components/Navbar/Index";
import Footer from "components/Footer/Index";

const Index = ({
  title,
  metadescription,
  children,
}: TypeLayout): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metadescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main>{children}</main>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Index;
