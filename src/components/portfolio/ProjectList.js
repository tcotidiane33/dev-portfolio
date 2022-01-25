import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";
// entre accolade pour faire ressortir l'objects dans la data  .. un evariable exportable
// ne pas oublier export default devant class projectsList extents component

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Html", xp: 0.7 },
      { id: 4, value: "Python", xp: 0.4 },
    ],
    //creation d'un element evoplutif
    selectedRadio: "javascript",
  };

  hundleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
    // console.log(event.target.value);
  };
  // text
  // i like destructuring
  render() {
    let { projects, radios, selectedRadio } = this.state;
    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            <li key={radio.id}>
              <input
                type="radio"
                name="radio"
                checked={radio.value === selectedRadio}
                value={radio.value}
                id={radio.value}
                onChange={this.hundleRadio}
              />
              <label htmlFor={radio.value}>{radio.value}</label>
            </li>;
          })}
        </ul>
        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio)) // on trie et on selection avant de mapper
            .map((item) => {
              return <Project key={item.id} item={item} />; // chaque item a sa propre key .
            })}
        </div>
      </div>
    );
  }
}

// export default ProjectList;
