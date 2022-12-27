import { useState } from "react";
import { AuthFunctions } from "../../Auth/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useRouter } from "next/router";
import { Satisfy } from "@next/font/google";
import { updateProfile } from "firebase/auth";

const satisfy = Satisfy({
  weight: "400",
});

const SignUpComponent = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [artist, setArtist] = useState(false);
  const { createUser, user } = AuthFunctions();
  const router = useRouter();

  //This handleSignUp function is called when the user clicks the sign up button. It calls the createUser function from AuthContext, and then sets the user's display name, email, and password in the database under the "users" collection. It then pushes the user to the home page.
  const handleSignUp = async (e, email, password, artist, displayName) => {
    e.preventDefault();
    const createdUser = await createUser(email, password);
    // adding a user document to the user's collection in the database.
    try {
      await setDoc(doc(db, "users", displayName), {
        artist: artist,
        displayName: displayName,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // updating the user's profile with their display name. Then push the user to their profile page.
    await updateProfile(createdUser.user, {
      displayName: displayName,
    })
      .then(() => {
        console.log("updated profile");
      })
      .catch((error) => {
        console.log(error);
      });
    router.push(`/users/${createdUser.user.displayName}`);
  };

  const styles = {
    container: "flex flex-col items-center rounded-t-xl justify-center",
    title: " p-2 text-center font-satisfy text-teal-500 text-4xl",
    topInput: "border p-2 focus:outline-none mt-2 ",
    midInput: "border p-2 focus:outline-none mt-2 mb-2",
    bottomInput: "border p-2   focus:outline-none",
    artisSect: "flex gap-2",
    button: " px-4 py-1 bg-blue-600 rounded-lg text-white p-2 mt-4",
    bottomMsg: "flex items-center mt-6 gap-2",
  };

  return (
    <main className={styles.container}>
      <div className={satisfy.className}>
        <div className={styles.title}>Sign Up Page</div>
      </div>

      <input
        className={styles.topInput}
        placeholder="Display Name"
        type={"text"}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        className={styles.midInput}
        placeholder="Email"
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.bottomInput}
        placeholder="Password"
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.artisSect}>
        <label> Are you an Artist? </label>
        <input
          type="checkbox"
          onChange={() => {
            setArtist((prevState) => !prevState);
          }}
        />
      </div>
      <button
        onClick={(e) => {
          handleSignUp(e, email, password, artist, displayName);
        }}
        className={styles.button}
      >
        {" "}
        Sign up{" "}
      </button>
      <div className={styles.bottomMsg}>
        <span> Already have an account?</span>{" "}
        <button
          onClick={() => {
            setShowLogin((prevState) => !prevState);
          }}
        >
          {" "}
          Log in.
        </button>
      </div>
    </main>
  );
};

export default SignUpComponent;
