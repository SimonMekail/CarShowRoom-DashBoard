const MaintenceInvoice = ({ maintenceInvoice }) => {
  const maintenceInvoiceList = maintenceInvoice.map((invoice) => (
    <tr key={invoice.id}>
      <th>{invoice.id}</th>
      <td>Test</td>
      <td>Test@gmail.com</td>
    </tr>
  ));

  return maintenceInvoiceList.length ? <>{maintenceInvoiceList}</> : null;
};
export default MaintenceInvoice;
