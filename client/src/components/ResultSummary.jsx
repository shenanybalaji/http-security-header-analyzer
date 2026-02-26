import Grade from "./Grade";

export default function ResultSummary({ data }) {
    if (!data || !data.headers) return null;

    return (
        <div className="result-summary">
            <Grade grade={data.grade} />
            <h2>IP Address: {data.ipAddress}</h2>
            <h2>Status Code: {data.statusCode}</h2>
            <h3>Score: {data.score} </h3>
            <p>Site: <a href={data.url} className="text-blue-500 underline">{data.url}</a></p> 
            <p>Report Time: {new Date(data.createdAt).toLocaleString()}</p>
            <p>Security Headers: {Object.entries(data.headers).map(([key, value]) => (
                <span
                    key={key}
                    className={value ? "border rounded-md text-white bg-green-500 p-0.5 m-1" : "border rounded-md bg-red-500 text-white p-0.5 m-1"}
                >
                    {value ? "✔" : "✘"} {key}
                </span>
            ))}</p>
        </div>

    );
}