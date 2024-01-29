import React from 'react';

class GoodDetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      backgroundImage: `url(${this.props.goodDetail.image})`,
    };
    this.onClickRedirect = this.onClickRedirect.bind(this);
  }

  onClickRedirect() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    return (
      <div className="good-details-item">
        <div className="good-detail-title">
          <h2>{this.props.goodDetail.title}</h2>
        </div>
        <div className="good-detail-image" style={this.style}></div>
        <div className="good-detail-data">
          <p className="good-detail-description">{this.props.goodDetail.description}</p>
          <div className="good-detail-footer">
            <p className="good-detail-price">Price: {this.props.goodDetail.price}</p>
            <p className="content-ass-link" onClick={this.onClickRedirect}>
              Contact Us
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodDetailItem;
