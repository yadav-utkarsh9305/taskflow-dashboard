import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3000/api/users/login",
      loginData
    );

    localStorage.setItem("token", res.data.token);

    window.location.href = "/dashboard";

  } catch (err) {
    toast.error(err.response?.data?.message || "Server error");
  }
};


  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/register",
        signupData
      );

      toast.success(res.data.message || "Account created successfully 🎉");

      setActiveTab("login");

    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* TABS */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-4 font-semibold ${
                activeTab === "login"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-4 font-semibold ${
                activeTab === "signup"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* LOGIN */}
          {activeTab === "login" && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Welcome Back</h2>

              <form onSubmit={handleLogin} className="space-y-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleLoginChange}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />

                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
                  Sign In
                </button>
              </form>
            </div>
          )}

          {/* SIGNUP */}
          {activeTab === "signup" && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Create Account</h2>

              <form onSubmit={handleSignup} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleSignupChange}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleSignupChange}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleSignupChange}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />

                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
                  Create Account
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Login;
