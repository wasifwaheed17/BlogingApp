import React from 'react'
import styles from '@/styles/login.module.css'

const Sign = () => {
  return (
    <>
    <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className={"col-12 col-md-8 col-lg-6 col-xl-5"}>
          <div className={`${styles.lesd}  `}>
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5">
              <div className="form-outline form-white mb-4">
                  <input type="name" id="typename" placeholder='First Name' className="form-control form-control-lg" />
                
                </div>
                <div className="form-outline form-white mb-4">
                  <input type="name" id="typename" placeholder='Last Name' className="form-control form-control-lg" />
                
                </div>
                <div className="form-outline form-white mb-4">
                  <input type="email" id="typeEmailX" placeholder='Email' className="form-control form-control-lg" />
                
                </div>
  
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" placeholder='Password' className="form-control form-control-lg" />
                  
                </div>
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" placeholder='Repeat Password' className="form-control form-control-lg" />
                  
                </div>
  
               
                <button className="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>

  
              </div>
  
              
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Sign
