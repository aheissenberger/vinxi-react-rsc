"use client";

import { useState } from "react";

export function Counter({ onChange }) {
	const [count, setCount] = useState(0);
	return (
		<button
			data-test-id="counter"
			onClick={() => {
				setCount((c) => c + 1);
				onChange();
			}}
		>
			Count: {count}
		</button>
	);
}
