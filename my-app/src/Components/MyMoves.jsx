import React, { useEffect, useState } from 'react';
import MyMovesItem from './MyMovesItem';

const MyMoves = () => {
    const [movesData,setMovesData]=useState([]);
    const [loading, setLoading]=useState(false)

  const handleFetchData=async()=>{
    setLoading(true)
    try{
      let response=await fetch("http://test.api.boxigo.in/sample-data/");
      let data=await response.json();
      console.log(data.Customer_Estimate_Flow)
      setMovesData(data.Customer_Estimate_Flow)
      setLoading(false)

    }
    catch(err){
      console.log(err)
    }
  }

  console.log(movesData)

  useEffect(()=>{
    handleFetchData()
  },[])

  

  return (
    <div className="container ml-auto p-4 w-[80%]">
    
      <h1 className="text-2xl font-bold mb-4">My Moves</h1>
      {loading? <h1>Loading...</h1>:<ul>
         {movesData.map((move) => (
          <MyMovesItem
            key={move.estimate_id}
            movingItemDetails={{
              movingFrom: move.moving_from,
              movingTo: move.moving_to,
              estimateId: move.estimate_id,
              propertySize: move.property_size,
              totalItems: move.total_items,
              distance: move.distance,
              movingOn: move.moving_on,
              customStatus: move.custom_status,
              newHouseAdditionalInfo: move.new_house_additional_info,
              oldHouseAdditionalInfo: move.old_house_additional_info,
              newFloorNo: move.new_floor_no,
              oldFloorNo: move.old_floor_no,
              newElevatorAvailability: move.new_elevator_availability,
              oldElevatorAvailability: move.old_elevator_availability,
              newParkingDistance: move.new_parking_distance,
              oldParkingDistance: move.old_parking_distance,
            }}
            inventoryItemsData={move.items.inventory}
            categoryData={move.items.category}
          />
        ))} 
      </ul> }
      
    </div>
  );
};


export default MyMoves