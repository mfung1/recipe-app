import React, {Component} from 'react';
import TheIcon from '../../atoms/icons/icon';

import './ddl-rating.css';

class StarRating extends Component {
  
  rating = () => {
    let ratings = [];
    let x = 5;
    while(x--) {
      ratings.push(<TheIcon key={x} icon="star" color="yllw" />)
    }
    return ratings;
  }
  render () {
    return (
      <div className="ddl-rating mb-13">
       <div className="ddl-rating_stars">
         {this.rating()}
       </div>
       <p className="ddl-t3"><span className="col-int-blu">Rate</span> | 284 ratings</p>
      </div>
    )
  }
}

export default StarRating;