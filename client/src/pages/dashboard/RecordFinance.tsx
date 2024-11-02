import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const RecordFinance = () => {
  const { user } = useUser();
  const [desc, setDesc] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [payMethod, setPayMethod] = useState<string>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newRecord = {
      userId: user?.id,
      date: new Date(),
      Amount: parseFloat(amount || "0"),
      Category: category,
      PayMethod: payMethod,
    };

    console.log(newRecord)

    // addRecord(newRecord)

    setAmount("");
    setDesc("");
    setCategory("");
    setPayMethod("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            required
            value={desc || ""}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <label>Amout:</label>
          <input
            type="number"
            required
            value={amount || ""}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            required
            value={category || ""}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Food">Food</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Payment Method:</label>
          <select
            required
            value={payMethod || ""}
            onChange={(e) => setPayMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecordFinance;
