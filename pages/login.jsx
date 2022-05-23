import Button from "../components/Button";
import TextField from "../components/textfield/TextField";
import PasswordField from "../components/textfield/PasswordField";
import Header from "../components/Header";

function Login() {
  const loginTop = (message) => {
    console.log(message);
  };

  const handleLoginOnClick = () => {
    loginTop("teje logado");
  };

  return (
    <div className="login-container">
      <Header></Header>
      <div>
        <TextField placeholder="User" />
      </div>
      <div>
        <PasswordField placeholder="Password" />
      </div>
      <div>
        <Button onClick={handleLoginOnClick}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
