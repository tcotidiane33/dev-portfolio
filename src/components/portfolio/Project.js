import React, { Component } from "react";
// eslint-disable-next-line

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  hundleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    //console.log(this.props);
    //destructuring
    let { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <div className="projects">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.hundleInfo} />
        <span className="infos" onClick={this.hundleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code Source
                  </a>
                </div>
              </div>
              <p>{info}</p>
              <div className="button return" onClick={this.hundleInfo}>
                Retouner sur la page !
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
//this.state.showInfo && sous entend que si jamai c'est egale a True (le hundleInfo) alors on execute
