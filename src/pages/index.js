import { useEffect, useState } from "react";
import { fetchArticles } from "../lib/api";
import Header from "../components/Header";
import Image from "next/image";
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = document.cookie.includes("token"); // ✅ Check if user is logged in
    setIsLoggedIn(token);

    if (token) {
      fetchArticles().then(setArticles); // ✅ Fetch articles only after login

    }
  }, [isLoggedIn]); // ✅ Rerun when login state changes
  useEffect(() => {
    console.log(articles)
  }, [articles])
  return (
    <div className="container mx-auto p-6">
      <Header />
      <h1 className="text-3xl font-bold">Welcome to My App</h1>

      {isLoggedIn ? (
        articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="p-4 border rounded-lg shadow-sm my-4">
              <h2 className="text-xl font-semibold">{article?.Title}</h2>
              <p>{article?.content}</p>
              {/* <Image src={article?.image[0].url} width="200" height="200" /> */}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No articles available.</p>
        )
      ) : (
        <p className="text-red-500">Please log in to view articles.</p>
      )}
    </div>
  );
}
