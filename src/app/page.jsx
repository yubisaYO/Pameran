import Button from "@/components/button/Button";
import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={`text-6xl ${styles.title}`}>
          Better design for your digital products.
        </h1>
        <p className="text-2xl">
          Turning your Idea into Reality, We bring together the teams from the
          global tech industry
        </p>
        <Button url="/portofolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}

export default page;
