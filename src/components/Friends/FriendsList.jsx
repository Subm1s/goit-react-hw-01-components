import Friend from "../../data/friends.json";
import s from './Friends.module.css';

const FriendsList = ({ name, avatar, isOnline }) => {
  return Friend.map((el) => (
    <li key={el.id} className={s.item}>
      <span className={el.isOnline === true ? s.online : s.offline}>{el.isOnline}</span>
      <img className={s.avatar} src={el.avatar} alt="User avatar" width="48" />
      <p className={s.name}>{el.name}</p>
    </li>
  ));
};

export default FriendsList;
