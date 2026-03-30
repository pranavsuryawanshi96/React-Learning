import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButtonClick }) => {
  // let { foodItem } = props;
  return (
    <li
      className={`list-group-item ${bought && "active"}  ${styles["p-item"]}`}
    >
      <span className={styles["p-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => handleBuyButtonClick()}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
