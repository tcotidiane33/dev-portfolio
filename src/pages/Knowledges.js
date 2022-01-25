import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/knowledges/Languages";
import Experience from "../components/knowledges/Experience";
import Hobbies from "../components/knowledges/Hobbies";
import OtherSkills from "../components/knowledges/OtherSkills";


const Knowledges = () => {
  return (
    <>
      <div className="knowledges">
        <Navigation />
        <div className="knowledgesContent">
          <Languages />
          <Experience />
          <Hobbies />
          <OtherSkills />
        </div>
      </div>
    </>
  );
};

export default Knowledges;
