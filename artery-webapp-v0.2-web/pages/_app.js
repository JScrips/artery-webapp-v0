import "../styles/globals.css";
import Theme from "../components/ThemeComponents/Theme";
import { AuthContextProvider } from "../Auth/AuthContext";

const App = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </AuthContextProvider>
  );
};

export default App;
