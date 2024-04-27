import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/Colleges" className="link link-hover">
            Colleges
          </Link>
          <Link to="/admission" className="link link-hover">
            Admission
          </Link>
          <Link to="/mycolleges" className="link link-hover">
            My Colleges
          </Link>
        </div>

        <div>
          <p>
            Copyright © 2023 - All right reserved by{" "}
            <span className="font-bold">FindEdu </span>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
