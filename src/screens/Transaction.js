import { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "../components/Navigation/SideBar";
import NavBar from "../components/Navigation/NavBar";

import Spinner from "../components/Spinner/Spinner";
// import TransactionList from "../components/Transactions/TransactionLists";
import RentInvoice from "../components/Transactions/RentInvoice";
import MaintenceInvoice from "../components/Transactions/MaintenceInvoice";
import PurchasingInvoice from "../components/Transactions/PurchasingInvoice";

export const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionsType] = useState(
    "Purchasing Transaction"
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setTransactions(response.data);
          setIsLoading(false);
        } else {
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="container-fluid min-vh-100 bg-body-secondary">
      <div className="row">
        <div className="col-2 bg-dark vh-100 sticky-top">
          <SideBar />
        </div>
        <div className="col ps-0">
          <NavBar />

          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <div className="container ">
                <div className="row justify-content-center">
                  <div className="col-4 my-4 ">
                    <span className="m-3">Select Transaction Type</span>
                    <select
                      className="form-select m-2 d-inline"
                      aria-label="Default select example"
                    >
                      <option defaultValue value="Purchasing Transaction">
                        Purchasing Transaction
                      </option>
                      <option value="Rent Transaction">Rent Transaction</option>
                      <option value="Maintence Transaction">
                        Maintence Transaction
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="container bg-white rounded mx-2 shadow-lg">
                <div className="text-center">
                  <p>{transactionType}</p>
                </div>

                <table
                  className="my-4 px-5 table"
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: " 0 15px",
                  }}
                >
                  <tbody>
                    {transactionType === "Maintence Transaction" ? (
                      <MaintenceInvoice maintenceInvoice={transactions} />
                    ) : transactionType === "Rent Transaction" ? (
                      <RentInvoice rentInvoice={transactions} />
                    ) : (
                      <PurchasingInvoice purchasingInvoice={transactions} />
                    )}
                    {/* <RentInvoice rentInvoice={transactions} /> */}
                  </tbody>
                </table>
              </div>
              {/* <TransactionList transactions={transactions} /> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
