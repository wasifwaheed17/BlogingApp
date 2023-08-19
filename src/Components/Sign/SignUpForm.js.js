import { useRef } from "react";
import styles from "@/styles/login.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function Form({ signin, onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const retypePasswordRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const retypePassword = retypePasswordRef.current.value;

    if (signin) {
      onFormSubmit(email, password);
    } else {
      onFormSubmit(firstName, lastName, email, password);
    }
  };




  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className={"col-12 col-md-8 col-lg-6 col-xl-5"}>
            <div className={`${styles.lesd}  `}>
              <div className="card-body p-5 text-center">

                
                <div className="container">
                  <div className="child">
                   
                    <h4>{signin ? "Sign in" : "Signup"}</h4>
                    <p className="line">
                      {signin ? "Login in to read blogs" : "SignUp to create your blogs"}
                    </p>
                    <form onSubmit={onSubmitHandler}>
                      {!signin && (
                        <>
                          <div className="mb-3">
                            <input
                              ref={firstNameRef}
                              type="text"
                              name="FirstName"
                              className="form-control"
                              id="FirstName"
                              placeholder="First Name"
                              minLength="3"
                              maxLength="20"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              ref={lastNameRef}
                              type="text"
                              name="LastName"
                              className="form-control"
                              id="LastName"
                              placeholder="Last Name"
                              minLength="1"
                              maxLength="20"
                              required
                            />
                          </div>
                        </>
                      )}
                      <div className="mb-3">
                        <input
                          ref={emailRef}
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          ref={passwordRef}
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          required
                          title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number."
                        />
                      </div>
                      {!signin && (
                        <div className="mb-3">
                          <input
                            ref={retypePasswordRef}
                            type="password"
                            className="form-control"
                            name="retypePassword"
                            id="retypePassword"
                            placeholder="Retype Password"
                            required
                            pattern={passwordRef.current ? passwordRef.current.value : ""}
                            title="Passwords must match."
                          />
                        </div>
                      )}
                      <div className="btndiv">
                        <button
                          type="submit"
                          className="btn btn-outline-light btn-lg px-5"
                        >
                          {signin ? "Login" : "SignUp"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}



