export default function ErrorPage() {
    return (
        <div className="error-page">
            <h1 className="text-4xl font-bold text-red-500">Error !!</h1>
            <p className="text-lg mt-4">An error occurred while processing your request. Please try again later.</p>
            <p className="text-lg mt-4">Invalid Link or Server Error</p>
        </div>
    );
}

