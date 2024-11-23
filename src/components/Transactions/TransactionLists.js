const TransactionList = ({ transactions }) => {
  const transactionList = transactions.map((transaction) => (
    <tr key={transaction.id}>
      <th>{transaction.id}</th>
      <td>Test</td>
      <td>Test@gmail.com</td>
    </tr>
  ));

  return transactionList.length ? <div></div> : null;
};
export default TransactionList;
