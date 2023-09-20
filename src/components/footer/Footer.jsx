import Image from "next/image";
import styles from "./page.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Charles, All rights reserved.</div>
      <div className="flex gap-3">
        <Image
          src="/1.png"
          alt=""
          width={15}
          height={15}
          className="cursor-pointer"
        />
        <Image
          src="/2.png"
          alt=""
          width={15}
          height={15}
          className="cursor-pointer"
        />
        <Image
          src="/3.png"
          alt=""
          width={15}
          height={15}
          className="cursor-pointer"
        />
        <Image
          src="/4.png"
          alt=""
          width={15}
          height={15}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
