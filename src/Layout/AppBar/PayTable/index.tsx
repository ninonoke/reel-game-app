import React from 'react';
import payTableSchema from '../../../constants/payTableSchema';
import closeSvg from '../../../assets/svgs/close.svg';
import './styles.scss';

interface PayTableProps {
  onClose: () => void
}

const PayTable:React.FC<PayTableProps> = ({ onClose }) => (
  <div className="pay-table-wrapper">
    <div className="pay-table">
      <button
        className="pay-table-wrapper__close-button"
        type="button"
        onClick={onClose}
      >
        <img
          alt="close icon"
          className="pay-table-wrapper__close-icon"
          src={closeSvg}
        />
      </button>
      <div className="pay-table-wrapper__item-wrapper">
        {payTableSchema.map((item) => (
          <div className="pay-table-wrapper__item">
            <div className="pay-table-wrapper__title">
              {item.title}
            </div>
            <div className="pay-table-wrapper__amount">
              {item.payAmount}
            </div>
          </div>
        ))}
      </div>

    </div>

  </div>
);

export default PayTable;
