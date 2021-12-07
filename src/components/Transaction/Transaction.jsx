import React from "react";
import TransactionList from "./TransactionList";
import s from './Transaction.module.css';

const Transaction = () => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.header}>
        <tr>
          <th className={s.tableColumn}>Type</th>
          <th className={s.tableColumn}>Amount</th>
          <th className={s.tableColumn}>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionList />
      </tbody>
    </table>
  );
};

export default Transaction;
