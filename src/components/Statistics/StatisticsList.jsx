import React from "react";
import Static from "../../data/data.json";
import s from "./Statistics.module.css";
import  { getRandomColor } from './getRandomColor';

const StatisticsList = (props) => {
  return Static.map((el) => (
    <li key={el.id} className={s.item} style={{backgroundColor: getRandomColor()}}>
      <span className={s.label}>{el.label}</span>
      <span className={s.percentage}>{el.percentage}</span>
    </li>
  ));
};

export default StatisticsList;
