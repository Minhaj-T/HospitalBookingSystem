import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaRegTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { notification } from '../../../utilities/notification';
import { addBills } from '../../../features/Doctor/userProfile/userProfileSlice';

function AddBilling({userId,doctor1}) {
  const dispatch = useDispatch();
  
    const [formFields, setFormFields] = useState([
      { title: '', amount: '' },
    ]);
  
    const handleFormChange = (event, index) => {
      let data = [...formFields];
      data[index][event.target.name] = event.target.value;
      setFormFields(data);
    };
  
    const submit = async () => {
        const Data = {
          formFields: formFields,
          userId,
          doctorId: doctor1['_id'],
        };
      dispatch(addBills(Data));
      setFormFields([{ title: '',amount:"" }]);
      notification.success("Bill added successfully...!");
    };
  
    const addFields = () => {
      let object = {
        title: '',
        amount: '',
      };
      setFormFields([...formFields, object]);
    };
  
    const removeFields = (index) => {
      let data = [...formFields];
      data.splice(index, 1);
      setFormFields(data);
    };
  
  
    return (
      <>
        <Link
          to={''}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          className="add-new-btn"
        >
          Add Billing
        </Link>
        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                 Add Billing
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="biller-info">
                          <h4 className="d-block">Dr {doctor1?.name}</h4>
                          <span className="d-block text-sm text-muted">
                            {doctor1?.specialization}
                          </span>
                          <span className="d-block text-sm text-muted">
                            {doctor1?.state},{doctor1?.country}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6 text-sm-right">
                        <div className="billing-info">
                          <h4 className="d-block">{moment().format('ll')}</h4>
                          <span className="d-block text-muted">
                            #{(doctor1?._id).substr(0, 10)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="add-more-item text-right">
                      <Link
                        to=""
                        onClick={addFields}
                        style={{ paddingBottom: '10px' }}
                      >
                        <FaPlusCircle /> Add Item
                      </Link>
                    </div>
                    <div className="add-more-item text-right"></div>
                    <div className="card card-table">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center">
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Amount</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {formFields &&
                                formFields.map((form, index) => (
                                  <tr>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="title"
                                        onChange={(event) =>
                                          handleFormChange(event, index)
                                        }
                                        value={form.name}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="amount"
                                        onChange={(event) =>
                                          handleFormChange(event, index)
                                        }
                                        value={form.quantity}
                                      />
                                    </td>
                                    <td>
                                      <Link
                                        to={''}
                                        onClick={() => removeFields(index)}
                                        className="btn bg-danger-light trash"
                                      >
                                        <FaRegTrashAlt />
                                      </Link>
                                      </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
  
                    <div className="row">
                      <div className="col-md-12 text-right">
                        <div className="signature-wrap">
                          <div className="sign-name">
                            <p className="mb-0">( Dr. {doctor1?.name} )</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    submit();
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      );
}

export default AddBilling