/* eslint-disable array-callback-return */
import React from 'react';
import style from './UserContent.module.css';
import {OrderItem} from '../../base/TableItem/OrderItem';
import {useEffect, useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export const UserOrder = () => {
  const token = localStorage.getItem('token');
  const [orders, setorders] = useState([]);
  const [sort, setsort] = useState('desc')
  const [limit, setlimit] = useState(5)
  const [pagination, setpagination] = useState()

  useEffect(() => {
    getHistory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getHistory = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/order/getorder?order=${sort}&limit=${limit}${pagination ? '&page='+pagination.curentPage : ''}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setorders(result.data.data);
        setpagination(result.data.pagination);
      })
      .catch(() => {
        swal('Error', 'Failed get data order, please try again later', 'error');
      });
  }

  const handleComplete = (orderId) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/order/updateorder`, {orderId, status: 'completed'})
    .then(() => {
      swal('Success', 'Order successfully updated', 'success')
      getHistory()
    })
    .catch(err => {
      swal('Error', 'Error update orde, please try again later', 'error')
    })
  }
  return (
    <div className={`container pt-3 ${style.content}`}>
      <h2>My Order</h2>
      <div className="d-flex table-order fw-bold flex-wrap">
        <input
          type="radio"
          class="table-order-radio-all d-none"
          name="table-order-radio"
          id="table-order-all"
          defaultChecked
        />
        <input
          type="radio"
          class="table-order-radio-not-paid-yet d-none"
          name="table-order-radio"
          id="table-order-not-paid-yet"
        />
        <input type="radio" class="table-order-radio-packed d-none" name="table-order-radio" id="table-order-packed" />
        <input type="radio" class="table-order-radio-sent d-none" name="table-order-radio" id="table-order-sent" />
        <input
          type="radio"
          class="table-order-radio-completed d-none"
          name="table-order-radio"
          id="table-order-completed"
        />
        <input
          type="radio"
          class="table-order-radio-completed d-none"
          name="table-order-radio"
          id="table-order-completed"
        />
        <input type="radio" class="table-order-radio-cancel d-none" name="table-order-radio" id="table-order-cancel" />

        <div class="table-order-all me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-all">All Items</label>
        </div>
        <div class="table-order-not-paid-yet me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-not-paid-yet">Not Yet Paid</label>
        </div>
        <div class="table-order-packed me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-packed">Packed</label>
        </div>
        <div class="table-order-sent me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-sent">Sent</label>
        </div>
        <div class="table-order-completed me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-completed">Completed</label>
        </div>
        <div class="table-order-cancel me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-cancel">cancel</label>
        </div>
      </div>

      <div className="table-order-product mt-5">
        {/* Table control */}
        <div className="d-flex flex-column flex-lg-row">
          {/* Order */}
          <div className={`${style.tableControl} w-25 ms-2 mt-2 mb-2`}>
            <span>Order : </span>
            <select
              className={`${style.InputTableControl} form-select`}
              aria-label="Default select example"
              onChange={(e) => setsort(e.target.value)}
            >
              <option value="ASC" selected>
                Ascending
              </option>
              <option value="DESC">Descending</option>
            </select>
          </div>
          {/* Amount of data */}
          <div className={`${style.tableControl} w-25 ms-2 mt-2 mb-2`}>
            <span>Amount of data : </span>
            <select
              className={`${style.InputTableControl} form-select`}
              aria-label="Default select example"
              onChange={(e) => setlimit(e.target.value)}
            >
              <option value="5">5 data / page</option>
              <option value="10">10 data / page</option>
              <option value="15">15 data / page</option>
            </select>
          </div>
          {/* Page */}
          <div className={`${style.tableControl} w-25 ms-2 mt-2 mb-2`}>
            {pagination && pagination.countData > 0 && (
              <Pagination
                onChange={(e) => setpagination({...pagination, curentPage: e})}
                pageSize={pagination.limit}
                current={pagination.curentPage}
                total={pagination.countData}
              />
            )}
          </div>
        </div>
        {/* Table */}
        <table className="w-100">
          <thead>
            <tr>
              <th style={{width: '25%', position: 'relative'}}>Invoice number</th>
              <th style={{width: '15%', position: 'relative'}}>Price</th>
              <th style={{width: '10%', position: 'relative'}}>Status</th>
              <th style={{width: '20%', position: 'relative'}}>Time</th>
              <th style={{width: '20%'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order, index) => (
                <OrderItem
                  key={index}
                  invoice_number={order.invoice_number}
                  price={order.totalPrice}
                  status={order.status}
                  time={order.created_at}
                  handleComplete={() => handleComplete(order.id_orders)}
                />
              ))}
          </tbody>
        </table>
        {orders && orders.length > 0 ? '' : (<h1>You dont have order</h1>)}
      </div>
    </div>
  );
};
