import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import {
  BsCalendar2CheckFill,
  BsPen,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { IoCheckbox } from "react-icons/io5";
import InventoryDetailsItem from "./InventoryDetailsItem";

const MyMovesItem = ({
  movingItemDetails,
  inventoryItemsData,
  categoryData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const {
    movingFrom,
    movingTo,
    estimateId,
    propertySize,
    totalItems,
    distance,
    movingOn,
    customStatus,
    newHouseAdditionalInfo,
    oldHouseAdditionalInfo,
    newFloorNo,
    oldFloorNo,
    newElevatorAvailability,
    oldElevatorAvailability,
    newParkingDistance,
    oldParkingDistance,
  } = movingItemDetails;

  return (
    <li className="my-moves-list-item p-4 bg-white shadow-md rounded-md mb-4">
      <div className="from-to-address-container mb-4">
        <div className="from-address-container">
          <h1 className="text-lg font-bold">From</h1>
          <p className="text-gray-600">{movingFrom}</p>
        </div>
        <div className="next-arrow-container mx-4">
          <HiOutlineArrowNarrowRight className="text-xl text-gray-600" />
        </div>
        <div className="to-address-container">
          <h1 className="text-lg font-bold">To</h1>
          <p className="text-gray-600">{movingTo}</p>
        </div>
        <div className="estimate-id-container ml-4">
          <h1 className="text-lg font-bold">Request#</h1>
          <p className="text-orange-500 font-semibold">{estimateId}</p>
        </div>
      </div>

      <div className="moving-details-container grid grid-cols-3 gap-4 mb-4">
        <div className="moving-details-item-container flex items-center">
          <AiFillHome className="text-xl text-gray-600 mr-2" />
          <p className="text-gray-600">{propertySize}</p>
        </div>
        <div className="moving-details-item-container flex items-center">
          <FaBoxes className="text-xl text-gray-600 mr-2" />
          <p className="text-gray-600">{totalItems}</p>
        </div>
        <div className="moving-details-item-container flex items-center">
          <GiPathDistance className="text-xl text-gray-600 mr-2" />
          <p className="text-gray-600">{distance}</p>
        </div>
        <div className="moving-details-item-container flex items-center">
          <BsCalendar2CheckFill className="text-xl text-gray-600 mr-2" />
          <p className="text-gray-600">{movingOn}</p>
          <BsPen className="ml-2 text-gray-600" />
          <IoCheckbox className="ml-2 text-orange-400" />
          <p className="ml-2 text-gray-600">is flexible</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <button
          type="button"
          className="view-move-details-btn bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded"
          onClick={toggleExpand}
        >
          View move details
        </button>
        <button
          type="button"
          className="quotes-btn bg-green-500 text-white px-4 py-2 rounded"
        >
          {customStatus}
        </button>
      </div>

      {isExpanded && (
        <div>
          <div className=" flex justify-between additional-information-container mb-4">
            <h1 className="text-lg font-bold">Additional Information</h1>
            <button
              type="button"
              className="ml-4  bg-black text-white p-2 rounded-sm"
            >
              Edit Additional Info
            </button>
          </div>
          <p className="text-gray-600 mb-4">{oldHouseAdditionalInfo}</p>
          <p className="text-gray-600 mb-4">{newHouseAdditionalInfo}</p>

          <div className="flex justify-between additional-information-container mb-4">
            <h1 className="text-lg font-bold">House Details</h1>
            <button
              type="button"
              className="ml-4 text-white bg-black p-2 rounded-sm"
            >
              Edit House Details
            </button>
          </div>
          <h1 className="existing-house-details-item-heading text-orange-500 font-bold mb-2">
            Existing House Details
          </h1>
          <div className="existing-house-details-container grid grid-cols-3 gap-4 mb-4">
            <div className="existing-house-details-item">
              <h1 className="text-md font-bold">Floor No.</h1>
              <p className="text-gray-600">{oldFloorNo}</p>
            </div>
            <div className="existing-house-details-item">
              <h1 className="text-md font-bold">Elevator Available</h1>
              <p className="text-gray-600">{oldElevatorAvailability}</p>
            </div>
            <div className="existing-house-details-item">
              <h1 className="text-md font-bold">
                Distance from Elevator/Staircase to truck
              </h1>
              <p className="text-gray-600">{oldParkingDistance}</p>
            </div>
          </div>

          <h1 className="existing-house-details-item-heading text-orange-500 font-bold mb-2">
            New House Details
          </h1>
          <div className="existing-house-details-container grid grid-cols-3 gap-4 mb-4">
            <div className="existing-house-details-item">
              <h1 className="text-md font-bold">Floor No.</h1>
              <p className="text-gray-600">{newFloorNo}</p>
            </div>
            <div className="existing-house-details-item">
              <h1 className="text-md font-bold">Elevator Available</h1>
              <p className="text-gray-600">{newElevatorAvailability}</p>
            </div>
            <div className="existing-house-details-item">
              <h1 className="text-md font-bold">
                Distance from Elevator/Staircase to truck
              </h1>
              <p className="text-gray-600">{newParkingDistance}</p>
            </div>
          </div>

          <div className="flex justify-between additional-information-container mb-4">
            <h1 className="text-lg font-bold">Inventory Details</h1>
            <button
              type="button"
              className="ml-4 text-white bg-black p-2 rounded-sm"
            >
              Edit Inventory
            </button>
          </div>
          <ul className="inventory-item-details-list-container">
            {inventoryItemsData?.map((each) => (
              <InventoryDetailsItem
                inventoryItemDetails={each}
                // categoryData={categoryData}
                key={each.id}

                categoryData={each.category?.map((elem) => elem)}
              />
            ))}
          </ul>
        </div>
      )}
      <hr className="border-gray-200 mt-4" />
    </li>
  );
};

export default MyMovesItem;
