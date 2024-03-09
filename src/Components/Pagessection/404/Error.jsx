import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { NavLink } from "react-router-dom";
import Bannersidepage from "../../Bannersidepage";
import { CiSearch } from "react-icons/ci";

export default function Error() {
  return (
    <section className="error">
      <div className="error-header">
        <Navbar />
        <Bannersidepage />
        <img
          src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header.jpg"
          className="headerimg"
        ></img>
      </div>
      <div className="error-body">
        <div className="row_site">
          <div className="error-container-site">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/themes/aovis/assets/img/404/image-404.png"
              alt=""
            />
            <div className="message">
              <h3 className="message-title">Sorry, we can't find that page!</h3>
              <p className="message-content">The page you are looking for was never existed</p>
            </div>
            <form action="">
            <CiSearch />

              <label>
                <input type="search" placeholder="Search..."/>
              </label>
              <input type="submit" />
            </form>
            <div className="backtohome">
              <NavLink to={"/"}>Back to Home</NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
