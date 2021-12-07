import FriendsList from "./FriendsList";
import PropTypes from 'prop-types';
import s from './Friends.module.css';

const Friends = () => {
  return (
    <ul className={s.friendsList}>
      <FriendsList />
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({})
  ),
};

export default Friends;
