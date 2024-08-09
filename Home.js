import React, { useState } from 'react';

function Home() {
   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const showData = () => {
        const { name, email, age, gender } = formData;
        alert(`Name: ${name}\nEmail: ${email}\nAge: ${age}\nGender: ${gender}`);
    };

    return (
        <>
            <h2>Personal Information Form</h2>
            <form id="personalForm">
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="age">Age:</label><br />
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="gender">Gender:</label><br />
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br /><br />

                <input
                    type="button"
                    value="Submit"
                    onClick={showData}
                />
            </form>
        </>
    );
}

export default Home;
