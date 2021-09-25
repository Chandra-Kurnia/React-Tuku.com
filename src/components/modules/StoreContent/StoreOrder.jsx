/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import style from '../UserContent/UserContent.module.css';
import {OrderItem} from '../../base/TableItem/OrderItem';
import axios from 'axios';
import {useState, useEffect} from 'react';
import swal from 'sweetalert';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export const StoreOrder = () => {
  const token = localStorage.getItem('token');
  const [orders, setorders] = useState();
  const [sort, setsort] = useState('desc');
  const [limit, setlimit] = useState(5);
  const [pagination, setpagination] = useState();

  useEffect(() => {
    getHistory();
  }, [sort, limit, pagination && pagination.curentPage]);

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
  };

  const handlePagination = (e) => {
    setpagination({...pagination, curentPage: e});
  };

  const hanldeUpdateOrder = (orderId, e) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/order/updateorder`, {status: e.target.value, orderId})
      .then(() => {
        swal('Success', 'Data successfully updated', 'success');
        getHistory();
      })
      .catch((err) => {
        console.log(err);
        swal('Error', 'Update data failed', 'error');
      });
  };

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
          <div className={`${style.tableControl} ms-2 mt-2 mb-2`}>
            <span>Order : </span>
            <select
              className={`${style.InputTableControl} form-select`}
              aria-label="Default select example"
              onChange={(e) => setsort(e.target.value)}
            >
              <option value="ASC">Ascending</option>
              <option value="DESC" selected>
                Descending
              </option>
            </select>
          </div>
          {/* Amount of data */}
          <div className={`${style.tableControl} ms-2 mt-2 mb-2`}>
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
          <div className={`${style.tableControl} ms-2 mb-2`} style={{"margin-top": "40px"}}>
            {pagination && pagination.countData && (
              <Pagination
                onChange={(e) => handlePagination(e)}
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
              <th style={{width: '10%', position: 'relative'}}>Payment</th>
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
                  status={order.payment}
                  time={order.created_at}
                  statusOrder={order.status}
                  handleupdate={(e) => hanldeUpdateOrder(order.id_orders, e)}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
