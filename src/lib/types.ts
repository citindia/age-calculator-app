import { ReactNode } from "react";
import z from "zod";
import { dobSchema } from "./zodSchema";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type DOBType = z.infer<typeof dobSchema>;
