
async function testContactApi() {
    const payload = {
        name: "Test User",
        email: "test@example.com",
        company: "Test Co",
        message: "This is a test message from verification script."
    };

    try {
        console.log("Testing POST /api/contact...");
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        console.log("Status:", res.status);
        const data = await res.json();
        console.log("Response:", JSON.stringify(data, null, 2));

        if (res.ok) {
            console.log("✅ API Test Passed!");
        } else {
            console.log("❌ API Test Failed!");
        }
    } catch (err) {
        console.error("❌ Error connecting to API:", err.message);
    }
}

testContactApi();
