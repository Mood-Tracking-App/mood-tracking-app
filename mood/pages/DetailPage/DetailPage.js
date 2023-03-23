import React from 'react'
import styles from './DetailPage.module.css'

const DetailPage = () => {
  return (
    <div className={styles.page}>

    <div className={styles.topbar}>
      
      {/* <button><i class="fa fa-folder"></i></button> */}
      <p>Activity:</p>
    </div>
    

      <div className={styles.dropdown1}>
        <label htmlFor="emotion-category"></label>
        <select className={styles.selecter}>
          <option value="Anxiety" selected>Anxiety</option>
          <option value="Sad">Sad</option>
          <option value="Anger">Anger</option>
          {/* <option value="Frustration">Frustration</option> */}
          <option value="Fear">Fear</option>
          <option value="Guilt">Guilt</option>
        </select>
      </div>



      <div className={styles.dropdown2} >
        <label htmlFor="date-category"></label>
        <select className={styles.selecter}>
          <option value="7" selected>7 days</option>
          <option value="14">14 days</option>
          <option value="30">30 days</option>
          <option value="60">60 days</option>
        </select>
      </div>

      <div>
      <img src={'./line-chart.JPG'} alt="Chart"></img> 
      
      
      </div> 

    

    <div className={styles.feadback}>
      
      Feadback:
      
    </div>

  </div>
    
     
  )
}
  
export default DetailPage