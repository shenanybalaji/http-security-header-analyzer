import { useState } from "react";
import Navbar from "../components/Navbar";
import UrlForm from "../components/UrlForm";
import ResultSummary from "../components/ResultSummary";
import HeadersTable from "../components/HeaderTable";
import ErrorPage from "../components/ErrorPage";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";

export default function Home() {
    const [result, setResult] = useState();
    const [Error, setError] = useState(false);


    const handleInspect = async (url) => {
        try {
            const res = await fetch("http://localhost:5000/api/scan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            if (!res.ok) {
                setError(true);
                throw new Error("Server Error");
            }

            const data = await res.json();
            setResult(data);


        } catch (error) {
            console.error("Frontend Error:", error);
            setResult(null);

        }
    };


    return (
        <div>
            <Navbar />
            <UrlForm onSubmit={handleInspect} />
            {result? <ResultSummary data={result} /> : Error? <ErrorPage/> : <HeroPage />  }
            {result?.headersMain && <HeadersTable headersMain={result.headersMain} />}
            <Footer />
        </div>
    );
}