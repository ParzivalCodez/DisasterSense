import axios from "axios";
import { ButtonPrimary } from "../components/buttons.jsx";

function Dashboard() {
  async function createRelativeGroupHandler() {
    let relativeGroupName = window.prompt("What is your relative name?");

    await axios.post("http://localhost:3000/api/relatives/create-group", {
      relativeGroupName: relativeGroupName,
    });
  }

  async function joinRelativeGroupHandler() {
    let relativeGroupCode = window.prompt("What is your relative code?");
    await axios.post("http://localhost:3000/api/relatives/join-group", {
      relativeGroupCode: relativeGroupCode,
      userId: localStorage.getItem("userId"),
    });
  }

  return (
    <div id={"dashboard__wrapper"}>
      <div className={"dashboard-greeting__wrapper"}>
        <h1>Good Morning, Hector!</h1>
        <p>
          Welcome to the DisasterSense Dashboard! Here you can manage your
          devices, relative group and so much more!
        </p>
      </div>
      <section className={"relatives"}>
        <div className={"relatives__card"}>
          <div className={"relatives-card__banner"}></div>
          <div className={"relatives-card__description"}>
            <h2>My Cool Family</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
        </div>
        <div className={"relative-group-button__create"}></div>
      </section>
    </div>
  );
}

export default Dashboard;
