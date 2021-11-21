import Profile from "../Profile/Profile"
import styles from './ProfileList.module.css'

function ProfileList({profiles, setProfiles}) {
    return (
        <div className={styles.profileList}>
           {!profiles?.length ? <h4>No profiles found create one</h4> : 
            <div className={styles.profileContainer}>
               {profiles.map((profile) => {
            return (
                <Profile key={profile?.id} profile={profile} profiles={profiles} setProfiles={setProfiles} />
            )
            })}
            </div>
           }
        </div>
    )
}

export default ProfileList
