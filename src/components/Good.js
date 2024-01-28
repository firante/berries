import React from 'react';
import { Link } from 'react-router-dom';

class Good extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      backgroundImage: `url(${this.props.good.mainImage})`,
    };
  }

  render() {
    return (
      <div className="good-item">
        <div className="good-item__image" style={this.style}></div>
        <div className="good-item__info">
          <h2>{this.props.good.titleInfo}</h2>
          <Link to={`/details/${this.props.good.id}`}>
            <button type="button"> To Details </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Good;
