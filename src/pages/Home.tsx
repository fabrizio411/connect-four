import ShadowCard from "../components/ShadowCard";
import Button from "../components/Button";
import Logo from "../assets/logo.svg";
import VsPlayer from "../assets/player-vs-player.svg";
import VsCpu from "../assets/player-vs-cpu.svg";
import Rules from "../components/Rules";

const Home = () => {
  return (
    <div class="grid place-items-center h-full bg-background sm:bg-muted-background">
      <ShadowCard
        shadowClass="bg-transparent sm:bg-black w-full max-w-[480px]"
        class="border-transparent sm:border-black flex gap-4 flex-col"
      >
        <img src={Logo} alt="Logo" class="mb-12 mt-12 self-center" />
        <a href="/vs">
          <Button variant="secondary" icon={VsPlayer}>PLAY VS PLAYER</Button>
        </a>
        <a href="/cpu">
          <Button icon={VsCpu}>PLAY VS CPU</Button>
        </a>
        <Rules />
      </ShadowCard>
    </div>
  );
};

export default Home;
