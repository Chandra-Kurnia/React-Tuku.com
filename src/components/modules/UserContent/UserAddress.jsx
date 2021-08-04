import React from "react";
import style from "./UserContent.module.css";

export const UserAddress = () => {
  return (
    <div className={`container pt-3 ${style.content}`}>
      <div className={`text-center fw-bold fs-3 ${style.addressWrapper}`}>
        Chose another address
      </div>
      <div className={`text-center mt-2 p-3 ${style.modalWrapper}`}>
        Add new address
      </div>
      <div className={`mt-4 p-3 ${style.oldAddress}`}>
        <span className="fw-bold fs-5">Address Jane</span>
        <br />
        <p className="fs-6">
          Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
          Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
          Kab. Banyumas, 53181
        </p>
        <span className={`fs-6 fw-bold ${style.changeAddr}`}>Change Adress</span>
      </div>
    </div>
  );
};
