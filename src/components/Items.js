import { React, useState } from "react";
import { PiPizzaBold } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import { TbLuggage } from "react-icons/tb";
import { LuPencil } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import Modal from "./Modal";

const Items = ({ data, expense, setExpense, index, recentTransactions, setRecentTransactions }) => {
  const [showModal, setShowModal] = useState(false);

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const handleEditItemClick = () => {
    setShowModal(true);
  };

  const handleDeleteItemClick =() => {
const newArray = [...recentTransactions]; 
newArray.splice(index, 1); 
setRecentTransactions(newArray);
  }

  return (
    <>
      <div className="flex  justify-between">
        <div className="flex m-[3%] gap-4">
          {data.selectCategory === "food" && (
            <PiPizzaBold className="text-5xl bg-gray-200 rounded-full px-2 py-1" />
          )}
          {data.selectCategory === "movie" && (
            <CiGift className="text-5xl bg-gray-200 rounded-full px-2 py-1" />
          )}
          {data.selectCategory === "auto" && (
            <TbLuggage className="text-5xl bg-gray-200 rounded-full px-2 py-1" />
          )}

          <div className="flex flex-col">
            <h1 className="text-lg">{data.title}</h1>
            <p className="text-gray-400">{formatDate(data.date)}</p>
          </div>
        </div>
        <div className="flex m-[3%] gap-4">
          <div className="text-orange-300 text-md font-semibold mt-1">
            ₹{data.price}
          </div>
          <div className="flex gap-1">
            <RxCrossCircled 
            onClick={handleDeleteItemClick}
            className="text-white text-4xl bg-red-600 rounded-md px-2 py-1" />

            <LuPencil
              onClick={handleEditItemClick}
              className="text-white text-4xl bg-yellow-400 rounded-md px-2 py-1"
            />
          </div>
        </div>
      </div>
      <Modal
        index={index}
        showModal={showModal}
        setShowModal={setShowModal}
        expense={expense}
        setExpense={setExpense}
        editMode={true}
        data={data}
        recentTransactions={recentTransactions}
        setRecentTransactions={setRecentTransactions}
        formName="addExpenses"
      />
      <hr className="w-[97%] bg-[#3b3b3b] m-2" />
    </>
  );
};

export default Items;
