import React from 'react';
import Button from '../../molecules/buttons/buttons';
import StarRating from '../../molecules/star-rating/star-rating';
import './recipe-description.css';

const RecipeDescription = () => {
  return (
    <article className="recipe-desc">
      <div className="recipe-head">
        <h1 className="ddl-h1 mb-13 mr-8 mw-75 col-blk">Gluten-free chicken Kiev</h1>
        <StarRating/>
        <p className="ddl-t1 mb-8 mr-20 col-blk">Quick, easy and packed with flavour</p>
      </div>

      <p className="ddl-t3 col-gry mb-20">The idea of a chicken Kiev is to keep the butter sealed inside so that when you cut into it, runny butter oozes out. However, this is quite hard to achieve and, whether the butter spurts from inside or is poured over the Kievs from the pan, the flavour is just as good. So do not be downhearted if your Kievs spring a leak!</p>
      <div className="ddl-btn-cnt">
        <Button filled={true} txt="View ingredients" />
        <Button filled={false} txt="View similar"/>
      </div>
    </article>
  )
}

export default RecipeDescription;