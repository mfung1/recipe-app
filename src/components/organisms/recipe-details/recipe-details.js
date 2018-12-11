import React from 'react';
import IconWithText from '../../molecules/icon-with-text/icon-with-text';
const RecipeDetails = () => {
  return (
    <article className="ddl-hero-cnt">
      <IconWithText icon="person" txt="Serves 2 - 6"/>
      <IconWithText icon="time" txt="Prep time 20 mins, 40 mins cook"/>
    </article>
  )
}
export default RecipeDetails;