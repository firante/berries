import React from 'react';
import withRouter from './withRouter';
import berries from './berryResources.js';
import GoodDetailItem from './GoodDetailItem';

class GoodDetails extends React.Component {
  getCurrentGood() {
    return berries.find((b) => b.id === this.props.params.id);
  }

  renderItems() {
    const item = this.getCurrentGood();
    return item.detailsInfo.map((detail) => <GoodDetailItem goodDetail={detail} key={detail.id} />);
  }

  render() {
    return <div className="good-details">{this.renderItems()}</div>;
  }
}

export default withRouter(GoodDetails);
