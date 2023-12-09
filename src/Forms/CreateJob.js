import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Categories = ["Interior Design", "Flooring", "Plumbing", "Housekeeping", "Landscaping", "Mounting", "Pool Maintenance", "Home Security" ]

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
        
        const SubmitJob = async() => {
            const NewJob = {
                ServiceRequest, Desc, DatePosted, JobCategory, DateNeeded, TimeSlot, Email, City, ZipCode
            }
            try {
                await fetch ("http://localhost:3001/api/ads/", {
                    method:"POST", 
                    body: JSON.stringify(NewJob),
                    headers: {
                        "Content-Type":"application/json"
                    }
                })
                alert ("Successful")

            } catch (error){
                console.log(error)
            }
        }
        
        return (
            <>       
            <h1>Post a Job</h1>
            {error && <p className="error">{error}</p>}
            <select
                placeholder="Category"
                value={JobCategory}
                onChange={e => setJobCategory(e.target.value)}>
                { Categories.map(category => (<option value={category}>{category}</option>) )}
            </select>
            <input
                placeholder="Serv Request"
                value={ServiceRequest}
                onChange={e => setServiceRequest(e.target.value)} />
            <input
                placeholder="Description"
                value={Desc}
                onChange={e => setDesc(e.target.value)} />
            <input
                placeholder="Date Posted" 
                type="date"
                value={DatePosted}
                onChange={e => setDatePosted(e.target.value)} />            
            <input
                placeholder="Date Needed"
                type="date"
                value={DateNeeded}
                onChange={e => setDateNeeded(e.target.value)} />
            <input
                placeholder="Time Slot"
                value={TimeSlot}
                onChange={e => setTimeSlot(e.target.value)} />
            <input
                placeholder="Email"
                value={Email}
                onChange={e => setEmail(e.target.value)} />            
            <input
                placeholder="City"
                value={City}
                onChange={e => setCity(e.target.value)} />
            <input
                placeholder="Zip Code"
                value={ZipCode}
                onChange={e => setZipCode(e.target.value)} />
            
            <button onClick={SubmitJob}>Create Job</button>      
            </>
        );    
    }
 
export default CreateJob;