import {Parody, ParodyDom} from '../parody';
import InputNumber from './input-number';

export default class Cart extends Parody {
	constructor(props) {
		super(props);

		this.state = {
			products: [
				{price: 1000, rest: 10, current: 1, num: 0},
				{price: 2000, rest: 5, current: 2, num: 1}
			],
		};
	}

	onChange(ind, val) {
		this.state.products[ind].current = val;
		this.render();
		// this.state.products.push()
		/*
				п. №1
				в идеале здесь не хотелось бы вызывать render вручную
				на уровне базового класса скрестите state и watchObj из дз№2 для минимальной реактивности
				она не будет настоящей, например, this.state.products.push таким образом реактивным не станет
		*/
	}

	render() {
		let sum = this.state.products.reduce((total, item) => {
			return total + item.price * item.current;
		}, 0);

		// правильный вариант
		let inputs = this.state.products.map((item) => {
			return <InputNumber min={1} max={item.rest} value={item.current}
			                    change={this.onChange.bind(this, item.num)}/>;
		});

		return super.render(
				<div>
					{inputs}
					<hr/>
					<div>{sum}</div>
				</div>,
		);
	}
}