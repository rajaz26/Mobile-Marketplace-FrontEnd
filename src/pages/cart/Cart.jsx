import React from "react";
import Footer from "../../components/footer/Footer";
import GNavbar from "../../components/gnavbar/GNavbar";
import "./cart.css";
const Cart = () => {
  return (
    <div>
      <GNavbar />
      <div className="cartContainer">
        <div className="left">
          <table>
            <tr className="tableRow">
              <th className="tableHeaders">Phone</th>
              <th className="tableHeaders">Name</th>
              <th className="tableHeaders">Price</th>
              <th className="tableHeaders">Quantity</th>
              <th className="tableHeaders">Total</th>
            </tr>
            <tr>
              <td className="tableDescription">
                <img className="cartPhoneImage" src="./images/ad1.png" />
              </td>
              <td className="tableDescription"> Iphone 11 Max</td>
              <td className="tableDescription"> PKR 150000</td>
              <td className="tableDescription"> 2</td>
              <td className="tableDescription"> PKR 300000</td>
            </tr>
            <tr>
              <td className="tableDescription">
                <img className="cartPhoneImage" src="./images/ad1.png" />
              </td>
              <td className="tableDescription"> Iphone 11 Max</td>
              <td className="tableDescription"> PKR 150000</td>
              <td className="tableDescription"> 2</td>
              <td className="tableDescription"> PKR 300000</td>
            </tr>
          </table>
        </div>
        <div className="right">
          <div className="paymentContainer">
            <h2 className="titleCart">Cart Total</h2>
            <div className="totalText">
              <b className="totalTextTitle">Subtotal</b>$79.60
            </div>
            <div className="totalText">
              <b className="totalTextTitle">Discount</b>$00.60
            </div>
            <div className="totalText">
              <b className="totalTextTitle">Total Amount</b>$79.60
            </div>
            <button className="checkOutButton">Checkout Now !!</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
