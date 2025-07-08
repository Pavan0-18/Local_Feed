function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login/";
  }
  
  window.onload = async function () {
    const token = localStorage.getItem("access");
    if (!token) {
      window.location.href = "/login/";
      return;
    }
  
    const res = await fetch("/api/posts/", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await res.json();
    const container = document.getElementById("feed-container");
    container.innerHTML = "";
  
    if (data.length === 0) {
      container.innerHTML = "<p>No posts in your area yet.</p>";
    } else {
      data.forEach(post => {
        const div = document.createElement("div");
        div.innerHTML = `
          <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
            <h4>${post.title}</h4>
            <p>${post.content}</p>
            <small>Posted by: ${post.user} | ${new Date(post.created_at).toLocaleString()}</small>
          </div>
        `;
        container.appendChild(div);
      });
    }
  };
  
  document.getElementById("post-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    const res = await fetch("/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });
  
    if (res.ok) {
      location.reload();
    } else {
      alert("Failed to create post");
    }
  });