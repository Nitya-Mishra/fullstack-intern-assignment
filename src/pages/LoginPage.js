import React, { useState } from 'react';

function LoginPage() {
  // ⭐ UPDATED START: States for form and errors
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  // ⭐ UPDATED END

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ⭐ UPDATED START: Simple validation
  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };
  // ⭐ UPDATED END

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log(formData);
      // Later: Login API call karenge
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* ⭐ UPDATED: Error Message */}
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
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
          {/* ⭐ UPDATED: Error Message */}
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
