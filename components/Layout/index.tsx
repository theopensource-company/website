import Head from "next/head";
import { ReactNode } from "react";

import Navbar from "./Navbar";

type Props = {
  title?: string;
  description?: string;
  robots?: string;
  children: ReactNode;
};

const Layout = ({ title, description, robots, children }: Props) => (
  <>
    <Head>
      <title>
        {title
          ? `${title} - The Open Source Company`
          : "The Open Source Company"}
      </title>

      <meta name="charset" content="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta name="robots" content={robots ?? "index, follow"} />

      <meta name="title" content={title ?? "The Open Source Company"} />
      <meta name="og:title" content={title ?? "The Open Source Company"} />
      <meta name="og:site_anme" content={title ?? "The Open Source Company"} />
      <meta name="twitter:title" content={title ?? "The Open Source Company"} />

      <meta
        name="description"
        content={
          description ??
          "We love & build open source software. Come join us on our journey to make the world a better place!"
        }
      />
      <meta
        name="og:description"
        content={
          description ??
          "We love & build open source software. Come join us on our journey to make the world a better place!"
        }
      />
      <meta
        name="twitter:description"
        content={
          description ??
          "We love & build open source software. Come join us on our journey to make the world a better place!"
        }
      />
    </Head>
    <Navbar />
    <div id="app">{children}</div>
  </>
);

export default Layout;
