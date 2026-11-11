import type { Metadata } from "next";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthForm } from "@/components/AuthForm";
export const metadata: Metadata = { title: "Sign up", description: "Create your OmniReach account and start sending SMS." };
export default function SignupPage() { return <AuthLayout><AuthForm mode="signup"/></AuthLayout>; }
