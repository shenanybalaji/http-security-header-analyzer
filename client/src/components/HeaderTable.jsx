export default function HeadersTable({ headersMain }) {
    if (!headersMain) return null;


    return (
        <div className="table-container">
            <h3 className="text-3xl text-black font-bold">Raw Data Headers</h3>
            <table>
                <thead>
                    <tr>
                        <th>Header Name</th>
                        <th>Header Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(headersMain).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}