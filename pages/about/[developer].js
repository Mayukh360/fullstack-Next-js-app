import React from "react";
import { useRouter } from 'next/router'

export default function Developer() {
  const router=useRouter();
  console.log(router.query.developer)
  const id=router.query.developer;
  const Arr = [
    {
      id: 1,
      name: "Yash",
      role: "Senior Developer",
    },
    {
      id: 2,
      name: "Vaibhav",
      role: "Backend Developer",
    },
    {
      id: 3,
      name: "Suresh",
      role: "Frontend Developer",
    },
  ];
  return (
    <div>
      <h1>Developer Team</h1>
     {id && Arr.filter((item)=>item.id==id).map((item)=>(
      <h3 key={item.id}>Name:{item.name} --- Role: {item.role}</h3>
     ))}
    </div>
  );
}
