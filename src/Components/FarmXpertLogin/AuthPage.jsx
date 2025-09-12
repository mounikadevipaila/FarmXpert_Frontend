import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://localhost:5000/api/login"
      : "http://localhost:5000/api/signup";

    try {
      const response = await axios.post(
        url,
        isLogin
          ? { email: formData.email, password: formData.password }
          : formData
      );

      if (isLogin) {
        // Store user data in localStorage
        localStorage.setItem("currentUser", JSON.stringify(response.data.user));
        localStorage.setItem("userEmail", formData.email);
        alert("Login successful");
        navigate("/");
      } else {
        // Create user object without password
        const { password, ...userData } = formData;
        localStorage.setItem("currentUser", JSON.stringify({
          ...userData,
          farmData: {
            crops: [],
            landSize: "",
            irrigation: "",
            soilType: ""
          }
        }));
        localStorage.setItem("userEmail", formData.email);
        alert("Signup successful! You are now logged in.");
        navigate("/");
      }
    } catch (err) {
      alert("Error: " + (err?.response?.data?.error || "Something went wrong"));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={styles.overlay}>
          <h1 style={styles.brand}>
            Farm<span style={{ color: "#fbbc42" }}>Xpert</span>
          </h1>
          <p style={styles.tagline}>Empowering Farmers with Smart Solutions 🌾</p>
          <p style={styles.description}>
            At FarmXpert, we combine technology and tradition to help farmers grow more with less.
            From crop planning to expert advice and community support, we’re here to make your
            farming journey smarter, easier, and more profitable.
          </p>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.formCard}>
          <h2 style={styles.loginTitle}>
            {isLogin ? "Login to your account" : "Create a new account"}
          </h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            {!isLogin && (
              <>
                <input name="firstname" type="text" placeholder="First Name" required onChange={handleChange} style={styles.input} />
                <input name="lastname" type="text" placeholder="Last Name" required onChange={handleChange} style={styles.input} />
                <input name="mobile" type="text" placeholder="Mobile" required onChange={handleChange} style={styles.input} />
                <input name="age" type="number" placeholder="Age" required onChange={handleChange} style={styles.input} />
                <select name="gender" required onChange={handleChange} style={styles.input}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </>
            )}
            <input name="email" type="email" placeholder="Email" required onChange={handleChange} style={styles.input} />
            <input name="password" type="password" placeholder="Password" required onChange={handleChange} style={styles.input} />
            <button type="submit" style={styles.button}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p style={styles.bottomText}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)} style={styles.link}>
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  left: {
    flex: 1,
    backgroundImage: "url('https://i.pinimg.com/736x/d6/90/e8/d690e81cd73dbff7e75b935b33f53e4b.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(40, 128, 70, 0.8)",
    color: "#fff",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  brand: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  tagline: {
    fontSize: "22px",
    fontWeight: "500",
    marginBottom: "6px",
    color: "#fff",
  },
  description: {
    fontSize: "14px",
    color: "#e0e0e0",
    maxWidth: "85%",
    lineHeight: "1.5",
  },
  right: {
    flex: 1,
    backgroundColor: "#fcf5e8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
  formCard: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  loginTitle: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#2d8a4c",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#fbbc42",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
  bottomText: {
    marginTop: "18px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#2d8a4c",
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default AuthPage;