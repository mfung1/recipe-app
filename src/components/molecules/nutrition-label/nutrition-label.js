import React, {Component} from 'react';
import './nutrition-label.css';
class HealthLabel extends Component {
  render() {
    return (
      <div className={`nutrition-indctr ${this.props.color} ${'nutrition-indctr-' + this.props.horizontal}`}>
        <span className="nutrition-desc">{this.props.desc}</span>
        <span className="nutrition-amnt">{this.props.amnt}</span>
        <span className="nutrition-prcnt">{`${this.props.percent}%`}</span>
      </div>
    )
  }
}

export default HealthLabel;