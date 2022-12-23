import { AuthFunctions } from "../../Auth/AuthContext";

const SignOutButton = () => {
  const styles = {
    button:
      "rounded-2xl border border-white py-1 px-4 text-2xl font-semibold text-white",
  };
  const { logOutUser, user } = AuthFunctions();

  return (
    <>
      {user && user.email ? (
        <button className={styles.button} onClick={() => logOutUser()}>
          {" "}
          Sign Out{" "}
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default SignOutButton;
