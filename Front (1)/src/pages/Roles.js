import React, { useState } from 'react';
import styles from '../styles/dataform.module.css';

const DataEntry = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [interests, setInterests] = useState([]);
  const [bio, setBio] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleInterestsChange = (event) => {
    const selectedInterests = Array.from(event.target.selectedOptions, (option) => option.value);
    setInterests(selectedInterests);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      gender,
      country,
      interests,
      bio,
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.heading}>Data Entry Form</h2>
        <div className={styles.label}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="gender">Gender</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={handleGenderChange}
                className={styles.radioInput}
                required
              />
              Male
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={handleGenderChange}
                className={styles.radioInput}
                required
              />
              Female
            </label>
          </div>
        </div>
        <div className={styles.label}>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={country}
            onChange={handleCountryChange}
            className={styles.select}
            required
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>
        </div>
        <div className={styles.label}>
          <label htmlFor="interests">Interests</label>
          <select
            multiple
            id="interests"
            value={interests}
            onChange={handleInterestsChange}
            className={styles.select}
            required
          >
            <option value="sports">Sports</option>
            <option value="music">Music</option>
            <option value="books">Books</option>
            <option value="movies">Movies</option>
          </select>
        </div>
        <div className={styles.label}>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={handleBioChange}
            className={styles.textarea}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
    );
    };

    export default DataEntry
