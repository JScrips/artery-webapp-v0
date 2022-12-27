import HeroBanner from "../components/WelcomePageComponents/HeroBanner";
import { Satisfy } from "@next/font/google";

const satisfy = Satisfy({
  weight: "400",
});

const Home = () => {
  return (
    <div className={satisfy.className}>
      <HeroBanner />
    </div>
  );
};

export default Home;
