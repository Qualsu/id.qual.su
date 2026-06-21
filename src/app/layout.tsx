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
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} 
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: "#8B5CF6",
            colorBackground: "#1e1126",
            colorInputBackground: "rgba(255,255,255,0.06)",
            colorInputText: "#ffffff",
            colorText: "#ffffff",
            colorTextSecondary: "rgba(255,255,255,0.6)",
            borderRadius: "0.75rem",
          },
          elements: {
            card: "shadow-[0_32px_80px_rgba(0,0,0,0.45)] border border-white/10",
            formButtonPrimary: "bg-purple-600/75 hover:bg-purple-600 border border-purple-500/50",
            footerActionLink: "text-purple-400 hover:text-purple-300",
          },
        }}
        >
          <body>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
          </body>
        </ClerkProvider>
      </html>
  );
}
