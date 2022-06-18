import React from 'react'
import Card from './Card'
import imagen1 from '../../img/img1.jpg'
import imagen2 from '../../img/img2.jpg'
import imagen3 from '../../img/img3.jpg'
import imagen4 from '../../img/img4.jpg'

const CardsContainer = () => {
    let titulos = ["Montana", "Utah", "Glacier", "YellowStone"];
    let imagenes = [imagen1, imagen2, imagen3, imagen4];
    let texts = ["Montana is one of the most beautiful places in the world", "Utah is dry, but has one of the most amazing Montains in the country", "Glacier Peak is really beautiful, one of the best places for photography", "You will never be a yellower sunset than in Yellowstone." ] 
  return (
    <div className="row">
          <Card titulo={titulos[0]} imagen={imagenes[0]} text={texts[0]}/>
          <Card titulo={titulos[1]} imagen={imagenes[1]} text={texts[1]}/>
          <Card titulo={titulos[2]} imagen={imagenes[2]} text={texts[2]}/>
          <Card titulo={titulos[3]} imagen={imagenes[3]} text={texts[3]}/>
    </div>
  )
}

export default CardsContainer