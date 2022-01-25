import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

// on peut ajouter de set state de facons dynamiques..
class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.8 },
      { id: 2, value: "Css", xp: 1 },
      { id: 3, value: "Html", xp: 0.7 },
      { id: 4, value: "Python", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.8 },
      { id: 2, value: "Bootstrap", xp: 0.2 },
      { id: 3, value: "Sass", xp: 0.4 },
      { id: 4, value: "NodeJs", xp: 0.5 },
    ],
  };
  /// abram linckon ma sauver la sauver la vie a 18h12
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="language"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks"
          className="frameworkDisplay"
        />
      </div>
    );
  }
}

export default Languages;
