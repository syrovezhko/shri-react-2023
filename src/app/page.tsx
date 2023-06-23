"use client"
import Button from "@/components/UI/button/Button";
import Seaarch from "../components/UI/search/Seaarch";
import Card from "@/components/UI/card/Card";
import Question from "@/components/UI/question/Question";

export default function Home() {
  return (
    <div>
      <Button type={'increase'}/>
      <br/>
      <Button type={'decrease'}/>
      <br/>
      <Button type={'primary'} text={'Да'}/>
      <br/>
      <br/>
      <Button type={'secondary'} text={'Нет'}/>
      <br/>
      <br/>
      <Button type={'arrow'}/>
      <br/>
      <br/>
      <Seaarch placeholder="Введите название" title='Назание'/> 
      <br/>
      <br/>
      <Card isCart={true} picture={'/card.png'} title={'Властелин колец: Братство кольца'} genre={'Фэнтези'}/>
      <br/>
      <br/>
      <Question type={'declaraion'} title={"Ну вот и все"} text={"Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."}/>
      <br/>
      <br/>
      <Question type={'about'} title={"О нас"} text={"Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."}/>
    </div>
  );
};