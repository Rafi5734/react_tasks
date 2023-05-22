import React, { useEffect, useState } from "react";
import axios from "axios";
const Problem2 = () => {
  const [contactData, setContactData] = useState();
  const [usContactData, setUsContactData] = useState();
  const [evenCheck, setEvenCheck] = useState(false);
  let count = 1;
  let usCount = 1;

  useEffect(() => {
    fetchContactData();
  }, []);

  useEffect(() => {
    const findCountryByName = () => {
      const country = contactData?.filter((item) => {
        return item?.country?.name === "United States";
      });
      setUsContactData(country);
      //   console.log(country);
    };
    findCountryByName();
  }, [contactData]);

  const fetchContactData = async () => {
    try {
      const response = await axios.get(
        "https://contact.mediusware.com/api/contacts/"
      );
      setContactData(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheck = (e) => {
    // setEvenCheck(e.target.checked);
    // console.log(evenCheck);
    // if (evenCheck === false) {
    //   const evenElements = contactData?.filter((item) => item?.id % 2 === 0);
    //   setContactData(evenElements);
    // }
  };

  //
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            type="button"
          >
            All Contacts
          </button>
          {/* Modal  */}
          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    className="btn btn-lg btn-outline-primary me-5"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    type="button"
                    style={{ backgroundColor: "#46139f" }}
                  >
                    All Contacts
                  </button>
                  <button
                    className="btn btn-lg btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    type="button"
                    style={{ backgroundColor: "#ff7f50" }}
                  >
                    US Contacts
                  </button>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{ border: "1px solid #46139f" }}
                  ></button>
                </div>
                <div class="modal-body">
                  <h6>All countries contact</h6>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country</th>
                        <th scope="col">Contact number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactData?.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{item?.id}</th>
                          <td>{item.country.name}</td>
                          <td>{item.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <div class="input-group mb-3">
                    <div class="input-group-text">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                        onChange={handleCheck}
                      />
                      <label class="ms-3 form-check-label" for="invalidCheck">
                        Only even
                      </label>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-lg btn-outline-warning"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            type="button"
          >
            US Contacts
          </button>

          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    className="btn btn-lg btn-outline-primary me-5"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    type="button"
                    style={{ backgroundColor: "#46139f" }}
                  >
                    All Contacts
                  </button>
                  <button
                    className="btn btn-lg btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    type="button"
                    style={{ backgroundColor: "#ff7f50" }}
                  >
                    US Contacts
                  </button>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{ border: "1px solid #46139f" }}
                  ></button>
                </div>
                <div class="modal-body">
                  <h6>US contacts</h6>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country</th>
                        <th scope="col">Contact number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usContactData?.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{usCount++}</th>
                          <td>{item.country.name}</td>
                          <td>{item.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <div class="input-group mb-3">
                    <div class="input-group-text">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                      <label class="ms-3 form-check-label" for="invalidCheck">
                        Only even
                      </label>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
