import NavBar from "../layouts/NavBar.jsx";
import { ButtonPrimary } from "../components/buttons.jsx";

function Home() {
  return (
    <div className={"page__wrapper"}>
      <NavBar />
      <section className={"hero"}>
        <div className={"hero__cta"}>
          <h1>Revolutionizing Public Safety with Smart Wearables</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <ButtonPrimary content={"Create Account"} />
        </div>
      </section>
    </div>
  );
}

export default Home;
