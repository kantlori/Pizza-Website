import React from 'react';
import { Button, FormGroup } from 'reactstrap';

function OrderSummary({ order, totalPrice, totalToppingPrice, updateOrder, handleSubmit }) {
    return (
        <div className='order-control' data-cy="order-control">
            <FormGroup>
                <div className="pizza-count" data-cy="pizza-count">
                    <Button onClick={() => updateOrder('pizzaCount', Math.max(1, order.pizzaCount - 1))} data-cy="decrease-pizza-count">-</Button>
                    <p data-cy="pizza-count-value">{order.pizzaCount}</p>
                    <Button onClick={() => updateOrder('pizzaCount', order.pizzaCount + 1)} data-cy="increase-pizza-count">+</Button>
                </div>
            </FormGroup>
            <FormGroup className='order-price' data-cy="order-price">
                <div className="order-details">
                    <h4>Sipariş Toplamı</h4>
                    <div className="extra-price">
                        <p>Seçimler:</p> <p data-cy="topping-price">{totalToppingPrice}₺</p>
                    </div>
                    <div className="total-price">
                        <p>Toplam:</p> <p data-cy="total-price">{totalPrice}₺</p>
                    </div>
                </div>
                <Button
                    color="primary"
                    onClick={handleSubmit}
                    disabled={order.selectedToppings.length < 4 || order.username.length < 3}
                    data-cy="submit-order"
                >
                    Sipariş Ver
                </Button>
            </FormGroup>
        </div>
    );
}

export default OrderSummary;
