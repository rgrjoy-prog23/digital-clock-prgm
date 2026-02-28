import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { geistMono, geistSans } from "@/lib/fonts";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning>
      <body className="bg-[url(/white-bg.jpg)] bg-cover bg-no-repeat backdrop:bg-center dark:bg-[url(/dark-bg.jpg)]">
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}>
          <Header />

          <main className="mx-auto max-w-7xl px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
