import { CoffeeShop } from './shop';

const shop = new CoffeeShop();
shop.takeOrder('Cappuccino', 2);
shop.takeOrder('Frappe', 1);
shop.takeOrder('Espresso', 1);
shop.takeOrder('Frappe', 897);
shop.takeOrder('Cappuccino', 97);
shop.takeOrder('Frappe', 3);
shop.takeOrder('Espresso', 3);
shop.takeOrder('Cappuccino', 3);
shop.takeOrder('Espresso', 96);
shop.takeOrder('Frappe', 552);
shop.takeOrder('Cappuccino', 121);
shop.takeOrder('Espresso', 121);

shop.service();
