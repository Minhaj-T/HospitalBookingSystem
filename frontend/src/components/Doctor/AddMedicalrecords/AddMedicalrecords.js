import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UploadDocument } from '../../../utilities/cloudnarydocumentUpload';
import { toast } from 'react-toastify';
import * as api from '../../../api/doctors';
import { useSelector } from 'react-redux';
import { errorHandler } from '../../../utilities/errorMessege';
import { notification } from '../../../utilities/notification';
import Spinner from '../../User/Spinner/Spinner';

function AddMedicalrecords({ userId, doctor1 }) {
  const [Loading, setLoading] = useState(false);
  const [Document, setDocument] = useState(null);
  const [FormData, setFormData] = useState({
    date: '',
    description: '',
  });
  const { date, description } = FormData;

  //create a tocken
  const { doctor } = useSelector((state) => state.doctorAuth);
  const config = {
    headers: {
      Authorization: `Bearer ${doctor['token']}`,
    },
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      date,
      description,
      document: Document,
      doctorId: doctor1['_id'],
      userId,
    };
    try {
      setLoading(true);
      const { data } = await api.addMedicalRecords(Data, config);
      if (!data) throw new Error('the prescription failed !');
      setLoading(false);
      setFormData({ date: '', description: '' });
      notification.success(data.message);
    } catch (error) {
      return notification.error(errorHandler(error));
    }
  };

  //dump the document into cloudinary
  const postDocs = async (docs) => {
    try {
      toast.loading('Please wait', {
        position: toast.POSITION.TOP_CENTER,
        progressClassName: 'success-progress-bar',
        toastId: 2,
      });
      const data = await UploadDocument(docs);
      setDocument(data.secure_url.toString().replace('.pdf', '.jpg'));
      toast.update(2, {
        render: 'Document uploaded successfully..!',
        type: 'success',
        hideProgressBar: false,
        autoClose: 3000,
        isLoading: false,
      });
    } catch (error) {
      toast.update(2, { render: error, type: 'error', isLoading: false });
    }
  };

  // Loading page
  if (Loading) {
    return <Spinner />;
  }

  return (
    <>
      <Link
        to={''}
        type="button"
        className="add-new-btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add Medical Records
      </Link>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Medical Records
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="modal-body">
                  <div class="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      name="date"
                      class="form-control datetimepicker"
                      value={date}
                      onChange={onChange}
                    />
                  </div>
                  <div class="form-group">
                    <label>Description ( Optional )</label>
                    <textarea
                      name="description"
                      class="form-control"
                      value={description}
                      onChange={onChange}
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>Upload File</label>
                    <input
                      type="file"
                      class="form-control"
                      onChange={(e) => postDocs(e.target.files[0])}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer m-auto">
              <button
                type="button"
                className="btn btn-secondary "
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={onSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMedicalrecords;
