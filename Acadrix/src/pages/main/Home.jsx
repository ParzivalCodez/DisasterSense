import NavBar from "../../layouts/NavBar.jsx";
import ButtonPrimary from "../../components/buttons.jsx";

function Home() {
  return (
    <div id={"page__wrapper"}>
      <NavBar />
      <section className={"hero"}>
        <div className={"hero__cta"}>
          <h1>
            Looking for a <span className={"text__gradient"}>new</span> way to
            learn?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <div className={"hero-cta__buttons"}>
            <ButtonPrimary content={"Explore Pathways"} />
            <ButtonPrimary content={"Explore Pathways"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
