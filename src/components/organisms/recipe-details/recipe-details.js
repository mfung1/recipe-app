import React from 'react';
import IconWithText from '../../molecules/icon-with-text/icon-with-text';
import './recipe-details.css';
const RecipeDetails = () => {
  return (
    <article className="recipe-details">
      <div className="ddl-cnt mb-24">
        <IconWithText icon="person" txt="Serves 2 - 6"/>
        <IconWithText icon="time" txt="Prep time 20 mins, 40 mins cook"/>
        <IconWithText icon="smile" txt="Skill level"/>
      </div>
      <div className="ddl-cnt">
        <h2 className="ddl-h3">Each serving contains</h2>
      </div>
    </article>
  )
}
export default RecipeDetails;