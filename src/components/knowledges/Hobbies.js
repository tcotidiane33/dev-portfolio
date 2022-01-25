import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts </h3>
      <ul>
        <li classnName="hobby">
          <i className="fab fa-btc "></i>
          <spam>Crypto Monnaies</spam>
        </li>
        <li classnName="hobby">
          <i className="fas fa-hiking"></i>
          <spam>100 pats</spam>
        </li>
        <li classnName="hobby">
          <i className="fas fa-basketball-ball"></i>
          <spam>BasketBall</spam>
        </li>
        <li classnName="hobby">
          <i className="fas fa-landmark"></i>
          <spam>Mithologie</spam>
        </li>
        <li classnName="hobby">
          <i className="fas fa-rocket"></i>
          <spam>Coding & Forums</spam>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
