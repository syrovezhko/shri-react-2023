"use client"
import Filter from "@/components/filter/Filter";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <div className="container">
      <Filter/>
      <Main/>
    </div>
  );
};