import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <div className={css.feedbackOptions}>
        <button 
            className={css.button} 
            type="button"
            name="good"
            onClick={() => onLeaveFeedback('good')}>
                Good
        </button>
        <button className={css.button}
            type="button"
            name="neutral"
            onClick={() => onLeaveFeedback('neutral')}>
                Neutral
        </button>
        <button className={css.button}
            type="button"
            name="bad"
            onClick={() => onLeaveFeedback('bad')}>
                Bad
        </button>
    </div>
    );

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;