import React from "react";
import style from "./UserContent.module.css";

export const UserOrder = () => {
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
        <input
          type="radio"
          class="table-order-radio-packed d-none"
          name="table-order-radio"
          id="table-order-packed"
        />
        <input
          type="radio"
          class="table-order-radio-sent d-none"
          name="table-order-radio"
          id="table-order-sent"
        />
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
        <input
          type="radio"
          class="table-order-radio-cancel d-none"
          name="table-order-radio"
          id="table-order-cancel"
        />

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
    </div>
  );
};
