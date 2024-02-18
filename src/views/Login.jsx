import { useState } from "react";

// Services
import { loginWithEmailAndPassword } from "../functions/loginWithEmailandPassword.js";
import { registerUser } from "../functions/registerUser.js";
import { loginWithGoogle } from "../functions/loginWithGoogle.js";

export const Login = () => {
  const [isLoggingIn, setLoggingIn] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (isLoggingIn) {
      await loginWithEmailAndPassword(username, password);
    } else {
      await registerUser(username, password);
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {isLoggingIn ? "Inicia sessión" : "Registrate"}
          </h1>
          <form
            className="flex flex-col gap-2 mt-4 w-full"
            onSubmit={handleSubmit}
          >
            <label>Username</label>
            <input
              className="h-12 border m-2 w-full"
              type="text"
              id="username"
            />
            <label>Password</label>
            <input
              className="h-12 border m-2 w-full"
              type="password"
              id="password"
            />
            <button
              className="bg-blue-500 text-white p-4 rounded-md"
              type="submit"
            >
              {isLoggingIn ? "Acceder" : "Registrate"}
            </button>
          </form>

          <button 
          className="bg-red-400 mt-4 p-4 rounded-md text-white w-full"
          onClick={loginWithGoogle}>
            Accede con Google
          </button>

          <button
            className="urderline w-full mt-4"
            onClick={() => setLoggingIn(!isLoggingIn)}
          >
            {isLoggingIn
              ? "¿No tienes cuenta? Crea una"
              : "¿Ya tienes cuenta? Accede"}
          </button>
        </div>
      </div>
    </>
  );
};
