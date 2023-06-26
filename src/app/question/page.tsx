"use client"

import styles from "./../movie/[id]/page.module.scss";
import Question from "@/components/UI/question/Question";

const data = [
  {id: '1', type: 'declaration', title: 'Вопросы-ответы', text: ''},
  {id: '2', type: 'question', title: 'Что такое Билетопоиск?', text: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'},
  {id: '3', type: 'question', title: 'Какой компании принадлежит Билетопоиск?', text: 'Кто ж его знает...'},
  {id: '4', type: 'question', title: 'Как купить билет на Билетопоиск?', text: 'Нажимаем кнопочки и посылаем сигнал в космос'},
  {id: '5', type: 'question', title: 'Как оставить отзыв на Билетопоиск?', text: 'Отзывы принимаются по адресу: chto-to_tam@email.lol'},

]

export default async function Questions() {
  return (
    <div className={styles.container}>
      {data.map(i => (
        <Question
          type={i.type}
          title={i.title}
          text={i.text}/>
        ))}
    </div>
  );
};