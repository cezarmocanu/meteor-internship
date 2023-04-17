import { useSelector, useDispatch } from "react-redux";
import {
	selectCounter,
	decrement,
	increment,
} from "../store/slices/counter-slice";

function TestCounter() {
	const counter = useSelector(selectCounter);
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(decrement(Math.random()))}>
				Decrement
			</button>
			<h1>{counter}</h1>
			<button onClick={() => dispatch(increment(Math.random()))}>
				Increment
			</button>
		</div>
	);
}

export default TestCounter;
