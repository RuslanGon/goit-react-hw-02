import css from './Feedback.module.css'

const Feedback = () => {
  return (
    <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>Good</li>
        <li className={css.feedbackItem}>Neutral</li>
        <li className={css.feedbackItem}>Bad</li>
        <li className={css.feedbackItem}>Total</li>
        <li className={css.feedbackItem}>Positivr</li>
    </ul>
  )
}

export default Feedback