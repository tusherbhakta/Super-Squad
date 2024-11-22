import React from 'react';

const TransactionHistoryModal = ({ isOpen, onClose, transactionHistory }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-11/12 max-w-lg p-4 rounded-lg">
                <h2 className="flex justify-center items-center text-2xl font-bold mb-4">Transaction History</h2>
                <div className="space-y-3 overflow-y-auto max-h-80">
                    {transactionHistory.map((transaction, index) => (
                        <div key={index} className="border-b py-2">
                            <p>{transaction.type === 'add' ? 'Added Coins' : transaction.type === 'spend' ? 'Spent on' : 'Refund for'} 
                                {transaction.player ? ` ${transaction.player.name}` : ''}:
                                {` ${transaction.amount} coins`}
                            </p>
                            <p className="text-sm text-gray-500">{new Date(transaction.timestamp).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                    Close
                </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistoryModal;
