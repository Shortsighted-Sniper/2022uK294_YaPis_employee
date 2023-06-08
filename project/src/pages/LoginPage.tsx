import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (email: string, password: string) => {
    const data = {
      email,
      password,
    };

    console.log(data);
    const ax = axios.create();

    ax.post("http://localhost:3030/login", data)
      .then((response) => {
        console.log(response.data.accessToken);

        const accessToken = response.data.accessToken;
        localStorage.setItem("token", accessToken);

        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        enableReinitialize
        validate={(values) => {
          const errors: { email?: string; password?: string } = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (values.password === "") {
            errors.password = "No password provided";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values.email, values.password);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field
              type="email"
              name="email"
              className="inputField"
              placeholder="Email"
            />
            <br />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              className="inputField"
              placeholder="Password"
            />
            <br />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              id="loginButton"
              disabled={isSubmitting || !isValid}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
