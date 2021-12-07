import transaction from "../../data/transaction-history.json";
import PropTypes from "prop-types";
import s from './Transaction.module.css';

const TransactionList = () => {
  return transaction.map((el) => (
      <tr key={el.id} className={s.tableRow}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
      </tr>
  ));
};

TransactionList.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionList;
