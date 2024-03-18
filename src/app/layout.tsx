import { ClerkProvider } from "@clerk/nextjs";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
        <PrismicPreview repositoryName={repositoryName} />
      </ClerkProvider>
    </html>
  );
}
