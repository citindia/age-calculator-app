import z from "zod";

export const dobSchema = z.object({
	dob: z.date({ error: "A date of birth is required." }),
});
