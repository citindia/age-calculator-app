"use client";

import {
	format,
	formatDistanceToNow,
	isBefore,
	startOfTomorrow,
} from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const BasicAgeCalculator = () => {
	const [inputdate, setInputDate] = useState<Date | undefined>(undefined);
	const [open, setOpen] = useState(false);

	return (
		<div className="grid w-xs gap-8">
			<h1 className="text-center text-xl font-semibold">
				{inputdate
					? isBefore(inputdate, startOfTomorrow())
						? `You are ${formatDistanceToNow(inputdate)} old`
						: `You will be ${formatDistanceToNow(inputdate)} old`
					: "Select your date of birth"}
			</h1>

			<Popover
				open={open}
				onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						id="date"
						className="w-full justify-between font-normal">
						{inputdate
							? format(inputdate, "PPPP")
							: "Select a date"}
						<ChevronDownIcon />
					</Button>
				</PopoverTrigger>

				<PopoverContent
					className="w-auto overflow-hidden p-0"
					align="center">
					<Calendar
						mode="single"
						captionLayout="dropdown"
						selected={inputdate}
						onSelect={(date) => {
							setInputDate(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default BasicAgeCalculator;
