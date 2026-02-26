export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Project Info */}
                <div className="footer-section">
                    <h3 className="text-xl">HTTP Security Header</h3>
                    <p>
                        A web security analysis tool designed to inspect and evaluate
                        HTTP response headers to improve website security posture.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4 className="text-xl">Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/scan">Scan</a></li>
                    </ul>
                </div>

                {/* Technologies */}
                <div className="footer-section">
                    <h4 className="text-xl">Technologies Used</h4>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-section">
                    <h4 className="text-xl">Contact</h4>
                    <p>Email: support@httpinspector.com</p>
                    <p>Web Security Analysis Project</p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 HTTP Security Header | All Rights Reserved
            </div>
        </footer>
    );
}