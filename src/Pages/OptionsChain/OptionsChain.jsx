import React, { useState, useEffect } from 'react';

const OptionsChain = () => {
  const [quantity, setQuantity] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [results, setResults] = useState({
    moneyInvested: 0,
    slPrice: 0,
    profit10Price: 0,
    profit20Price: 0,
    profit30Price: 0,
    moneyAtSL: 0,
    moneyAtProfit10: 0,
    moneyAtProfit20: 0,
    moneyAtProfit30: 0,
    profitLoss: 0,
    slDifference: 0,
    totalSlLoss : 0
  });

  useEffect(() => {
    calculate();
  }, [quantity, buyPrice, sellPrice]);

  const calculate = () => {
    const moneyInvested = quantity * buyPrice;

    const slPrice = buyPrice * 0.9;
    const profit10Price = buyPrice * 1.1;
    const profit20Price = buyPrice * 1.2;
    const profit30Price = buyPrice * 1.3;

    const moneyAtSL = moneyInvested * 0.9;
    const moneyAtProfit10 = moneyInvested * 1.1;
    const moneyAtProfit20 = moneyInvested * 1.2;
    const moneyAtProfit30 = moneyInvested * 1.3;

    const profitLoss = (sellPrice - buyPrice) * quantity; // Calculate profit or loss

    const slDifference = buyPrice - slPrice;
    const totalSlLoss = moneyInvested - moneyAtSL;
    setResults({
      moneyInvested,
      slPrice,
      profit10Price,
      profit20Price,
      profit30Price,
      moneyAtSL,
      moneyAtProfit10,
      moneyAtProfit20,
      moneyAtProfit30,
      profitLoss,
      slDifference,
      totalSlLoss
    });
  };


  // Determine background color based on profit or loss
  const profitLossColor = results.profitLoss >= 0 ? 'bg-green-200' : 'bg-red-200';

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Option Trading Calculator</h1>

      {/* Input Section */}
      <div className="mb-6 flex gap-10 justify-between">
        <div className="flex flex-col w-1/3 mb-4">
          <label className="font-semibold">Quantity (Number of Options):</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseFloat(e.target.value))}
            className="p-2 border rounded-lg shadow"
          />
        </div>
        <div className="flex flex-col w-1/3 mb-4">
          <label className="font-semibold">Buy Price (Per Option):</label>
          <input
            type="number"
            value={buyPrice}
            onChange={(e) => setBuyPrice(parseFloat(e.target.value))}
            className="p-2 border rounded-lg shadow"
          />
        </div>
        <div className="flex flex-col w-1/3 mb-4">
          <label className="font-semibold">Sell Price (Per Option):</label>
          <input
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(parseFloat(e.target.value))}
            className="p-2 border rounded-lg shadow"
          />
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <div className={`p-4 border rounded-lg ${profitLossColor}`}>
          <p className="text-lg font-bold">Total Profit/Loss: ₹{results.profitLoss.toFixed(2)}</p>
        </div>
      </div>

      {/* SL Table */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Stop Loss (SL)</h2>
        <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold">SL Price (10%):</td>
              <td className="border px-4 py-2">₹{results.slPrice.toFixed(2)} per option</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Money at SL:</td>
              <td className="border px-4 py-2">₹{results.moneyAtSL.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Difference from Buy Price:</td>
              <td className="border px-4 py-2">₹{results.slDifference.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Total Loss:</td>
              <td className="border px-4 py-2">₹{results.totalSlLoss.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Profit Tables */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Profit Levels</h2>
        <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2 font-semibold">Level</th>
              <th className="border px-4 py-2 font-semibold">Price (Per Option)</th>
              <th className="border px-4 py-2 font-semibold">Money at Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Profit (10%):</td>
              <td className="border px-4 py-2">₹{results.profit10Price.toFixed(2)}</td>
              <td className="border px-4 py-2">₹{results.moneyAtProfit10.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Profit (20%):</td>
              <td className="border px-4 py-2">₹{results.profit20Price.toFixed(2)}</td>
              <td className="border px-4 py-2">₹{results.moneyAtProfit20.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Profit (30%):</td>
              <td className="border px-4 py-2">₹{results.profit30Price.toFixed(2)}</td>
              <td className="border px-4 py-2">₹{results.moneyAtProfit30.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OptionsChain;
