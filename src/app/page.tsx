import Creer_mon_site from "./components/creer_mon_site";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Partenaire from "./components/partenaire";
import Courtageland from "./components/courtageland";
import Landing from "./components/landing";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Creer_mon_site />
      <Courtageland />
      <Partenaire />
      <Footer />
    </div>
  );
}



