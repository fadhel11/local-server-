async function sendName() {

    let name = document.getElementById("name").value;

    let response = await fetch(
        "http://localhost:3000",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        }
    );

    let data = await response.json();

    document.getElementById("result").innerText =
        data.message;
}