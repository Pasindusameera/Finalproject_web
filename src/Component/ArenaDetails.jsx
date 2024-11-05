import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArenaDetails = () => {
  const { id } = useParams();
  const [arena, setArena] = useState(null);

  useEffect(() => {
    const fetchArena = async () => {
      try {
        const response = await axios.get(`/api/arenas/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setArena(response.data);
      } catch (error) {
        console.error('Error fetching arena details:', error);
      }
    };

    fetchArena();
  }, [id]);

  if (!arena) return <div>Loading...</div>;

  return (
    <div>
      <h2>{arena.name}</h2>
      <p>Location: {arena.location}</p>
      <p>Capacity: {arena.capacity}</p>
      <p>Description: {arena.description}</p>
      <img src={arena.image_url} alt={arena.name} />
      <p>Price: ${arena.price}</p>
      <button>Edit Arena</button>
    </div>
  );
};

export default ArenaDetails;
