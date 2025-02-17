import "./globals.css";

export const metadata = {
  title: "Finazch - Home",
  description: "Finazch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
