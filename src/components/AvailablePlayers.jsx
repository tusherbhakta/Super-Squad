import PlayerCard from './PlayerCard';

const AvailablePlayers = ({ players, selectPlayer, searchTerm, filterOption }) => {
  // Filter players based on search term and filter option
  const filteredPlayers = players.filter((player) => {
    const searchValue = player[filterOption].toString().toLowerCase();
    return searchValue.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredPlayers.map((player) => (
        <PlayerCard key={player.playerId} player={player} selectPlayer={selectPlayer} />
      ))}
      {filteredPlayers.length === 0 && <p className='mt-10 text-2xl font-bold text-red-500'>No players match the search criteria.</p>}
    </div>
  );
};

export default AvailablePlayers;
