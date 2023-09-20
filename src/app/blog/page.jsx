import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div className={styles.item}>
          <Link href={`/blog/${item._id}`} key={item.id}>
            <div className={styles.imgContainer}>
              <Image
                className="object-cover"
                width={450}
                height={200}
                alt=""
                src={item.img}
              />
            </div>
          </Link>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
