import Button from "@/components/button/Button";
import Image from "next/image";
import styles from "./page.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/5560208/pexels-photo-5560208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.img}
          fill
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            porro. Eaque, obcaecati itaque. Esse doloribus ea illum quisquam
            dolores, harum accusantium, placeat cum illo ullam necessitatibus
            voluptatem porro, nisi laboriosam! Earum nihil sed quae nemo
            exercitationem, aut mollitia voluptates quia maiores delectus
            deserunt et doloremque accusamus necessitatibus reiciendis sit
            facere!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            eaque cum quis corporis adipisci autem, incidunt sunt ut quas saepe
            nihil recusandae ea aliquid laudantium necessitatibus exercitationem
            rem laborum. Quasi quis odio, doloribus vel autem perspiciatis,
            nobis tempore dicta rem, cupiditate praesentium culpa dolorem
            blanditiis consectetur et. Aut, aliquid nobis.
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
