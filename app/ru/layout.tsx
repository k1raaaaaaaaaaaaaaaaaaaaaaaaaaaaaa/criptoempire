import NavbarRU from "@/components/ru/NavbarRU";
import FooterRU from "@/components/ru/FooterRU";
import WarningBanner from "@/components/ru/WarningBanner";

export default function RULayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WarningBanner />
      <NavbarRU />
      <main className="min-h-screen pt-16">{children}</main>
      <FooterRU />
    </>
  );
}
