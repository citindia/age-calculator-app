import AdvancedAgeCalculator from "@/components/AdvancedAgeCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advanced | Age Calculator App",
	description: "Advanced Age Calculator App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Advanced Age Calculator
					</CardTitle>
				</CardHeader>
				<CardContent>
					<AdvancedAgeCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
