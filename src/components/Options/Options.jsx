import css from './Options.module.css'

const Options = () => {
  return (
    <ul className={css.optionsList}>
        <li>
            <button className={css.optionsBtn}>Good</button>
            <button className={css.optionsBtn}>Neutral</button>
            <button className={css.optionsBtn}>Bad</button>
            <button className={css.optionsBtn}>Reset</button>
        </li>
    </ul>
  )
}

export default Options