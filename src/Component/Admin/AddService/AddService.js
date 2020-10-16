import React, { useState } from 'react';
import './AddService.css';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddService = () => {

    const [serviceDetail, setServiceDetail] = useState({});
    const [file, setFile] = useState(null);
    const getInfo = e => {
        const newServiceDetail = { ...serviceDetail };
        newServiceDetail[e.target.name] = e.target.value;
        setServiceDetail(newServiceDetail);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleAddService = (e) => {

        const serviceDescriptionchk = document.getElementById("service-description").value
        const imgchk = document.getElementById("file-upload").value
        const serviceTitlechk = document.getElementById("service-title").value

        if (serviceDescriptionchk && imgchk && serviceTitlechk) {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('serviceTitle', serviceDetail.serviceTitle)
            formData.append('serviceDescription', serviceDetail.serviceDescription)

            fetch('https://dry-journey-91086.herokuapp.com/service', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                })
                .catch(error => {
                    console.error(error)
                });
            document.getElementById("service-description").value = '';
            document.getElementById("file-upload").value = '';
            document.getElementById("service-title").value = '';
        }

        e.preventDefault();
    }


    return (
        <div>
            <div className="container-fluid row service-bg-layout">
                <div className="col-md-4 col-sm-12">
                    <h5>Service Title</h5>
                    <input className="add-service-form" onBlur={getInfo} id="service-title" name="serviceTitle" placeholder="Enter Title" type="text" />
                    <h5 className="mt-4">Description</h5>
                    <textarea className="add-service-form service-form-width" placeholder="Enter Designation" id="service-description" onBlur={getInfo} name="serviceDescription" type="text" />
                </div>
                <div className="col-md-8 col-sm-12">
                    <h5>Icon</h5>
                    <label for="file-upload" className="custom-file-upload  file-btn">
                        <div className="row d-flex justify-content-center">
                            <FontAwesomeIcon className="mr-1" style={{ marginTop: "4px" }} icon={faCloudUploadAlt} />
                            <p style={{ margin: "0" }}>Upload Image</p>
                        </div>
                    </label>
                    <input onChange={handleFileChange} id="file-upload" type="file" />
                </div>
            </div>
            <div className="mt-3 mr-3 d-flex justify-content-end">
                <button className="btn btn-success " onClick={handleAddService}>submit</button>
            </div>
        </div>
    );
};

export default AddService;