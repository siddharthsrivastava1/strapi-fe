import { useState } from "react";
import { registerUser } from "../lib/auth";
import { useRouter } from "next/router";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await registerUser(username, email, password);
            router.push("/dashboard");
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleRegister} className="space-y-4">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded" required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" required />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
                    <p className="text-center mt-4">
                        Do you have an account? <a href="/login" className="text-blue-500">login</a>
                    </p>

                </form>
            </div>
        </div>
    );
}
