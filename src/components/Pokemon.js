import React from 'react';
import PropTypes from 'prop-types';

import { useRequest } from '../hooks/useRequest';

export const Pokemon = ({ pokemon }) => {
  const { name } = pokemon;

  const { data, error } = useRequest('/pokemon', name);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="bg-white rounded-lg overflow-hidden border-gray-400 shadow-lg border">
      <div className="relative py-6 flex flex-col">
        <span className="inline-flex absolute top-0 left-0 rounded-br-lg text-left italic text-sm px-3 py-1 bg-red-400 text-white">
          #{data.id}
        </span>
        <img className="mx-auto" src={data.sprites.front_default} alt={name} />
        <h1 className="capitalize italic font-medium">{name}</h1>
        <span className="italic text-red-600">
          {data.types.map((poke) => poke.type.name).join(', ')}
        </span>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object,
};
