import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch("http://localhost:3000/api/posts/" + id);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.info}>
          <h1 className="text-4xl">{data.title}</h1>
          <p>{data.desc}</p>
          <div className={styles.profil}>
            <Image
              src="/1.png"
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={data.img} alt="" fill className="object-cover" />
        </div>
      </div>
      <div className={styles.bottomContent}>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
