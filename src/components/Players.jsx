import { useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const Players = ({ players, selectPlayer, selectedPlayers, removePlayer }) => {
  const [isAvailablePlayer, setIsAvailablePlayer] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('name'); // Default search by name

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
        <h2 className='text-2xl font-bold'>{isAvailablePlayer ? "Available Players" : "Selected Players"}</h2>
        
        {/* Search bar and filter option */}
        {isAvailablePlayer && (
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={`Search by ${filterOption}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-3 py-2 rounded-lg"
            />
            <select
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
              className="border px-3 py-2 rounded-lg"
            >
              <option value="name">Name</option>
              <option value="country">Country</option>
              <option value="role">Role</option>
            </select>
          </div>
        )}

        <div className='mt-2 md:mt-10 mb-2 md:mb-10 flex items-center px-5'>
          <button
            className={`border px-4 py-2 rounded-lg mr-6 ${isAvailablePlayer ? "bg-yellow-400" : "bg-gray-300"}`}
            onClick={() => setIsAvailablePlayer(true)}
          >
            Available Players
          </button>
          <button
            className={`border px-4 py-2 rounded-lg ${!isAvailablePlayer ? "bg-yellow-400" : "bg-gray-300"}`}
            onClick={() => setIsAvailablePlayer(false)}
          >
            Selected Players ({selectedPlayers.length})
          </button>
        </div>
      </div>
      
      {isAvailablePlayer ? (
        <AvailablePlayers 
          players={players}
          selectPlayer={selectPlayer}
          searchTerm={searchTerm}
          filterOption={filterOption}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          removePlayer={removePlayer}
          setIsAvailablePlayer={setIsAvailablePlayer}
        />
      )}
    </div>
  );
};

export default Players;
