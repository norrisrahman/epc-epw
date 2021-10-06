import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Img from "next/image";
import epwLogo from "../public/assets/images/epw-logo.svg";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <>
      <body>
        <Navigation />
        <div className="content-wrapper">
          <div class="container">
            <section>
              <div class="row content-wrap">
                <div class="col-lg">
                  <div className="epw-logo">
                    <Img src={epwLogo} alt="" />
                  </div>
                </div>
                <div class="col-lg">
                  <div className="logins-form">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </body>
    </>
  );
}
