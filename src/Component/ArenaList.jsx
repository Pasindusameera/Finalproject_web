import React from 'react';
import { Link } from 'react-router-dom';

const ArenaList = ({ arenas }) => {
  return (
    <div>
      <h2>Arenas</h2>
      <ul>
        {arenas.map((arena) => (
          <li key={arena._id}>
            <Link to={`/arenas/${arena._id}`}>{arena.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArenaList;
