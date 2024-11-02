import { useUser } from "@clerk/clerk-react";
import ListFinance from "./ListFinance";
import RecordFinance from "./RecordFinance";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div>
      <h1>{`Welcome ${user ? `${user?.firstName}`:''}! Here's your finances..`}</h1>
      <ListFinance/>
      <RecordFinance/>
    </div>
  );
};

export default Dashboard;
