import React from 'react';
import IconWithText from '../../molecules/icon-with-text/icon-with-text';
import HealthLabel from '../../molecules/nutrition-label/nutrition-label';
import './recipe-details.css';
const RecipeDetails = () => {
  return (
    <article className="recipe-details">
      <div className="ddl-cnt mb-24">
        <IconWithText icon="person" txt="Serves 2 - 6"/>
        <IconWithText icon="time" txt="Prep time 20 mins, 40 mins cook"/>
        <IconWithText icon="smile" txt="Skill level" skill={true}/>
      </div>
      <div className="mb-">
        <h2 className="ddl-h3 mb-13">Each serving contains</h2>
        <div className="nutrition-lbls mb-13">
          <HealthLabel horizontal="hz" color="gray" desc="Energy" amnt="580kj 139kcal" percent="39"/>
          <HealthLabel color="red" desc="Fat" amnt="9g" percent="13"/>
          <HealthLabel color="red" desc="Saturates" amnt="5g" percent="25"/>
          <HealthLabel color="green" desc="Sugars" amnt="1g" percent="1"/>
          <HealthLabel color="amber" desc="Salt" amnt="0.5g" percent="5"/>
        </div>
        <p className="ddl-t3 col-blk">Allergens - None</p>
      </div>
    </article>
  )
}
export default RecipeDetails;