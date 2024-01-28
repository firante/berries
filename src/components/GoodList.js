import React from 'react';

import Good from './Good';
import berries from './berryResources.js';

class GoodList extends React.Component {
  renderGoods() {
    if (!berries || !berries.length) return null;
    return berries.map((good) => <Good good={good} key={good.id} />);
  }

  render() {
    return <div className="good-list">{this.renderGoods()}</div>;
  }
}

export default GoodList;
