exports.calculate = (findings) => {
    let score = 100;

    findings.forEach(f => {
        if (f.severity === "critical") score -= 30;
        if (f.severity === "high") score -= 20;
        if (f.severity === "medium") score -= 10;
        if (f.severity === "low") score -= 5;
    });

    if (score >= 95) return { grade: "A+", score };
    if (score >= 85) return { grade: "A", score };
    if (score >= 75) return { grade: "B", score };
    if (score >= 60) return { grade: "C", score };
    else return { grade: "F", score };
};

