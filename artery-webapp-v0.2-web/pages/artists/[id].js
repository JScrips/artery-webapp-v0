import { useRouter } from "next/router";

const Artist = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Artist {id}</h1>
    </div>
  );
};

export default Artist;

export async function getStaticProps() {
  const res = await fetch;
}
