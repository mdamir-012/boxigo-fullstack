import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CategoryDetails from "./CategoryDetails";
import { IoIosArrowUp } from "react-icons/io";

const InventoryDetailsItem = ({ inventoryItemDetails,categoryData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const { name, id } = inventoryItemDetails;

  console.log(categoryData)

  console.log(name);
  return (
    <div className="flex justify-between items-center gap-20 p-2 bg-gray-100 mb-2 rounded">
  <div className="flex items-center gap-3">
    <p className="text-orange-600 font-bold">{name}</p>
    <p className="text-gray-600">{id}</p>
  </div>

  <div className="flex justify-content: flex-end"> <button className="text-xl pt-2 text-black" onClick={handleToggle}>
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
  </div>
</div>

  );
};

export default InventoryDetailsItem;
