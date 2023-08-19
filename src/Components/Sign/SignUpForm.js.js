import React, { useRef } from 'react';
import styles from '@/styles/login.module.css';



export default function SignUpForm({ signin,onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

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
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className={`${styles.lesd}`}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className="form-control form-control-lg"
                      ref={firstNameRef}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      className="form-control form-control-lg"
                      ref={lastNameRef}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      placeholder="Email"
                      className="form-control form-control-lg"
                      ref={emailRef}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      placeholder="Password"
                      className="form-control form-control-lg"
                      ref={passwordRef}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="repeatPasswordX"
                      placeholder="Repeat Password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={onSubmitHandler}
                  >
                    {signin ? 'Sign In' : 'Sign Up'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
