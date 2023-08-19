// Logo
import logo1 from "../assets/icon-brand-recognition.svg";
import logo2 from "../assets/icon-detailed-records.svg";
import logo3 from "../assets/icon-fully-customizable.svg";

function Main() {
  return (
    <main className="main">
      <form className="form">
        <div className="form-control">
          <input type="text" placeholder="Shorter a link here..." />
          <button className="btn-primary">Shorten It!</button>
        </div>
      </form>

      <section className="content">
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>

      <section className="box-container">

        <div className="box">
          <div className="logo-container">
            <img src={logo1} alt="logo1" />
          </div>
          <div className="content">
            <h3 className="title">Brand Recognition</h3>
            <p className="text">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="logo-container">
            <img src={logo2} alt="logo1" />
          </div>
          <div className="content">
            <h3 className="title">Detailed Records</h3>
            <p className="text">
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="logo-container">
            <img src={logo3} alt="logo1" />
          </div>
          <div className="content">
            <h3 className="title">Fully Customizable</h3>
            <p className="text">
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
