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
                <img src="../../images/iteration-1-images/logo.svg" alt="" />
                <div className="order-header-buttons">
                    <button onClick={onBack}>Anasayfa</button>
                    <p>-</p>
                    <button>Seçenekler</button>
                    <p>-</p>
                    <button>Sipariş Oluştur</button>
                </div>
            </header>
            <section>
                <div className="pizza-info">
                    <h4>{pizzaData[pizzaIndex].name}</h4>
                    <div className="pizza-details">
                        <p>{pizzaPrice}₺</p>
                        <div className="rateNreview">
                            <p>{pizzaData[pizzaIndex].rating}</p>
                            <p>({pizzaData[pizzaIndex].reviewCount})</p>
                        </div>
                    </div>
                    <p>{pizzaData[pizzaIndex].description}</p>
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
                    <FormGroup className='extras'>
                        <hpizzaIndex>Ek Malzemeler</hpizzaIndex>
                        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺ (En az 4 malzeme seçmelisiniz)</p>

                        <div className='extra-elements'>
                            {['Pepperoni', 'Sosis', 'Jambon', 'Tavuk', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalapeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'].map((topping) => (
                                <Label key={topping} className='extra-item'>
                                    <input
                                        type="checkbox"
                                        value={topping}
                                        checked={order.selectedToppings.includes(topping)}
                                        onChange={handleToppingChange}
                                        className='extra-checkbox'
                                    />
                                    {topping.charAt(0).toUpperCase() + topping.slice(1)}
                                </Label>
                            ))}
                        </div>
                    </FormGroup>
                    <FormGroup className='customer-note'>
                        <Label>İsminiz</Label>
                        <Input
                            type="text"
                            placeholder="Adınız... (Zorunlu)"
                            value={order.username}
                            onChange={(e) => updateOrder('username', e.target.value.toUpperCase())}
                            style={{ width: "50%" }} />
                        <Label>Sipariş Notu</Label>
                        <Input
                            type="text"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={order.orderNote}
                            onChange={(e) => updateOrder('orderNote', e.target.value)}
                        />
                    </FormGroup>
                    <hr />
                    <div className='order-control'>
                        <FormGroup>
                            <div className="pizza-count">
                                <Button color="warning" onClick={() => updateOrder('pizzaCount', Math.max(1, order.pizzaCount - 1))}>-</Button>
                                <p>{order.pizzaCount}</p>
                                <Button color="warning" onClick={() => updateOrder('pizzaCount', order.pizzaCount + 1)}>+</Button>
                            </div>
                        </FormGroup>

                        <FormGroup className='order-price'>
                            <div className="order-details">
                                <h4>Sipariş Toplamı</h4>
                                <div className="extra-price">
                                    <p>Seçimler:</p> <p>{totalToppingPrice}₺</p>
                                </div>
                                <div className="total-price">
                                    <p>Toplam:</p> <p>{totalPrice}₺</p>
                                </div>
                            </div>
                            <Button
                                color="primary"
                                onClick={handleSubmit}
                                disabled={order.selectedToppings.length < 4 || order.username.length < 3}
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
