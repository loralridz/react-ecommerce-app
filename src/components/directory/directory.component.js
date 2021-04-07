import React, { Component } from "react";
import { MenuItem } from "../menu-item/menu-item.component";
import { parts } from "./directory.data";
import './directory.styles.scss'
type myProps = {};
type myState = { sections: any };
class Directory extends Component<myProps, myState> {
  constructor(props) {
    super(props);
    this.state = {
      sections: parts
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({title,imageUrl,id,size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
