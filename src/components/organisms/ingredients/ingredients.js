import React, {Component} from 'react';
import Paragraph from '../../atoms/paragraphs/paragraphs';
import IconWithText from '../../molecules/icon-with-text/icon-with-text';
import Button from '../../molecules/buttons/buttons';

import './ingredients.css';

class Ingredients extends Component {
  constructor () {
    super();
    this.state = {
      IngredientsClass: 'ddl-card ingredients'
    }
  }

  // fadeIn = setTimeout(() => {
  //   this.setState({IngredientsClass: 'ddl-card ingredients visible'})
  // }, 100);

  render () {
    return (
      <section className={this.state.IngredientsClass}>
        <fieldset id="fields" aria-expanded="false" data-show="false" className="input_group input_group--checkboxRadio">
          <legend  className="ddl-h2 mb-8 hide">Ingredients</legend>
          <Paragraph txt="Check the items you need" colour="blk" level="t2"/>
          <IconWithText icon="person" txt="Serving size"/>
          <div  className="input-grid mb-24">
            <div  className="form_field">
              <div  className="checkbox">
                <input id="0" type="checkbox"/><span  className="icon"><svg height="16" viewBox="0 0 20 16" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 2.25L17.75.21a.72.72 0 0 0-1.02.002l-9.944 9.943L3.27 6.64a.72.72 0 0 0-1.02 0L.21 8.68A.721.721 0 0 0 .212 9.7l5.805 5.804c.209.208.479.483.755.483s.575-.275.784-.483L19.789 3.27a.721.721 0 0 0 0-1.02" fill="#FFF" fillRule="evenodd"></path></svg></span>
              </div>
              <label  className="label ddl-t2 col-gry" htmlFor="fvrvwrer2">110g (3 3/4oz) butter</label>
            </div>
            <div  className="form_field">
              <div  className="checkbox">
                <input id="1" type="checkbox"/> <span  className="icon"><svg height="16" viewBox="0 0 20 16" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 2.25L17.75.21a.72.72 0 0 0-1.02.002l-9.944 9.943L3.27 6.64a.72.72 0 0 0-1.02 0L.21 8.68A.721.721 0 0 0 .212 9.7l5.805 5.804c.209.208.479.483.755.483s.575-.275.784-.483L19.789 3.27a.721.721 0 0 0 0-1.02" fill="#FFF" fillRule="evenodd"></path></svg></span>
              </div>
              <label  className="label ddl-t2 col-gry" htmlFor="fvrvwrer2">65g (2 1/2oz) caster sugar</label>
            </div>
            <div  className="form_field">
              <div  className="checkbox">
                <input id="2" type="checkbox"/><span className="icon"><svg height="16" viewBox="0 0 20 16" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 2.25L17.75.21a.72.72 0 0 0-1.02.002l-9.944 9.943L3.27 6.64a.72.72 0 0 0-1.02 0L.21 8.68A.721.721 0 0 0 .212 9.7l5.805 5.804c.209.208.479.483.755.483s.575-.275.784-.483L19.789 3.27a.721.721 0 0 0 0-1.02" fill="#FFF" fillRule="evenodd"></path></svg></span>
              </div>
              <label  className="label ddl-t2 col-gry" htmlFor="fvrvwrer2">2 medium eggs</label>
            </div>
            <div  className="form_field">
              <div  className="checkbox">
                <input id="3" type="checkbox"/> <span  className="icon"><svg height="16" viewBox="0 0 20 16" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 2.25L17.75.21a.72.72 0 0 0-1.02.002l-9.944 9.943L3.27 6.64a.72.72 0 0 0-1.02 0L.21 8.68A.721.721 0 0 0 .212 9.7l5.805 5.804c.209.208.479.483.755.483s.575-.275.784-.483L19.789 3.27a.721.721 0 0 0 0-1.02" fill="#FFF" fillRule="evenodd"></path></svg></span>
              </div>
              <label  className="label ddl-t2 col-gry" htmlFor="fvrvwrer2">110g (3 3/4oz) plain flour</label>
            </div>
            <div  className="form_field">
              <div  className="checkbox">
                <input id="3" type="checkbox"/> <span className="icon"><svg height="16" viewBox="0 0 20 16" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 2.25L17.75.21a.72.72 0 0 0-1.02.002l-9.944 9.943L3.27 6.64a.72.72 0 0 0-1.02 0L.21 8.68A.721.721 0 0 0 .212 9.7l5.805 5.804c.209.208.479.483.755.483s.575-.275.784-.483L19.789 3.27a.721.721 0 0 0 0-1.02" fill="#FFF" fillRule="evenodd"></path></svg></span>
              </div>
              <label  className="label ddl-t2 col-gry" htmlFor="fvrvwrer2">110g (3 3/4oz) plain flour</label>
            </div>
            <div className="form_field">
              <div className="checkbox">
                <input id="3" type="checkbox"/> <span className="icon"><svg height="16" viewBox="0 0 20 16" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 2.25L17.75.21a.72.72 0 0 0-1.02.002l-9.944 9.943L3.27 6.64a.72.72 0 0 0-1.02 0L.21 8.68A.721.721 0 0 0 .212 9.7l5.805 5.804c.209.208.479.483.755.483s.575-.275.784-.483L19.789 3.27a.721.721 0 0 0 0-1.02" fill="#FFF" fillRule="evenodd"></path></svg></span>
              </div>
              <label className="label ddl-t2 col-gry" htmlFor="fvrvwrer2">110g (3 3/4oz) plain flour</label>
            </div>
          </div>
          <div className="mb-24">
            <Paragraph txt="Indicator Here for Panel 2" colour="blk" level="t2"/>
          </div>
          <Paragraph txt="2 items selected" colour="blk" level="t2"/>
          <Button filled={true} txt="Shop ingredients"/> 
        </fieldset>
      </section>
    )
  }
}

export default Ingredients;