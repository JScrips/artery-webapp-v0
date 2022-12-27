import { useRouter } from "next/router";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const User = ({ userInfo }) => {
  const router = useRouter();
  const { id } = router.query;
  const { artist, displayName } = userInfo;

  return (
    <div>
      <h1>User {displayName}</h1>
    </div>
  );
};

export default User;

export async function getStaticPaths() {
  const users = await getDocs(collection(db, "users"));
  const paths = users.docs.map((user) => {
    return {
      params: { id: user.id },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const users = await getDocs(collection(db, "users"));
  const user = users.docs.find((user) => user.id === params.id);
  const userInfo = { ...user.data(), id: user.id };
  return {
    props: {
      userInfo,
    },
  };
}
