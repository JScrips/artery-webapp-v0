import SignUpComponent from "../../components/LoginComponents/SignUpComponent";
import LoginComponent from "../../components/LoginComponents/LoginComponent";
import { useState } from "react";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className="p-4 w-2/12  border bg-slate-100 flex flex-col items-center justify-center mx-auto rounded-xl">
      {showLogin ? (
        <LoginComponent setShowLogin={setShowLogin} />
      ) : (
        <SignUpComponent setShowLogin={setShowLogin} />
      )}
    </main>
  );
};

export default Login;
