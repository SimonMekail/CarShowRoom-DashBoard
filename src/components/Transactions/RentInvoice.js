const RentInvoice = ({ rentInvoice }) => {
  const rentInvoiceList = rentInvoice.map((invoice) => (
    <tr key={invoice.id}>
      <th>{invoice.id}</th>
      <td>Test</td>
      <td>Test@gmail.com</td>
    </tr>
  ));

  return rentInvoiceList.length ? <>{rentInvoiceList}</> : null;
};
export default RentInvoice;
