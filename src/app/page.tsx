import Home from "./home/page";
import { Suspense } from "react";
// import Image from "next/image";
// import styles from "./page.module.css";


export default function Page() {
  return (
    <Suspense>
      <Home />{" "}
    </Suspense>
  );
}
