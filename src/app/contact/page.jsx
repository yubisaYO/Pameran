import Button from "@/components/button/Button";
import Image from "next/image";
import styles from "./page.module.css";
function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill
            className={`${styles.img} object-contain`}
          />
        </div>
        <form action="" className={styles.form}>
          <input
            type="text"
            name=""
            id=""
            placeholder="name"
            className={styles.input}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className={styles.input}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message"
            className={styles.textArea}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
