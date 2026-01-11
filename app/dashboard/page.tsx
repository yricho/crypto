"use client";

import { useState } from "react";
import Deposit from "../components/dashboard/Deposit";
import Home from "../components/dashboard/Home";
import Member from "../components/dashboard/Member";
import Nav from "../components/dashboard/Nav";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
  const [selected, setSelected] = useState("Dashboard");
  const handleSelected = (name: string) => {
    setSelected(name);
  };
  const View = {
    Member: <Member />,
    Deposit: <Deposit />,
  };

  return (
    <div className="gap-[24px]">
      <Nav />
      <div className="grid md:grid-cols-[20%_80%] space-x-[40px]">
        <div className="hidden md:flex flex-col bg-[#050911] h-[calc(100vh-120px)] pt-[40px]">
          <Sidebar onSelected={(name) => handleSelected(name)} />
        </div>
        <div>{View[selected as keyof typeof View] || <Home />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
