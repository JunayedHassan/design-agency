import React from 'react';
import './AddAdmin.css';


const AddAdmin = () => {
    const handleAddAdmin = (e) => {

        let newAdminValue = document.getElementById("newAdmin");
        const adminEmail = newAdminValue.value;
        const newAdmin = { adminEmail };


        fetch('https://dry-journey-91086.herokuapp.com/addadmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAdmin)
        })

        newAdminValue.value = '';


        e.preventDefault();
    }
    return (
        <div className="form-width">
            <h4>Email</h4>
            <form onSubmit={handleAddAdmin} className="d-flex align-items-center">

                <input className="col-md-6 col-sm-12 add-admin-form mr-5" placeholder="bon.jovi@gmail.com" id="newAdmin" type="text" required />
                <button className="btn btn-success pl-4 pr-4" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddAdmin;