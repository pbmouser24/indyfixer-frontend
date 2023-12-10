import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateJob.css'


const Categories = ["Interior Design", "Flooring", "Plumbing", "Housekeeping", "Landscaping", "Mounting", "Pool Maintenance", "Home Security"]

const CreateJob = () => {

    const [ServiceRequest, setServiceRequest] = useState('');
    const [Desc, setDesc] = useState('');
    const [DatePosted, setDatePosted] = useState('');
    const [JobCategory, setJobCategory] = useState('');
    const [DateNeeded, setDateNeeded] = useState('');
    const [TimeSlot, setTimeSlot] = useState('');
    const [Email, setEmail] = useState('');
    const [City, setCity] = useState('');
    const [ZipCode, setZipCode] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const SubmitJob = async (e) => {
        e.preventDefault()
        const NewJob = {
            ServiceRequest, Desc, JobCategory, DateNeeded, TimeSlot, Email, City, ZipCode
        }
        try {
            const response = await fetch("http://localhost:3001/api/ads/", {
                method: "POST",
                body: JSON.stringify(NewJob),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.ok) {
                alert("Successful")
            } else {
                setError("Please fill out all fields")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="createJobs">
            {/* <h1>Post a Job</h1> */}
            
            {error && <p className="error">{error}</p>}
            <form onSubmit={SubmitJob}>
                <select
                    required
                    placeholder="Category"
                    value={JobCategory}
                    onChange={e => setJobCategory(e.target.value)}>
                    <option value="">Please Select a Category</option>
                    {Categories.map(category => (<option value={category}>{category}</option>))}
                </select>                
                <input
                    placeholder="Description of Services Requested"
                    value={Desc}
                    onChange={e => setDesc(e.target.value)} />
                {/* <input
                    placeholder="Date Posted"
                    type="date"
                    value={DatePosted}
                    onChange={e => setDatePosted(e.target.value)} /> */}                             
                <input
                    placeholder="Email"
                    value={Email}
                    onChange={e => setEmail(e.target.value)} />
                <input
                    placeholder="City"
                    value={City}
                    onChange={e => setCity(e.target.value)} />
                {/* <input
                    placeholder="Zip Code"
                    value={ZipCode}
                    onChange={e => setZipCode(e.target.value)} /> */}
                <label>
                    Please enter date project is needed:
                    <input
                        type="date"
                        value={DateNeeded}
                        onChange={e => setDateNeeded(e.target.value)} />
                </label>
                

                <button>Create Job</button>
            </form>
            </div>
        </>
    );
}

export default CreateJob;

                // <label>
                //     Service Request
                //     <input
                //         //placeholder="Service Request"

                //         value={ServiceRequest}
                //         onChange={e => setServiceRequest(e.target.value)} />
                // </label>