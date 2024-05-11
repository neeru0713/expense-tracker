import { React, useState, useEffect } from "react";

const Form = ({
  index,
  setShowModal,
  recentTransactions,
  setRecentTransactions,
  expense,
  setExpense,
  editMode,
  data,
}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [selectCategory, setSelectCategory] = useState("");
  const [date, setDate] = useState("");

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "title") {
      setTitle(value);
    }

    if (name === "price") {
      const inputNumber = parseInt(value);
      if (isNaN(inputNumber)) {
        setPrice();
      } else {
        setPrice(inputNumber);
      }
    }

    if (name === "selectcategory") {
      setSelectCategory(value);
    }

    if (name === "date") {
      setDate(value);
    }
  };

  useEffect(() => {
    // edit form is open
    if (editMode === true) {
      setTitle(data.title);
      setPrice(data.price);
      setDate(data.date);
      setSelectCategory(data.selectCategory);
    }
  }, []);

  const handleAddExpenseClick = (e) => {
    e.preventDefault();
    if (editMode) {
      const newTr = {
        title,
        price,
        selectCategory,
        date,
      };
      const updatedTransactions = [...recentTransactions];
      updatedTransactions[index] = newTr;
      setRecentTransactions(updatedTransactions);
      setShowModal(false);
    } else {
      const transaction = {
        title,
        price,
        selectCategory,
        date,
      };
      setRecentTransactions([...recentTransactions, transaction]);
      console.log(expense, price);
      setExpense(expense + price);
      setShowModal(false);
    }
  };

 

  return (
    <div>
      <form className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold m-3">
          {editMode === true ? "Edit" : "Add"} Expenses
        </h1>
        <div className="flex gap-1">
          <input
            className="p-3 m-2 rounded-xl text-lg shadow-xl"
            type="text"
            value={title}
            onChange={inputChangeHandler}
            name="title"
            placeholder="Title"
          />
          <input
            className="p-3 m-2 rounded-xl text-lg shadow-xl"
            type="text"
            value={price}
            onChange={inputChangeHandler}
            name="price"
            placeholder="Price"
          />
        </div>
        <div className="flex mt-2 gap-1">
          <input
            className="p-3 m-2 rounded-xl text-lg shadow-xl"
            type="text"
            value={selectCategory}
            onChange={inputChangeHandler}
            name="selectcategory"
            placeholder="Select Category"
          />
          <input
            className="p-3 m-2 rounded-xl text-lg shadow-xl text-[#cdcdcd]"
            type="date"
            value={date}
            onChange={inputChangeHandler}
            name="date"
            placeholder="Date"
          />
        </div>
        <div className="flex mt-2 gap-1">
          <button
            onClick={handleAddExpenseClick}
            className="text-white font-semibold text-lg bg-[#f4bc4a] p-3 rounded-xl w-[40%] shadow-xl m-2"
          >
            {editMode === true ? "Edit" : "Add"} Expense
          </button>
          <button
            onClick={(e) => {
              setShowModal(false);
              e.preventDefault();
            }}
            className="text-lg bg-[#e3e3e3] p-3 rounded-xl w-[30%] shadow-xl m-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
