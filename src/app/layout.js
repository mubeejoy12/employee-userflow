// app/layout.js (second site)
// import ClientLayout from "./components/ClientLayout";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata = {
  title: "Sinkronis",
  description: "Signup to get started",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
