"use client"
import Button from "@/components/UI/button/Button";
import Seaarch from "../components/UI/search/Seaarch";
import Card from "@/components/UI/card/Card";
import Question from "@/components/UI/question/Question";
import Revue from "@/components/UI/revue/Revue";
import MovieCard from "@/components/UI/movieCard/MovieCard";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
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