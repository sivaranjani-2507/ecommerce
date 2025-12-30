import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return <div>My Page: {slug[0]} / {slug[1]} / {slug[2]}</div>;
  //  return <div>My Page: {slug}</div>;
}

//multi level dynamic router example