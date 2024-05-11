import { React, useState } from "react";

const BalanceForm = ({setShowModal, balance, setBalance}) => {
  const [incomeamount, setIncomeAmount] = useState();

  const inputChangeHandler = (event) => {
    console.log(typeof event.target.value)
    setIncomeAmount(parseInt(event.target.value))
  };

  const handleAddBalanceClick = (e) => {
  e.preventDefault()
    setBalance(balance+incomeamount)
    setShowModal(false)
  }
  return (
    <div>
      <form className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold m-3">Add Balance</h1>
        <div className="flex gap-1">
          <input
            className="p-3 m-2 rounded-xl text-lg shadow-xl"
            type="text"
            value={incomeamount}
            onChange={inputChangeHandler}
            name="title"
            placeholder="Income Amount"
          />
          <div className="flex mt-2 gap-4">
            <button onClick={handleAddBalanceClick} className="text-white font-semibold text-lg bg-[#f4bc4a] p-3 rounded-xl  shadow-xl m-2">
              Add Balance
            </button>
            <button onClick={(e) => {
                setShowModal(false)
                e.preventDefault()
            }}
            className="text-lg bg-[#e3e3e3] p-3 rounded-xl  shadow-xl m-2">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BalanceForm;
