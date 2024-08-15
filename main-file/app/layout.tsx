import type { Metadata } from "next";
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";
import Head from "next/head";

export const metadata: Metadata = {
  title: "AMPRO | Software Development & IT Solutions",
  description: "Software Development & IT Solutions",
  keywords: [
    "Software",
    "IT",
    "Agency",
    "Javascript",
    "Typescript",
    "React",
    "nextjs",
  ],
  authors: [
    {
      name: "AMPRO",
      url: "https://www.amprotech.co.nz",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-FQ0H1RLLHD"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FQ0H1RLLHD'), {
          page_path: window.location.pathname,
        };
        `,
        }} />
      </head>
      <body>
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}
