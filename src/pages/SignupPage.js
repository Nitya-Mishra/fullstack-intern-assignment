import React, { useState } from 'react';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (formData.name.length < 20) {
      newErrors.name = "Name must be at least 20 characters long.";
    } else if (formData.name.length > 60) {
      newErrors.name = "Name must be less than 60 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    // Address validation
    if (formData.address.length > 400) {
      newErrors.address = "Address must be less than 400 characters.";
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be 8-16 characters, include 1 uppercase letter and 1 special character.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log(formData);
      // Later yahan API se signup karenge
    }
    // Later yahan API se signup karenge
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            required
          />
           {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>
        <div>
          <label>Email:</label><br />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required
          />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div>
          <label>Address:</label><br />
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange}
            required
          />
          {errors.address && <div style={{ color: "red" }}>{errors.address}</div>}
        </div>
        <div>
          <label>Password:</label><br />
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange}
            required
          />
           {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
