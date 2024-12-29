import React, { useState } from 'react';
import axios from 'axios';
import pizzaData from '../fakeData';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
import "../css/OrderPage.css"
import "../../images/iteration-1-images/logo.svg"


function OrderPage({ onBack, onSuccess }) {
    const pizzaIndex = Math.floor(Math.random() * pizzaData.length)
    const [order, setOrder] = useState({
        username: "",
        pizzaCount: 1,
        selectedSize: "orta",
        selectedDough: "normal",
        selectedToppings: [],
        orderNote: "",
        pizzaName: pizzaData[pizzaIndex].name
    });

    const pizzaPrice = pizzaData[pizzaIndex].price;

    const updateOrder = (key, value) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            [key]: value,
        }));
    };

    const handleToppingChange = (event) => {
        const value = event.target.value;

        setOrder((prevOrder) => {
            const isSelected = prevOrder.selectedToppings.includes(value);
            if (!isSelected && prevOrder.selectedToppings.length >= 10) {
                alert("En fazla 10 malzeme seçebilirsiniz.");
                return prevOrder;
            }

            const selectedToppings = isSelected
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
            onSuccess();
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <div>
            <header>
                <img src="../../images/iteration-1-images/logo.svg" alt="" data-cy="header-logo" />
                <div className="order-header-buttons">
                    <button onClick={onBack} data-cy="returnhome-button">Anasayfa</button>
                    <p>-</p>
                    <button>Seçenekler</button>
                    <p>-</p>
                    <button>Sipariş Oluştur</button>
                </div>
            </header>
            <section>
                <div className="pizza-info">
                    <h4 data-cy="pizza-name">{pizzaData[pizzaIndex].name}</h4>
                    <div className="pizza-details">
                        <p data-cy="pizza-price">{pizzaPrice}₺</p>
                        <div className="rateNreview" data-cy="pizza-rate-review">
                            <p>{pizzaData[pizzaIndex].rating}</p>
                            <p>({pizzaData[pizzaIndex].reviewCount})</p>
                        </div>
                    </div>
                    <p data-cy="pizza-description">{pizzaData[pizzaIndex].description}</p>
                </div>
                <Form>
                    <FormGroup className="pizza-sizes" data-cy="pizza-sizes">
                        <div className="dough-size" data-cy="dough-size">
                            <Label className='dough-header'>Boyut Seç</Label>
                            <div className="dough-option" data-cy="dough-option-small">
                                <input
                                    type="radio"
                                    name="boyut"
                                    value="kucuk"
                                    id="kucuk"
                                    checked={order.selectedSize === "kucuk"}
                                    onChange={(e) => updateOrder('selectedSize', e.target.value)}
                                    data-cy="size-small"
                                />
                                <Label htmlFor="kucuk">Küçük</Label>
                            </div>
                            <div className="dough-option" data-cy="dough-option-medium">
                                <input
                                    type="radio"
                                    name="boyut"
                                    value="orta"
                                    id="orta"
                                    checked={order.selectedSize === "orta"}
                                    onChange={(e) => updateOrder('selectedSize', e.target.value)}
                                    data-cy="size-medium"
                                />
                                <Label htmlFor="orta">Orta</Label>
                            </div>
                            <div className="dough-option" data-cy="dough-option-large">
                                <input
                                    type="radio"
                                    name="boyut"
                                    value="buyuk"
                                    id="buyuk"
                                    checked={order.selectedSize === "buyuk"}
                                    onChange={(e) => updateOrder('selectedSize', e.target.value)}
                                    data-cy="size-large"
                                />
                                <Label htmlFor="buyuk">Büyük</Label>
                            </div>
                        </div>
                        <div className='dough-thickness' data-cy="dough-thickness">
                            <Label>Hamur Seç</Label>
                            <select
                                name="hamur"
                                value={order.selectedDough}
                                onChange={(e) => updateOrder('selectedDough', e.target.value)}
                                data-cy="dough-select">
                                <option value="ince">İnce</option>
                                <option value="normal">Normal</option>
                                <option value="kalin">Kalın</option>
                            </select>
                        </div>
                    </FormGroup>
                    <FormGroup className='extras' data-cy="extras">
                        <Label>Ek Malzemeler</Label>
                        <div className='extra-elements' data-cy="extra-elements">
                            {['Pepperoni', 'Sosis', 'Jambon', 'Tavuk', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalapeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'].map((topping) => (
                                <Label key={topping} className='extra-item' data-cy={`extra-item-${topping}`}>
                                    <input
                                        type="checkbox"
                                        value={topping}
                                        checked={order.selectedToppings.includes(topping)}
                                        onChange={handleToppingChange}
                                        className='extra-checkbox'
                                        data-cy={`extra-checkbox-${topping}`}
                                    />
                                    {topping.charAt(0).toUpperCase() + topping.slice(1)}
                                </Label>
                            ))}
                        </div>
                    </FormGroup>
                    <FormGroup className='customer-note' data-cy="customer-note">
                        <Label>İsminiz</Label>
                        <Input
                            type="text"
                            placeholder="Adınız... (Zorunlu)"
                            value={order.username}
                            onChange={(e) => updateOrder('username', e.target.value.toUpperCase())}
                            style={{ width: "50%" }}
                            data-cy="username-input"
                        />
                        <Label>Sipariş Notu</Label>
                        <Input
                            type="text"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={order.orderNote}
                            onChange={(e) => updateOrder('orderNote', e.target.value)}
                            data-cy="order-note-input"
                        />
                    </FormGroup>
                    <div className='order-control' data-cy="order-control">
                        <FormGroup>
                            <div className="pizza-count" data-cy="pizza-count">
                                <Button color="warning" onClick={() => updateOrder('pizzaCount', Math.max(1, order.pizzaCount - 1))} data-cy="decrease-pizza-count">-</Button>
                                <p data-cy="pizza-count-value">{order.pizzaCount}</p>
                                <Button color="warning" onClick={() => updateOrder('pizzaCount', order.pizzaCount + 1)} data-cy="increase-pizza-count">+</Button>
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
                </Form>

            </section>
        </div >
    );
}

export default OrderPage;
