export default function Home() {
    return (
        <div className="home-container">

            {/* Hero Section */}
            <section className="hero">
                <h1>HTTP Security Header</h1>
                <p className="tagline">
                    A Web Security Analysis Tool for Inspecting and Evaluating HTTP Headers
                </p>
            </section>

            {/* About Section */}
            <section className="about">
                <h2 className="text-3xl">What Is This Project?</h2>
                <p className="text-xl">
                    HTTP Header Inspector is a security analysis tool designed to
                    examine website HTTP response headers and evaluate their
                    security configuration. It helps developers and organizations
                    identify vulnerabilities and improve their web security posture.
                </p>
            </section>

            {/* Purpose Section */}
            <section className="purpose">
                <h2 className="text-3xl">Purpose of the Project</h2>
                <ul>
                    <li>To analyze HTTP response headers of websites</li>
                    <li>To detect missing or misconfigured security headers</li>
                    <li>To calculate a security grade and score</li>
                    <li>To provide recommendations for improvement</li>
                </ul>
            </section>

            {/* Benefits Section */}
            <section className="benefits">
                <h2 className="text-3xl">Benefits</h2>
                <ul  >
                    <li >Improves website security awareness</li>
                    <li>Helps prevent common web attacks</li>
                    <li>Provides structured security evaluation</li>
                    <li>Stores scan history for tracking improvements</li>
                </ul>
            </section>

            {/* Aim Section */}
            <section className="aim">
                <h2 className="text-3xl">Aim of the Project</h2>
                <p className="text-xl">
                    The main aim of this project is to build a reliable and
                    user-friendly security inspection system that enables
                    users to monitor and strengthen website security
                    through automated HTTP header analysis.
                </p>
            </section>


        </div>
    );
}