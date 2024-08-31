import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from "@/lib/apollo/apollo-provider";
import { ZustandProviders } from "@/store/ZustandProviders";
import RedirectWrapper from "./_containers/Redirect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white-dark`}>
        <ZustandProviders>
          <ApolloProvider>{children}</ApolloProvider>
        </ZustandProviders>
      </body>
    </html>
  );
}
