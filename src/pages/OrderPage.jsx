import React, { useState } from 'react';
import axios from 'axios';
import pizzaData from '../fakeData';
import { Form, FormGroup, Label, Button, Input, Container } from 'reactstrap';
import "../css/OrderPage.css"

function OrderPage() {
    const [order, setOrder] = useState({
        pizzaCount: 1,
        selectedSize: "orta",
        selectedDough: "normal",
        selectedToppings: [],
        orderNote: "",
        pizzaName: pizzaData[6].name
    });

    const pizzaPrice = pizzaData[6].price;

    const updateOrder = (key, value) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            [key]: value,
        }));
    };

    const handleToppingChange = (event) => {
        const value = event.target.value;
        setOrder((prevOrder) => {
            const selectedToppings = prevOrder.selectedToppings.includes(value)
                ? prevOrder.selectedToppings.filter((topping) => topping !== value)
                : [...prevOrder.selectedToppings, value];
            return { ...prevOrder, selectedToppings };
        });
    };

    const toppingPrice = 5;
    const totalToppingPrice = order.selectedToppings.length * toppingPrice;
    const totalPizzaPrice = pizzaPrice * order.pizzaCount;
    const totalPrice = totalPizzaPrice + totalToppingPrice;

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://reqres.in/api/users', {
                ...order,
                totalPrice,
            });
            console.log('Order submitted:', response.data);
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <div >
            <header>
                <h1>Teknolojik Yemekler</h1>
                <div className="order-header-buttons">
                    <button>Anasayfa</button>
                    <button>Seçenekler</button>
                    <button>Sipariş Oluştur</button>
                </div>
            </header>
            <section>
                <div className="pizza-info">
                    <h4>{pizzaData[6].name}</h4>
                    <div className="pizza-details">
                        <p>{pizzaPrice}₺</p>
                        <div className="rateNreview">
                            <p>{pizzaData[6].rating}</p>
                            <p>({pizzaData[6].reviewCount})</p>
                        </div>
                    </div>
                    <p>{pizzaData[6].description}</p>
                </div>
                <Form>
                    <FormGroup className="pizza-sizes">
                        <div className="dough-size">
                            <Label className='dough-header'>Boyut Seç</Label>
                            <div className="dough-option">
                                <input
                                    type="radio"
                                    name="boyut"
                                    value="kucuk"
                                    id="kucuk"
                                    checked={order.selectedSize === "kucuk"}
                                    onChange={(e) => updateOrder('selectedSize', e.target.value)}
                                />
                                <Label htmlFor="kucuk">Küçük</Label>
                            </div>
                            <div className="dough-option">
                                <input
                                    type="radio"
                                    name="boyut"
                                    value="orta"
                                    id="orta"
                                    checked={order.selectedSize === "orta"}
                                    onChange={(e) => updateOrder('selectedSize', e.target.value)}
                                />
                                <Label htmlFor="orta">Orta</Label>
                            </div>
                            <div className="dough-option">
                                <input
                                    type="radio"
                                    name="boyut"
                                    value="buyuk"
                                    id="buyuk"
                                    checked={order.selectedSize === "buyuk"}
                                    onChange={(e) => updateOrder('selectedSize', e.target.value)}
                                />
                                <Label htmlFor="buyuk">Büyük</Label>
                            </div>
                        </div>
                        <div className='dough-thickness'>
                            <Label>Hamur Seç</Label>
                            <select name="hamur" value={order.selectedDough} onChange={(e) => updateOrder('selectedDough', e.target.value)}>
                                <option value="ince">İnce</option>
                                <option value="normal">Normal</option>
                                <option value="kalin">Kalın</option>
                            </select>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <h6>Ek Malzemeler</h6>
                        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        <div>
                            {['pepperoni', 'sosis', 'jambon', 'tavuk', 'soğan', 'domates', 'mısır', 'sucuk', 'jalapeno', 'sarımsak', 'biber', 'ananas', 'kabak'].map((topping) => (
                                <Label key={topping}>
                                    <input
                                        type="checkbox"
                                        value={topping}
                                        checked={order.selectedToppings.includes(topping)}
                                        onChange={handleToppingChange}
                                    />
                                    {topping.charAt(0).toUpperCase() + topping.slice(1)}
                                </Label>
                            ))}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label>Sipariş Notu</Label>
                        <Input
                            type="text"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={order.orderNote}
                            onChange={(e) => updateOrder('orderNote', e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <div className="pizza-count">
                            <Button color="warning" onClick={() => updateOrder('pizzaCount', Math.max(1, order.pizzaCount - 1))}>-</Button>
                            <p>{order.pizzaCount}</p>
                            <Button color="warning" onClick={() => updateOrder('pizzaCount', order.pizzaCount + 1)}>+</Button>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <div className="order-summary">
                            <h4>Sipariş Toplamı</h4>
                            <div className="order-details">
                                <p>Seçimler: {order.selectedSize} boyut, {order.selectedDough} hamur, {order.selectedToppings.join(', ')}</p>
                                <p>Toplam Pizza Fiyatı: {totalPizzaPrice}₺</p>
                                <p>Ek Malzemeler: {totalToppingPrice}₺</p>
                                <h5>Toplam: {totalPrice}₺</h5>
                            </div>
                            <Button color="primary" onClick={handleSubmit}>Sipariş Ver</Button>
                        </div>
                    </FormGroup>
                </Form>
            </section>
        </div>
    );
}

export default OrderPage;
