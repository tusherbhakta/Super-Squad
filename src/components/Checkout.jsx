import { useState } from 'react';

export const Checkout = ({ selectedPlayers }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCheckout = () => {
        setModalOpen(true);  // Open the modal to show selected players
    };

    const closeModal = () => {
        setModalOpen(false);  // Close the modal
    };

    return (
        <div className="py-8 bg-gray-100 mt-4 md:mt-6 lg:mt-16 mb-20 px-4 rounded-lg">
            <h1 className="text-center text-2xl font-bold mb-6">Checkout</h1>
            {selectedPlayers.map((player, idx) => (
                <div key={player.playerId} className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center mt-2">
                    <div className="flex items-center gap-4 ">
                        <p className="text-sm text-gray-700">{idx + 1}</p>
                        <p className="text-sm text-gray-700">{player.name}</p>
                    </div>
                    <p className="text-sm text-gray-700">{player.biddingPrice} $</p>
                </div>
            ))}

            <div className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center mt-4 px-4">
                <h3 className="text-lg font-bold">Total</h3>
                <p className="text-lg font-bold">{selectedPlayers.reduce((acc, player) => acc + player.biddingPrice, 0)} $</p>
            </div>

            <button
                onClick={handleCheckout}
                className="bg-yellow-400 px-4 py-3 rounded-full text-black font-bold mt-4 w-full">
                Checkout Now
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-bold mb-2 text-center">Checkout Successful 😊</h2>

                        <h2 className="text-md font-bold mb-4 text-center">Bidded Players</h2>
                        {selectedPlayers.map((player, idx) => (
                            <div key={player.playerId} className="flex justify-between mb-2">
                                <span className="text-gray-700">{idx + 1}. {player.name}</span>
                                <span className="text-gray-700">{player.biddingPrice} $</span>
                            </div>

                        ))}
                        <hr />
                        <div className='flex justify-between mt-2'>
                            <p className='font-bold'>Total</p>
                            <p className="text-gray-700 font-bold">{selectedPlayers.reduce((acc, player) => acc + player.biddingPrice, 0)} $</p>

                        </div>
                        <button
                            onClick={closeModal}
                            className="bg-red-500 text-white mt-4 py-2 px-4 rounded-full w-full">
                            Close
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
};
