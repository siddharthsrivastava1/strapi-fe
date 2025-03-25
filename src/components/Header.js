import Link from "next/link";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../lib/storage";
import { logoutUser } from "../lib/auth";

export default function Header() {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setAuth(isAuthenticated()); // ✅ Fix hydration error
    }, []);

    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <Link href="/" className="text-lg font-bold">My App</Link>
            <div>
                {auth ? (
                    <button onClick={logoutUser} className="px-4 py-2 bg-red-500 rounded">Logout</button>
                ) : (
                    <>
                        <Link href="/login" className="px-4 py-2 bg-green-500 rounded">Login</Link>
                        <Link href="/register" className="px-4 py-2 bg-blue-700 ml-2 rounded">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
