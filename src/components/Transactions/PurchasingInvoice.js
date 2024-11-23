const PurchasingInvoice = ({ purchasingInvoice }) => {
  const purchasingInvoiceList = purchasingInvoice.map((invoice) => (
    <tr key={invoice.id}>
      <th>{invoice.id}</th>
      <td>Test</td>
      <td>Test@gmail.com</td>
    </tr>
  ));

  return purchasingInvoiceList.length ? <>{purchasingInvoiceList}</> : null;
};
export default PurchasingInvoice;
