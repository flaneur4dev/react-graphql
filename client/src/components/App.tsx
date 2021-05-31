import { useQuery } from '@apollo/client';
import Card from './Card';
import { СardType } from '../types/types';
import { CARDS } from '../query/query';

import './App.css';

function App() {
  const { loading, error, data } = useQuery(CARDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error?.message}</p>;

  return (
    <div className="main">
      <section className="elements">
        {(data?.cards || []).map((card: СardType) => <Card key={card.id} card={card} />)}
      </section>
    </div>
  )
}

export default App;
