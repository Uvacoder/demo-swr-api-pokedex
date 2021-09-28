import React from 'react';

// import Pokemon from './components/Pokemon';
import { usePagination } from './hooks/usePagination';

function App() {
  const { pages, isLoadingMore, loadMore, isReachingEnd } = usePagination(
    '/pokemon'
  );

  return (
    <main className="bg-gray-200 px-4 sm:px-6 lg:px-8 text-center py-12">
      <h1 className="text-red-600 uppercase font-medium text-xl italic">
        Pokedex
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 col-gap-6 mt-6 row-gap-8 max-w-md lg:max-w-5xl mx-auto">
        {pages}
      </div>
      <button
        type="button"
        onClick={loadMore}
        disabled={isLoadingMore || isReachingEnd}
        className="rounded-lg bg-red-400 mt-12 text-white italic font-medium px-4 py-2"
      >
        Load more...
      </button>
    </main>
  );
}
export default App;
