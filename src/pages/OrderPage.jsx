import React, { useState } from 'react';
import pizzaData from '../fakeData';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';

function OrderPage() {
    const [pizzaCount, setPizzaCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState("orta");
    const [selectedDough, setSelectedDough] = useState("normal");
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [orderNote, setOrderNote] = useState("");

    const pizzaPrice = pizzaData[6].price;

    const pizzaCountIncrement = () => {
        setPizzaCount(pizzaCount + 1);
    };

    const pizzaCountDecrement = () => {
        if (pizzaCount > 1) {
            setPizzaCount(pizzaCount - 1);
        }
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleDoughChange = (event) => {
        setSelectedDough(event.target.value);
    };

    const handleToppingChange = (event) => {
        const value = event.target.value;
        setSelectedToppings(prevToppings =>
            prevToppings.includes(value)
                ? prevToppings.filter(topping => topping !== value)
                : [...prevToppings, value]
        );
    };

    const toppingPrice = 5;
    const totalToppingPrice = selectedToppings.length * toppingPrice;
    const totalPizzaPrice = pizzaPrice * pizzaCount;
    const totalPrice = totalPizzaPrice + totalToppingPrice;

    return (
        <>
            <header>
                <h1>Teknolojik Yemekler</h1>
                <div className="order-header-button">
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
                        <p>{pizzaData[6].rating}</p>
                        <p>{pizzaData[6].reviewCount}</p>
                    </div>
                    <p>{pizzaData[6].description}</p>
                </div>
                <Form>
                    <FormGroup className="pizza-sizes">
                        <Label>Boyut Seç</Label>
                        <div>
                            <input type="radio" name="boyut" value="kucuk" id="kucuk" checked={selectedSize === "kucuk"} onChange={handleSizeChange} />
                            <Label htmlFor="kucuk">Küçük</Label>

                            <input type="radio" name="boyut" value="orta" id="orta" checked={selectedSize === "orta"} onChange={handleSizeChange} />
                            <Label htmlFor="orta">Orta</Label>

                            <input type="radio" name="boyut" value="buyuk" id="buyuk" checked={selectedSize === "buyuk"} onChange={handleSizeChange} />
                            <Label htmlFor="buyuk">Büyük</Label>
                        </div>

                        <Label>Hamur Seç</Label>
                        <select name="hamur" value={selectedDough} onChange={handleDoughChange}>
                            <option value="ince">İnce</option>
                            <option value="normal">Normal</option>
                            <option value="kalin">Kalın</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <h6>Ek Malzemeler</h6>
                        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        <div>
                            <Label>
                                <input type="checkbox" value="pepperoni" onChange={handleToppingChange} />
                                Pepperoni
                            </Label>
                            <Label>
                                <input type="checkbox" value="sosis" onChange={handleToppingChange} />
                                Sosis
                            </Label>
                            <Label>
                                <input type="checkbox" value="jambon" onChange={handleToppingChange} />
                                Kanada Jambonu
                            </Label>
                            <Label>
                                <input type="checkbox" value="tavuk" onChange={handleToppingChange} />
                                Tavuk Izgara
                            </Label>
                            <Label>
                                <input type="checkbox" value="soğan" onChange={handleToppingChange} />
                                Soğan
                            </Label>
                            <Label>
                                <input type="checkbox" value="domates" onChange={handleToppingChange} />
                                Domates
                            </Label>
                            <Label>
                                <input type="checkbox" value="mısır" onChange={handleToppingChange} />
                                Mısır
                            </Label>
                            <Label>
                                <input type="checkbox" value="sucuk" onChange={handleToppingChange} />
                                Sucuk
                            </Label>
                            <Label>
                                <input type="checkbox" value="jalapeno" onChange={handleToppingChange} />
                                Jalapeno
                            </Label>
                            <Label>
                                <input type="checkbox" value="sarımsak" onChange={handleToppingChange} />
                                Sarımsak
                            </Label>
                            <Label>
                                <input type="checkbox" value="biber" onChange={handleToppingChange} />
                                Biber
                            </Label>
                            <Label>
                                <input type="checkbox" value="ananas" onChange={handleToppingChange} />
                                Ananas
                            </Label>
                            <Label>
                                <input type="checkbox" value="kabak" onChange={handleToppingChange} />
                                Kabak
                            </Label>
                        </div>

                    </FormGroup>
                    <FormGroup>
                        <Label>Sipariş Notu</Label>
                        <Input
                            type="text"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={orderNote}
                            onChange={(e) => setOrderNote(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <div className="pizza-count">
                            <Button color="warning" onClick={pizzaCountDecrement}>-</Button>
                            <p>{pizzaCount}</p>
                            <Button color="warning" onClick={pizzaCountIncrement}>+</Button>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <div className="order-summary">
                            <h4>Sipariş Toplamı</h4>
                            <div className="order-details">
                                <p>Seçimler: {selectedSize} boyut, {selectedDough} hamur, {selectedToppings.join(', ')}</p>
                                <p>Toplam Pizza Fiyatı: {totalPizzaPrice}₺</p>
                                <p>Ek Malzemeler: {totalToppingPrice}₺</p>
                                <h5>Toplam: {totalPrice}₺</h5>
                            </div>
                            <Button color="primary">Sipariş Ver</Button>
                        </div>
                    </FormGroup>
                </Form>
            </section>
        </>
    );
}

export default OrderPage;
