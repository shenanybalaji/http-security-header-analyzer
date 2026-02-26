import { useState } from "react";

export default function UrlForm({ onSubmit }) {
    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!url) return;

        let formattedUrl = url;

        if (!formattedUrl.startsWith("http")) {
            formattedUrl = "https://" + formattedUrl;
        }

        onSubmit(formattedUrl);

    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="gap-6">
                <input
                    type="text"
                    placeholder="enter a valid URL/Domain"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                    required
                />
                <button type="submit">Scan</button>
            </form>
        </div>
    );
}