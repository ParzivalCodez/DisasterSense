import { ButtonPrimary } from "../components/buttons.jsx";

function NavBar() {
  return (
    <nav className={"navbar"}>
      <h1 className={"navbar__brand"}>
        Disaster<span>Sense</span>
      </h1>
      <ul className={"navbar__items"}>
        <li className={"navbar__item"}>
          <a href={"#"}>Lorem</a>
        </li>
        <li className={"navbar__item"}>
          <a href={"#"}>Lorem</a>
        </li>
        <li className={"navbar__item"}>
          <a href={"#"}>Lorem</a>
        </li>
        <li className={"navbar__item"}>
          <a href={"#"}>Lorem</a>
        </li>
        <li className={"navbar__item"}>
          <a href={"#"}>Lorem</a>
        </li>
      </ul>
      <div>
        <ButtonPrimary content={"Register Now"} />
      </div>
    </nav>
  );
}

export default NavBar;
