import React from 'react';

const InventoryDetailsItem = ({ inventoryItemDetails }) => {
  const { name, quantity } = inventoryItemDetails;

  console.log(name,quantity)
  return (
    <li className="inventory-item flex justify-between p-2 bg-gray-100 mb-2 rounded">
      <p className="text-gray-600">{name}</p>
      <p className="text-gray-600">{quantity}</p>
    </li>
  );
};

export default InventoryDetailsItem;
