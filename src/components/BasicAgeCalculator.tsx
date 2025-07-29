"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";

const BasicAgeCalculator = () => {
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [isCalculated, setIsCalculated] = useState(false);

	const calculateAge = () => {
		setIsCalculated(true);
	};

	return (
		<div className="grid gap-4">
			<h1 className="text-center text-lg">
				{isCalculated
					? `You are ${"x"} years old`
					: `Select your date of birth`}
			</h1>

			<Calendar
				mode="single"
				captionLayout="dropdown"
				selected={date}
				onSelect={(date) => setDate(date)}
			/>

			<Button
				type="button"
				onClick={calculateAge}>
				Calculate Age
			</Button>
		</div>
	);
};

export default BasicAgeCalculator;
