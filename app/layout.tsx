import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FormProvider , EditProvider , MenuProvider , ThemeProvider , UpdatedUserProvider  } from "./assets/contexts";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "st george club",
  description: "st george club",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">

        <ThemeProvider>
          <MenuProvider>
            <FormProvider>
              <EditProvider>
                <UpdatedUserProvider>
                    <Header/>
                    {children}
                    <Footer/>
                  </UpdatedUserProvider>
              </EditProvider>
            </FormProvider>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
