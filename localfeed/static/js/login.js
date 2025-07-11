document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const response = await fetch("/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      window.location.href = "/";
    } else {
      document.getElementById("msg").innerText = data.detail || "Login failed";
    }
  });
  