"use client"
import Button from "@/components/UI/button/Button";
import Seaarch from "../components/UI/search/Seaarch";
import Card from "@/components/UI/card/Card";

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
      <Seaarch placeholder="Введите название" title='Назание'/> 
      <br/>
      <br/>
      <Card isCart={true} picture={'/card.png'} title={'Властелин колец: Братство кольца'} genre={'Фэнтези'}/>
    </div>
  );
};