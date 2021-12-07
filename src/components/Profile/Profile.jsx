import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  const statsContent = Object.entries(stats).map(([key, value]) => {
    return (
      <li key={key}>
        <span className={s.label}>{key}</span>
        <span className={s.quantity}>{value}</span>
      </li>
    );
  });
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        {statsContent}
      </ul>
    </div>
  );
};

Profile.propTypes ={
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired
  })
}

export default Profile;
