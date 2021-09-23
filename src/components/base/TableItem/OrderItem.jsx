import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import styles from './Orderitem.module.css'
import moment from 'moment'

export const OrderItem = (props) => {
  const {profile} = useSelector((state) => state.user);
  return (
    <Fragment>
      <tr style={{height: '60px'}}>
        <td>{props.invoice_number}</td>
        <td>Rp. {props.price}</td>
        <td>{props.status}</td>
        <td>{moment(props.time).format('LL')}</td>
        <td>
          {profile.role === 'customer' ? (
            props.status === 'pending' || props.status === 'packed' || props.status === 'completed' ? (
              <button className="btn btn-danger" disabled>
                {props.status}
              </button>
            ) : (
              <button className="btn btn-success" onClick={props.handleComplete}>
                Complete
              </button>
            )
          ) : props.statusOrder !== 'completed' ? (
              <select className={styles.select} name="" id="" onChange={(e) => props.handleupdate(e)} >
                {props.statusOrder === 'pending' ? (
                  <option value="pending" selected>
                    Pending
                  </option>
                ) : (
                  <option value="pending">Pending</option>
                )}

                {props.statusOrder === 'packed' ? (
                  <option value="packed" selected>
                    Packed
                  </option>
                ) : (
                  <option value="packed">Packed</option>
                )}

                {props.statusOrder === 'sent' ? (
                  <option value="sent" selected>
                    Sent
                  </option>
                ) : (
                  <option value="sent">Sent</option>
                )}

                {props.statusOrder === 'completed' ? (
                  <option value="completed" selected>
                    Completed
                  </option>
                ) : (
                  <option value="completed">Completed</option>
                )}
              </select>
          ) : 
          <select className={styles.select} name="" id="" disabled>
            <option value="">Completed</option>
          </select>
          }
        </td>
      </tr>
    </Fragment>
  );
};
