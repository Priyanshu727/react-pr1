import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Footer extends Component {
  // constructor() {
  //   super()
  // }    

  render() {
    return (
      <>
        <section className="ftr">
          <div className="container">
            <div className="row">
              <div className="col-6 pb-5 ps-0 pe-0">
                <div className="d-flex">
                  <div className="col-6">
                    <div className="ftimg pt-5">
                      <img src="/images/logo-light.png" alt="" />
                    </div>
                    <p className="text-light pt-4 fs-4">
                      Followers
                    </p>
                    <div className="fionc d-flex text-center m-auto">
                      <div className="icon border rounded-circle border-light">
                        <img src="/images/face.png" alt="" />
                      </div>
                      <div className="icon border rounded-circle border-light">
                        <img src="/images/twitt.png" alt="" />
                      </div>
                      <div className="icon border rounded-circle border-light">
                        <img src="/images/link.png" alt="" />
                      </div>
                      <div className="icon border rounded-circle border-light">
                        <img src="/images/what.png" alt="" />
                      </div>
                    </div>

                  </div>
                  <div className="col-6">
                    <h3 className="text-light pt-5 pb-3">
                      About
                    </h3>
                    <p className="ftrpar">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta eveniet ea obcaecati natus, eius adipisci veritatis hic quidem unde molestias voluptates, rerum ullam! Beatae eaque enim nihil aperiam, obcaecati eos officia tempora nisi quasi corrupti a omnis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 ps-0 pe-0">
                <div className="d-flex">
                  <div className="col-4 ms-5">
                    <h3 className="text-light pt-5 ps-3 pb-3">
                      link
                    </h3>
                    <ul className="ftrlist ps-3 pb-4">
                      <li>HOME </li>
                      <li>ABOUT</li>
                      <li>SERVICES</li>
                      <li>PROJECTS</li>
                      <li>FEATURES</li>
                      <li>BLOGS</li>
                      <li>SHOPS</li>
                      <li>CONTACTS</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <h3 className="text-light pt-5 pb-3">
                      Address
                    </h3>
                    <p className="ftrpar">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nesciunt.
                    </p>
                  </div>
                  <div className="col-4 ps-4">
                    <h3 className="text-light pt-5 pb-3">
                      Phone
                    </h3>
                    <p className="ftrpar">
                      34857389279
                    </p>
                    <p className="ftrpar">
                      34253245344
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

