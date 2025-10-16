import "./globals.css";

export const metadata = {
  title: "Mission Ecofuel",
  description: "Building a greener and sustainable future for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
