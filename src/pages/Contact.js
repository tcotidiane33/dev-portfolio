import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <Navigation />
        <div className="contactContent">
          <div className="header">
            <div className="contactBox">
              <h1>Contactez moi </h1>
              <ul classsName="map">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  
                  <span>Abidjan</span>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fas fa-mobile-alt"></i>
                  <CopyToClipboard text="002250584205108">
                    <span
                      className="clickInput"
                      onClick={() => {
                        alert("Téléphone Copié !");
                      }}
                    >
                      00 225 05 84 20 51 08
                    </span>
                  </CopyToClipboard>
                  <br />
                  <br />
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  <CopyToClipboard text="tcotidiane33@gmail.com">
                    <span
                      className="clickInput"
                      onClick={() => {
                        alert("Email Copié !");
                      }}
                    >
                      tcotdiane33@gmail.com
                    </span>
                  </CopyToClipboard>

                  <br />
                
                </li>
              </ul>
            </div>
          </div>
          <div className="socialNetwork">
            <ul>
              <li>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.codepen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-codepen"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
