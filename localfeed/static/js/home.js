function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login/";
  }
  
  // Optional: protect the home page
  window.onload = function () {
    const token = localStorage.getItem("access");
    if (!token) {
      window.location.href = "/login/";
    }
  };
  