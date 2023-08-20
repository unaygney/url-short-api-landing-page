import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
// Logo
import logo1 from "../assets/icon-brand-recognition.svg";
import logo2 from "../assets/icon-detailed-records.svg";
import logo3 from "../assets/icon-fully-customizable.svg";

function Main() {
  const [buttonStates, setButtonStates] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState(null);

  const schema = yup.string().required("Bu alan zorunludur.");

  const handleChange = (e) => {
    const trimmedValue = e.target.value.trim();
    setInputValue(trimmedValue);
  };

  const getData = async (e) => {
    e.preventDefault();
    schema
      .validate(inputValue)
      .then(() => {

        console.log("Veri geçerli.");
        // Doğrulama başarılı, burada istediğiniz işlemi gerçekleştirebilirsiniz.
      })
      .catch((validationError) => {

        console.error("Veri geçerli değil.", validationError);
      });

    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}/very/long/link.html`
      );

      const newResponseData = response.data;

      setResponseData(newResponseData);

      setAllData((prevAllData) => [...prevAllData, newResponseData]);
    } catch (error) {
      console.error("API ERROR", error);
    }
  };
 

  const handleButtonClick = (index) => {
    const updatedStates = [...buttonStates];
    updatedStates[index] = true;
    setButtonStates(updatedStates);

    setTimeout(() => {
      const resetStates = [...buttonStates];
      resetStates[index] = false;
      setButtonStates(resetStates);
    }, 250);
  };

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
  };

  return (
    <main className="main">
      <form onSubmit={getData} className="form">
        <div className="form-control">
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Shorter a link here..."
          />
          {error && <p style={{ color: "red" }}>{error.message}</p>}
          <button type="submit" className="btn-primary">
            Shorten It!
          </button>
        </div>
      </form>

      <section className="api-links">
        {allData.map((data, index) => (
          <div className="api-link" key={index}>
            <p>{data.result.original_link}</p>
            <div className="right-side">
              <p className="link">{data.result.full_short_link}</p>
              <button
                key={index}
                className={`btn-primary ${
                  buttonStates[index] ? "clicked" : ""
                }`}
                onClick={() => {
                  handleButtonClick(index);
                  handleCopyLink(data.result.full_short_link);
                }}
              >
                {buttonStates[index] ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </section>

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
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
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
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      <div className="subfooter">
        <h4>Boost your links today</h4>
        <a className="btn-primary" href="#">
          Get Started
        </a>
      </div>
    </main>
  );
}

export default Main;
