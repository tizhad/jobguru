import "./HomePage.css";

export default function HomePage() {
  const companies = ["Alibaba", "Digikala", "Snapp", "AP"];
  let companiesInHomePage =
    companies[Math.floor(Math.random() * companies.length)];
  return (
    <div className="HomeHeader">
      <div>
        <h1>Mock interview with engineers from {companiesInHomePage}</h1>
        <p>
          We provide the same experience as real interviews and you'll get real
          feedback in the end.
        </p>
        <button>Get Started</button>
      </div>
      <div className="valuesContainer">
        <img
          className="iconsInHome"
          src="https://d1agfgqdvq6t45.cloudfront.net/images/tpm-icon@2x.png"
          alt="icon"
        />
        <h3>coding</h3>
        <h3>Technical Program Manager</h3>
        <p>
          Tell us about your target companies, preferred time slots, etc. We'll
          introduce you to experienced interviewers who can help you.
        </p>
      </div>
      <div className="row">
        <img
          className="iconsInHome"
          src="https://d1agfgqdvq6t45.cloudfront.net/images/coding-icon@2x.png"
          alt="icon"
        />
        <h3>coding</h3>
        <h3>Technical Program Manager</h3>
        <p>
          Tell us about your target companies, preferred time slots, etc. We'll
          introduce you to experienced interviewers who can help you.
        </p>
      </div>
      {/* <div>
        <div className="row">
          <img
            className="iconsInHome"
            src="https://d1agfgqdvq6t45.cloudfront.net/images/system-design-icon@2x.png"
            alt="icon"
          />
          <h3>coding</h3>
          <h3>Technical Program Manager</h3>
          <p>
            Tell us about your target companies, preferred time slots, etc.
            We'll introduce you to experienced interviewers who can help you.
          </p>
        </div>
      </div>
      <div>
        <div className="row">
          <img
            className="iconsInHome"
            src="https://d1agfgqdvq6t45.cloudfront.net/images/sdm-icon@2x.png"
            alt="icon"
          />
          <h3>coding</h3>
          <h3>Technical Program Manager</h3>
          <p>
            Tell us about your target companies, preferred time slots, etc.
            We'll introduce you to experienced interviewers who can help you.
          </p>
        </div>
      </div>{" "} */}

      {/* <div>
        <div className="valuesSection">
          <img
            className="iconsInHome"
            src="https://d1agfgqdvq6t45.cloudfront.net/images/behavioral-icon.png"
            alt="icon"
          />
          <h3 className="row">coding</h3>
          <h3>Technical Program Manager</h3>
          <p>
            Tell us about your target companies, preferred time slots, etc.
            We'll introduce you to experienced interviewers who can help you.
          </p>
        </div>
      </div> */}
    </div>
  );
}
