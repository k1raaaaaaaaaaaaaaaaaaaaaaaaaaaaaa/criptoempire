import { redirect } from "next/navigation";

const SMARTLINK = "https://lplpmrb.dreamladypartner.com/meqmfxq";

export default function GoPage({
  searchParams,
}: {
  searchParams: { s1?: string; s2?: string; s3?: string };
}) {
  // Передаём трекинг параметры в Lospollos
  const url = new URL(SMARTLINK);
  if (searchParams.s1) url.searchParams.set("s1", searchParams.s1);
  if (searchParams.s2) url.searchParams.set("s2", searchParams.s2);
  if (searchParams.s3) url.searchParams.set("s3", searchParams.s3);

  redirect(url.toString());
}
