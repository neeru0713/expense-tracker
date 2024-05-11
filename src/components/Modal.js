import { React, useState } from "react";
import Form from "./Form.js";
import BalanceForm from "./BalanceForm.js";

const Modal = ({ index, showModal, formName, setShowModal, balance, setBalance, recentTransactions, setRecentTransactions, expense, setExpense, editMode, data}) => {
  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="bg-[#eeeeee] fixed top-[30%] left-[30%] w-[40%] border rounded-lg flex flex-col mt-4 m-auto px-2 py-2">
            {formName === "addExpenses" && <Form setShowModal={setShowModal}  recentTransactions={recentTransactions} setRecentTransactions={setRecentTransactions} expense={expense} setExpense={setExpense} editMode={editMode} data={data} index={index}/>}
            {formName === "addIncome" && <BalanceForm setShowModal={setShowModal} balance={balance} setBalance={setBalance}/>}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
