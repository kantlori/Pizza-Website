import React from 'react';

function OrderButton({ item }) {
    function handleOrder() {
        console.log("Sipariş verildi: ", item);
    }

    return (
        <button onClick={handleOrder}>Sipariş Ver</button>
    );
}

export default OrderButton;
