import {CardMedia} from "@material-ui/core"
import { Delete, Edit } from "@material-ui/icons"
import {useRouter} from "next/router"
import axios from "axios"
import Image from 'next/image'
import styles from './Profile.module.css'

function Profile({profile, setProfiles}) {
    const router = useRouter();
    let {id} = router.query;
    id = profile?.id;
    console.log({Id: id})
    const deleteProfile = async () => {
       await axios.delete(`http://localhost:5000/profiles/delete/${id}`).then((response) => {
           setProfiles(response.data)
       })
    }
    return (
        <>
        <div className={styles.profile}>
            <div className={styles.imgContainer}>
            <CardMedia image={`http://localhost:5000/images/${profile?.photo}`} title={profile?.first_name} style={{width:"100%", height: "180px", objectFit: true, paddingTop: "56.25%"}}  />
            </div>
            <div className={styles.aboutContainer}>
            <h4>{profile?.make}  {profile?.model} </h4>
            <h5>{profile.manufacturer}</h5>
             <p>{`${profile?.description.substring(0, 70)}....`}</p>
            </div>
            <div className={styles.profileActions}>
                {/* <button type="button">
                   <Edit className={styles.icon}/>
                </button> */}
                <button type="button" onClick={deleteProfile}>
                    <Delete className={styles.icon}/>
                </button>
            </div>    
        </div>
        </>
    )
}

export default Profile
