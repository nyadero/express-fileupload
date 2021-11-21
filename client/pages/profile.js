import React, {useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import styles from '../styles/Profile.module.css'

function profile() {
  const router = useRouter();
  const [make, setMake] =  useState("");
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("")
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile]= useState(null);

  const fileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const isValidated = make === " " || model === " " || manufacturer === "" || description === "" || selectedFile === null;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("make", make);
    formData.append("model", model);
    formData.append("manufacturer", manufacturer);
    formData.append("description", description)

    console.log(formData);
    axios.post("http://localhost:5000/profiles", formData).then((res) => {
      if(res && res.data){
        router.push('/')
      }
    }).catch((error) => {
      console.log({Error: error});
    })
  }

    return (
        <div className={styles.profilePage}>
          <div className={styles.grid}>
         <form action="" method="post" encType='multipart/form-data'>

           <div className={styles.formControl}>
           <label htmlFor="car_make">Car make</label>
           <input type="text" name="make" className={styles.formInput} onChange={({target}) => setMake(target.value)} required />
           </div>

           <div className={styles.formControl}>
           <label htmlFor="car_model">Car model</label>
           <input type="text" name="model" className={styles.formInput} onChange={({target}) => setModel(target.value)} required />
           </div>

           <div className={styles.formControl}>
           <label htmlFor="manufaturer">Manufacturer</label>
           <input type="text" name="manufaturer" className={styles.formInput} onChange={({target}) => setManufacturer(target.value)} required/>
           </div>

           <div className={styles.formControl}>
           <label htmlFor="about">Description</label>
           <textarea name="description" cols="30" rows="10" className={styles.formInput} onChange={({target}) => setDescription(target.value)} required></textarea>
           </div>

           <div className={styles.formControl}>
           <label htmlFor="profile">Photo</label>
           <input type="file" name="selectedFile" className={styles.formInput} onChange={fileChange}/>
           </div>
           
         </form>

         <button className={styles.submitBtn} onClick={handleSubmit} disabled={isValidated}>Submit profile</button>
        </div>

        </div>
    )
}

export default profile
