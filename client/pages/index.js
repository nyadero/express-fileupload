import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../Components/Intro/Intro';
import ProfileList from '../Components/ProfileList/ProfileList';

export default function Home({allProfiles}) {
  const [profiles, setProfiles]= useState(allProfiles)  

  return (
    <div className={styles.container}>
      <Head>
        <title>Express file upload </title>
        <meta name="description" content="file upload with express-fileupload" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Intro/>
        
        {/* profiles section */}
        <ProfileList profiles={profiles} setProfiles={setProfiles} />
        
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/profiles/profile");
  const allProfiles = await res.json();

  return{
     props: {
       allProfiles,
     },
  };

}
