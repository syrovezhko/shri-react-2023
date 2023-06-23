import Button from "@/components/UI/button/Button";
import Seaarch from "../components/UI/search/Seaarch";

export default function Home() {
  return (
    <div>
      <Button type={'increase'} text={''}/>
      <br/>
      <Button type={'decrease'} text={''}/>
      <br/>
      <Button type={'primary'} text={'Да'}/>
      <br/>
      <br/>
      <Button type={'secondary'} text={'Нет'}/>
      <br/>
      <br/>
      <Seaarch placeholder="Placeholder"/> 
    </div>
  );
};