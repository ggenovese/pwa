import React from 'react';
import './listStyles.css';

function Fund({fund}) {
const {
    tradingSymbol,
    name,
    investmentVehicleId,
    morningstarCategory,
    performanceBeforeSalesChargeYearToDate,
    performanceBeforeSalesCharge1Year,
    performanceBeforeSalesCharge3Year,
} = fund;
  return (
    <div>
        <h2>{name}</h2>
        <p>{tradingSymbol}</p>
        <p>{investmentVehicleId}</p>
        <p>{morningstarCategory}</p>
        <p>{performanceBeforeSalesChargeYearToDate}</p>
        <p>{performanceBeforeSalesCharge1Year}</p>
        <p>{performanceBeforeSalesCharge3Year}</p>
    </div>
  );
}

export default Fund;
