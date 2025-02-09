import ButtonPrimary from "../../components/buttons.jsx";

function StudentDashboard() {
  return (
    <div id={"dashboard__wrapper"}>
      <section className={"dashboard__greeting"}>
        <div className={"dashboard-greeting__card"}>
          <div className={"dashboard-greeting-card__profile"}></div>
          <h1>Good Morning, Hector</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </section>
      <section className={"dashboard__content"}>
        <section className={"dashboard__navigation"}>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li className={"active"}>Enrolled Pathways</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </section>
        <div className={"dashboard-enrolled__pathways"}>
          <div className={"dashboard-enrolled__pathway"}>
            <div className={"dashboard-enrolled-pathway__icon"}></div>
            <div className={"dashboard-enrolled-pathway__description"}>
              <h2>Computer Science</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className={"dashboard-enrolled-pathway__buttons"}>
              <ButtonPrimary content={"Continue Pathway"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;
