"use client";

import { DOBType } from "@/lib/types";
import { dobSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	format,
	formatDistanceToNow,
	isBefore,
	startOfTomorrow,
} from "date-fns";
import { CalendarDaysIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "./shadcnui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const AdvancedAgeCalculator = () => {
	const [result, setResult] = useState("Select your date of birth");

	const dobForm = useForm({
		resolver: zodResolver(dobSchema),
		defaultValues: {
			dob: undefined,
		},
		mode: "all",
	});

	const handleDateSubmit = async ({ dob }: DOBType) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setResult(`You are ${formatDistanceToNow(dob)} old`);

		dobForm.reset();
	};

	return (
		<div className="grid w-xs gap-8">
			<h1 className="text-center text-xl font-semibold">{result}</h1>

			<Form {...dobForm}>
				<form
					onSubmit={dobForm.handleSubmit(handleDateSubmit)}
					className="grid gap-4"
					noValidate>
					<FormField
						control={dobForm.control}
						name="dob"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant="outline"
												id="date"
												className="w-full justify-between font-normal">
												{field.value
													? format(
															field.value,
															"PPPP",
														)
													: "Pick a date"}
												<CalendarDaysIcon />
											</Button>
										</FormControl>
									</PopoverTrigger>

									<PopoverContent
										className="w-auto overflow-hidden p-0"
										align="center">
										<Calendar
											mode="single"
											captionLayout="dropdown"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												!isBefore(
													date,
													startOfTomorrow(),
												)
											}
										/>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="cursor-pointer"
						disabled={dobForm.formState.isSubmitting}>
						{dobForm.formState.isSubmitting
							? "Calculating..."
							: "Calculate Age"}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default AdvancedAgeCalculator;
