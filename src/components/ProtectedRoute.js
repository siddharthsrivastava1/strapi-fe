import { useEffect } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "../lib/storage";

export default function ProtectedRoute({ children }) {
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push("/unauthorized");
        }
    }, []);

    return children;
}
