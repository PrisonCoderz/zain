// @ts-nocheck
// @ts-ignore

import React, { useState, useEffect } from 'react';
import styles from '../../styles/dataform.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Sidebar from '../../components/layout/Sidebar'

const EditDataEntry = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [interests, setInterests] = useState([]);
    const [bio, setBio] = useState('');

    const router = useRouter()
    useEffect(() => {
        async function fetchdata() {
            const { id } = router.query
            try {
                const response = await axios.get(`http://localhost:9000/api/data-entry/${id}`);
                if (response) {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setGender(response.data.gender);
                    setCountry(response.data.country);
                    setInterests(response.data.interests);
                    setBio(response.data.bio);
                }
                console.log(response)
            } catch (err) {
                console.log(err);
            }
        }
        fetchdata()
    }, [router.query])

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
        if (interests.includes(selectedInterests[0])) {
            const unselect = interests.filter(value => value !== selectedInterests[0])
            setInterests(unselect);
        }
        else {
            setInterests([...interests, selectedInterests[0]]);
        }
    };
    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:9000/api/data-entry/${router.query.id}`, {
                firstName,
                lastName,
                gender,
                country,
                interests,
                bio,
            });
            if (response.data) {
                setFirstName("")
                setLastName("")
                setGender("")
                setCountry("")
                setInterests([])
                setBio("")
                router.push("/data-entry")
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Sidebar>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2 className={styles.heading}>Data Entry Form Edit</h2>
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
        </Sidebar>
    );
};

// EditDataEntry.getInitialProps = async ({ query }) => {
//     const { id } = query
//     try {
//         const response = await axios.post(`http://localhost:9000/api/data-entry`, {
//             id
//         });
//         return { data: response.data };
//     } catch (err) {
//         console.log(err);
//         return { data: null };
//     }
// }
export default EditDataEntry
