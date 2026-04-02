import { images } from "@/config/routing/images.route";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qual ID",
  description: "Единый аккаунт для всех",
  icons: {
    icon: images.ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru">
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} appearance={{
          baseTheme: dark,
        }}>
          <body>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
          </body>
        </ClerkProvider>
      </html>
  );
}
