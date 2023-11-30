import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
    <div className={css.feedbackOptions}>
        <button 
            className={css.button} 
            type="button"
            name="good"
            onClick={onLeaveFeedback}>
                Good
        </button>
        <button className={css.button}
            type="button"
            name="neutral"
            onClick={onLeaveFeedback}>
                Neutral
        </button>
        <button className={css.button}
            type="button"
            name="bad"
            onClick={onLeaveFeedback}>
                Bad
        </button>
    </div>
    );

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};