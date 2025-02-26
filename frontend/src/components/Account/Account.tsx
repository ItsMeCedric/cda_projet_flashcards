import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import axiosInstance from "../../utils/axios";
import styles from "./Account.module.css";
import { FaUserEdit, FaRegSave } from "react-icons/fa";

const Account: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  const [isEditing, setIsEditing] = useState({
    email: false,
    password: false,
    firstName: false,
    lastName: false,
  });

  const handleEditClick = (field: string) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSaveClick = async (field: string) => {
    try {
      const updatedData = {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      };
      await axiosInstance.patch(`/api/users/${user?.id}`, updatedData);
      alert(`${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully!`);
      setIsEditing((prev) => ({ ...prev, [field]: false }));
    } catch (error) {
      console.error(`Failed to update ${field}:`, error);
    }
  };

  return (
    <div className={styles.profile_page}>
      <div className={styles.card_container}>
        <img
          className={styles.round}
          src="https://fastly.picsum.photos/id/593/200/200.jpg?hmac=E26lTUTkzs_AeuWXrkT-kFTudfYDTVCjgKVE_HDzRmk"
          alt="user"
        />
        <h3>{user?.username}</h3>

        <div className={styles.field}>
          <label>Email:</label>
          {isEditing.email ? (
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          ) : (
            <span>mail@user{email}</span>
          )}
          {isEditing.email ? (
            <FaRegSave className={styles.icon} onClick={() => handleSaveClick("email")} />
          ) : (
            <FaUserEdit className={styles.icon} onClick={() => handleEditClick("email")} />
          )}
        </div>

        <div className={styles.field}>
          <label>First Name:</label>
          {isEditing.firstName ? (
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          ) : (
            <span>firstname{firstName}</span>
          )}
          {isEditing.firstName ? (
            <FaRegSave className={styles.icon} onClick={() => handleSaveClick("firstName")} />
          ) : (
            <FaUserEdit className={styles.icon} onClick={() => handleEditClick("firstName")} />
          )}
        </div>
        <div className={styles.field}>
          <label>Last Name:</label>
          {isEditing.lastName ? (
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          ) : (
            <span>lastname{lastName}</span>
          )}
          {isEditing.lastName ? (
            <FaRegSave className={styles.icon} onClick={() => handleSaveClick("lastName")} />
          ) : (
            <FaUserEdit className={styles.icon} onClick={() => handleEditClick("lastName")} />
          )}
        </div>
        <div className={styles.field}>
          <label>Password:</label>
          {isEditing.password ? (
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          ) : (
            <span>••••••••</span>
          )}
          {isEditing.password ? (
            <FaRegSave className={styles.icon} onClick={() => handleSaveClick("password")} />
          ) : (
            <FaUserEdit className={styles.icon} onClick={() => handleEditClick("password")} />
          )}
        </div>
        <div className={styles.prefer}>
          <h6>Prefer Themes</h6>
          <ul>
            <li>Games</li>
            <li>Development</li>
            <li>Gym</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
