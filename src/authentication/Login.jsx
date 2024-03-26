import { Link, useNavigate } from "react-router-dom";
import img from '../assets/login.jpeg';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import { MdOutlineArrowBack } from "react-icons/md";


export default function Login() {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = email;
    const userPassword = password;

    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      navigate("/view");
      toast.success(`Login successful, welcome ${email}`)
    } catch (error) {
      setErr(true);
      setEmail('');
      setPassword(''); 
    }
  };

  const handleResetPassword=()=>{
    navigate("/reset")
  }

  return (
    <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${img})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold font-serif text-[#f97316]">Login now!</h1>
          <p className="py-6 text-[#f59e0b] font-mono">Our collection is a showcase of creativity, and we're excited to have you join us. To access the gallery, please log in with your credentials or register if you're new here.
          Recommended to login by email and password through which you can have your personal profile photo
          </p>
        </div>
        <div className="card flex-shrink-0 w-full bg-white max-w-sm shadow-2xl bg-opacity-60">
          <div>
            <div className="text-center text-red-700 p-4 m-2">
              {err && <span>Mail id or password is incorrect</span>}
            </div>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <Link to="/" className="text-3xl float-left my-1 text-black flex gap-3">
                    <MdOutlineArrowBack size={20} />
                    <span className="text-sm">back</span>
                </Link>
                <label className="label">
                  <span className="label-text text-black font-extrabold font-serif">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-black bg-white bg-opacity-75"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-extrabold font-serif">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-black bg-white bg-opacity-75"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label mt-2">
                  <p onClick={handleResetPassword} className="label-text-alt font-medium text-[14px] link link-hover hover:text-blue-600 text-black">Forgot password?</p>
                </label>
                <p className="m-2 text-black">Don't have an account?{" "}
                  <Link to="/register" className="font-medium text-blue-900">
                    Sign In
                  </Link>
                </p>
              </div>
              <div className="form-control">
                <button className="btn btn-primary bg-blue-600 rounded-3xl mt-1 hover:bg-blue-900 text-white uppercase font-bold">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}