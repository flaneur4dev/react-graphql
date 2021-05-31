import { PropsCard } from '../types/types';
import './Card.css';

const Card = ({ card }: PropsCard) => (
  <article className="element">
    <img src={card.image} alt={card.title} className="element__image" />
    <div className="element__wrapper">
      <h2 className="element__title">{card.title}</h2>
      <p className="element__subtitle">{card.subtitle}</p>
    </div>
  </article>
)

export default Card
