import Image from "next/image";
import styles from "./page.module.css";
import Home from "./home/page";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Home />{" "}
    </Suspense>
  );
}
