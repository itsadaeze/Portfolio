import React from 'react'
import './portfolio.css'
import IMG from '../../assests/portfolio-image.jpg'
import IMG1 from '../../assests/advice.jpeg'
import IMG2 from '../../assests/typinggame.jpeg'
import IMG3 from '../../assests/cal.jpeg'
import IMG5 from '../../assests/blackjack.jpeg'

const data =[
    {
        id: 1,
        image: IMG1,
        title: 'Advice Slip',
        github: 'https://github.com/itsadaeze/Advice-slip',
        demo:'https://itsadaeze.github.io/Advice-slip/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Typing Game',
        github: 'https://github.com/itsadaeze/Typing_Game',
        demo:'https://itsadaeze.github.io/Typing_Game/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Counting App',
        github: 'https://github.com/itsadaeze/countingApp',
        demo:'https://itsadaeze.github.io/countingApp/'
    },
    {
        id: 4,
        image: IMG,
        title: 'calculator',
        github: 'https://github.com/itsadaeze/countingApp',
        demo:'https://itsadaeze.github.io/countingApp/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Black Jack Game',
        github: 'https://github.com/itsadaeze/BlackJack-Game',
        demo:'https://itsadaeze.github.io/BlackJack-Game/'
    },
    {
        id: 6,
        image: IMG,
        title: 'BasketBall Board',
        github: 'https://github.com/itsadaeze/Basketball-ScoreBoard',
        demo:'https://itsadaeze.github.io/Basketball-ScoreBoard/'
    },
 
]
const Portfolio = () =>{
    return(
        <section id='portfolio'>
            <h5>My Recent </h5>
            <h2>portfolio</h2>
                
            <div className='container portfolio__container'>
              {
                data.map(({id, image, title, github, demo}) => {
                return(
                    <article  key={id} className='portfolio__item'>
                   
                   <div className="portfolio__item-image">
                      <img src={image} alt={title}/>
                   </div>
                   <h3>{title}</h3>
                   <div className="portfolio__item-cta">
                     <a href={github} className='btn' target='_blank'>Github</a>
                     <a href={demo} className='btn btn-primary' target='_blank'>live demo</a>
                   </div>
                </article>
                )
             })
             }
             
            </div>
           
        </section>
    )
}

export default Portfolio;

{/* <article className='portfolio__item'>
<h2>name of project</h2>
<div className="portfolio__item-image">
  <img src={IMG}/>
</div>
<div className="portfolio__item-cta">
 <a href='#' className='btn' target='_blank'>Github</a>
 <a href='#' className='btn btn-primary' target='_blank'>live demo</a>
</div>
</article> */}