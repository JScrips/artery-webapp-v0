import { useState } from "react";
import { AuthFunctions } from "../../Auth/AuthContext";
import { useRouter } from "next/router";
import { Satisfy } from "@next/font/google";

const satisfy = Satisfy({
  weight: "400",
});

const LoginComponent = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser } = AuthFunctions();
  const router = useRouter();

  //this function will handle the login process. It will prevent the default behavior of the form, and then call the signInUser function from AuthContext.js. It will then push the user to the home page.
  const handleLogin = (e, email, password) => {
    e.preventDefault();
    signInUser(email, password);
    router.push("/");
  };

  const styles = {
    container: "flex flex-col items-center rounded-t-xl ",
    title: " p-2 text-center font-satisfy text-teal-500 text-4xl",
    topInput: "border p-2 focus:outline-none mt-2 ",
    bottomInput: "border p-2   focus:outline-none",
    button: " px-4 py-1 bg-blue-600 rounded-lg text-white p-2 mt-4",
    bottomMsg: "flex items-center mt-6 gap-2",
  };

  return (
    <main className={styles.container}>
      <div className={satisfy.className}>
        <div className={styles.title}> Login Page</div>
      </div>
      <input
        className={styles.topInput}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.bottomInput}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={(e) => {
          handleLogin(e, email, password);
        }}
        className={styles.button}
      >
        {" "}
        Login{" "}
      </button>
      <div className={styles.bottomMsg}>
        <span> Dont have an account?</span>{" "}
        <button
          onClick={() => {
            setShowLogin((prevState) => !prevState);
          }}
        >
          {" "}
          Sign up.
        </button>
      </div>
    </main>
  );
};

export default LoginComponent;
