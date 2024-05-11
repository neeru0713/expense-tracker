// import logo from "./logo.svg";
import "./App.css";
import Items from "./components/Items";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Modal from "./components/Modal";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState("");
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0)
  const [recentTransactions, setRecentTransactions] = useState([]);

  const handleAddExpenseClick = () => {
    setShowModal(true);
    setFormName("addExpenses");
  };

  const handleAddIncomeClick = () => {
    setShowModal(true);
    setFormName("addIncome");
  };

  return (
    <div className="App flex flex-col">
      <div className="flex m-2 gap-1 ">
        <div className="border rounded-full bg-red-600 h-[25px] w-[25px]"></div>
        <div className="border rounded-full bg-yellow-500 h-[25px] w-[25px]"></div>
        <div className="border rounded-full bg-green-600 h-[25px] w-[25px]"></div>
      </div>
      <div className="bg-[#3b3b3b] h-[100vh] border rounded-lg flex flex-col">
        <p className="m-4 text-white font-md text-3xl font-semibold">
          Expense Tracker
        </p>
        <div className="bg-[#626262] h-[33%] w-[95%] rounded-lg mt-0 flex m-[2%] ">
          <div className="bg-[#9b9b9b] rounded-lg w-[22%] m-[4%] flex flex-col text-center">
            <div className="flex flex-col m-[14%]">
              <p className="text-white text-2xl">
                Wallet Balance:
                <span className="text-[#9dff5a] font-semibold">₹{balance}</span>
              </p>
              <button
                onClick={handleAddIncomeClick}
                className="text-white font-semibold text-md bg-[#8ee049] p-2 rounded-lg w-[56%] mt-4 m-auto"
              >
                + Add Income
              </button>
            </div>
          </div>
          <div className="bg-[#9b9b9b] w-[22%] rounded-lg m-[4%]  text-center flex flex-col">
            <div className="flex flex-col m-[14%]">
              <p className="text-white text-2xl">
                Expenses:
                <span className="text-[#f4bc4a] font-semibold">₹{expense}</span>
              </p>
              <button
                onClick={handleAddExpenseClick}
                className="text-white font-semibold text-md bg-[#ff3a3b] p-2 rounded-lg w-[56%] mt-4 m-auto"
              >
                + Add Expense
              </button>
            </div>
          </div>
          {/* <div className="bg-[#ff9404] h-[66%] w-[20%] rounded-full m-[4%]"></div> */}
          <div className="flex flex-col">
            <div className="flex">
              <div className="big-circle ml-[8%]"></div>
            </div>
            <div className="flex">
              <div className="flex align-items items-center gap-2 m-4">
                <div className="bg-[#a100ff] h-[35%] w-[22%]"></div>
                <p className="text-white text-md">Food</p>
              </div>
              <div className="flex align-items items-center gap-2 m-4">
                <div className="bg-[#ff9404] h-[35%] w-[22%]"></div>
                <p className="text-white text-md">Enterinment</p>
              </div>
              <div className="flex align-items items-center gap-2 m-4">
                <div className="bg-[#fde006] h-[35%] w-[22%]"></div>
                <p className="text-white text-md">Travel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex italic m-4 text-white font-md text-3xl font-semibold justify-between w-[80%]">
            <p className="w-[50%]">Recent Transction</p>
            <p className="w-[30%] mr-[4%]">Top Expenses</p>
          </div>
          <div className="flex">
            <div className="w-[50%] rounded-lg border bg-white m-4">
              {recentTransactions.map((item, index) => (
                <Items key={index} data={item} index={index} recentTransactions={recentTransactions} setRecentTransactions={setRecentTransactions}/>
              ))}

              <div className="flex m-4">
                <div className="flex m-auto gap-2 align-items items-center text-lg">
                  <div className="bg-gray-200 rounded-lg px-3 py-2 text-center shadow-xl">
                    <IoIosArrowRoundBack />
                  </div>
                  <div className="bg-teal-600 text-md font-semibold text-white rounded-md px-3 py-1 shadow-xl">
                    1
                  </div>
                  <div className="bg-gray-200 rounded-lg px-3 py-2 shadow-xl">
                    <IoIosArrowRoundForward />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] rounded-lg border bg-white m-4 flex flex-col">
              <div className="flex m-[10%] gap-2 ">
                <h1>Enterinment</h1>
                <div className="bg-[#8684d2] p-2 w-[78%] rounded-r-lg"></div>
              </div>

              <div className="flex ml-[20%] gap-2 mt-[10%]">
                <h1>Food</h1>
                <div className="bg-[#8684d2] p-2 w-[50%] rounded-r-lg"></div>
              </div>

              <div className="flex m-8 gap-2 ml-[20%] mt-[20%]">
                <h1>Travel</h1>
                <div className="bg-[#8684d2] p-2 w-[28%] rounded-r-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        formName={formName}
        setShowModal={setShowModal}
        balance={balance}
        setBalance={setBalance}
        recentTransactions={recentTransactions}
        setRecentTransactions={setRecentTransactions}
        expense={expense}
        editMode={false}
        setExpense={setExpense}
      />
    </div>
  );
}

export default App;
