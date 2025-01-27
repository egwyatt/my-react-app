import React, { useState } from 'react';
import '../style.css';

function ContactForm() {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
  });

  const[isSubmitted, setIsSubmitted] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    
  

  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
  });
  
  setIsSubmitted(true); 
};

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

      
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        
        <div>
        <button type="submit">Clear</button>
      </div>
    
  

  <div>
        
        <p><>First Name:</> {formData.firstName}</p>
        <p><>Last Name:</> {formData.lastName}</p>
        <p><>Email:</> {formData.email}</p>
        <p><>Comments:</> {formData.comments}</p>
      </div>
    </form>
  )
};


     

export default ContactForm;