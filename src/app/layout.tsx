import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Footer from "@/components/shared/Footer";
import Providers from "@/lib";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head"; // Import Head component

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexa Portfolio",
  description: "Welcome to Nexa Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
    >
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1740038077/cb5wb6idaqs4n8lzbfoc.png"
        />
      </Head>
      <body
        className={`${roboto.className} antialiased transition-colors duration-300 max-w-[1200px] mx-auto `}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar session={session} />
            <div className="pt-20">{children}</div>
            <Footer />
          </ThemeProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
