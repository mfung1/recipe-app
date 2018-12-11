import React, { Component } from 'react';
import './ddl-hero.css';
import Image from './hero.jpg';

import StarRating from '../../molecules/star-rating/star-rating';
import Button from '../../molecules/buttons/buttons';

class Hero extends Component {
  render () {
    return (
      <section className="ddl-hero">
        <div className="ddl-hero_img" style={{backgroundImage: `url(${Image})`}}></div>
        <div className="recipe-details">
          <h1 className="ddl-h1 mb-13 mr-8 mw-75 col-blk">Gluten-free chicken Kiev</h1>
          <StarRating/>
          <p className="ddl-t1 mb-8 mr-20 col-blk">Quick, easy and packed with flavour</p>
          <p className="ddl-t3 col-gry mb-20">The idea of a chicken Kiev is to keep the butter sealed inside so that when you cut into it, runny butter oozes out. However, this is quite hard to achieve and, whether the butter spurts from inside or is poured over the Kievs from the pan, the flavour is just as good. So do not be downhearted if your Kievs spring a leak!</p>
          <div className="ddl-btn-cnt">
            <Button filled={true} txt="View ingredients" />
            <Button filled={false} txt="View similar"/>
          </div>
        </div> 
      </section>
    )
  }
}

export default Hero;