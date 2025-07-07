document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const location = document.getElementById("location").value;
  
    const res = await fetch("/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, location }),
    });
  
    const data = await res.json();
    document.getElementById("msg").innerText = data.message || JSON.stringify(data);
  });
  