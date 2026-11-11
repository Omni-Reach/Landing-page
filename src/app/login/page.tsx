import type { Metadata } from "next";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthForm } from "@/components/AuthForm";
export const metadata: Metadata = { title: "Log in", description: "Log in to your OmniReach account." };
export default function LoginPage() { return <AuthLayout><AuthForm mode="login"/></AuthLayout>; }
