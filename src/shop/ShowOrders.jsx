import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowOrders.css";
import ShopNavBar from '../shop/ShopNavbar';

const ShowOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch orders from the backend API
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5006/api/orders/all");
        setOrders(response.data);
      } catch (error) {
        setError("Failed to fetch orders. Please try again later.");
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="show-orders-container">
      <ShopNavBar />
      <div className="orders-content">
        <h2>Order List</h2>
        {error && <p className="error">{error}</p>}
        {orders.length > 0 ? (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Items</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.customerName}</td>
                  <td>
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <strong>{item.name}</strong> (x{item.quantity}) - ${item.price}
                      </div>
                    ))}
                  </td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-orders">No orders available</p>
        )}
      </div>
    </div>
  );
};

export default ShowOrders;
