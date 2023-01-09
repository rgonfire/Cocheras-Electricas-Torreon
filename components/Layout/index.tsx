/**
 * @description  Esqueleto de cualquier pagina web del sitio.
 */

import Head from "next/head";
import { TypeLayout } from "components/types/layout.types";

const index = ({
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
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default index;
