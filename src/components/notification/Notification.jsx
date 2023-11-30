import PropTypes from 'prop-types';
import css from './notification.module.css';

const Notification = ({ message }) => (
    <p className={css.feedback}>{message}</p>
    );

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;