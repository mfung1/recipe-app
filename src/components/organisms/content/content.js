import React from 'react';

import Hero from '../ddl-hero/ddl-hero';
import Ingredients from '../ingredients/ingredients';
import Utensils from '../utensils/utensils';

const Content = () => {
  return (
    <div className="ddl-grid mb-64">
      <Hero />
      <Ingredients />
      <Utensils/>
    </div>
  )
}

export default Content;