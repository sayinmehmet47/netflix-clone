import { signIn } from "next-auth/react";
import Link from "next/link";

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>

      <Link href="/login" passHref>
        <p className="underline border-l-amber-700 cursor-pointer">Login</p>
      </Link>
    </>
  );
}
