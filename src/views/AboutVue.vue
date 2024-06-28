<template>
    <v-container>
        <v-card class="pa-4 card-hover-effect" elevation="6" color="#0B0A12">
          <v-row align="center">
            <v-col cols="4">
              <v-img src="/new1.png" alt="Profile Picture" contain rounded class="image-file"></v-img>
            </v-col>
            
            <v-col cols="8">
              <div>
                <h2 class="headline">Aviral Srivastava</h2>
                <p class="grey--text">Data Analyst / Power BI Developer</p>
                <p class="body-1">
I'm a seasoned data analyst with three years of experience in SQL, Power BI, and Excel. I excel in transforming raw data into actionable insights, adeptly querying with SQL, and crafting compelling visualizations in Power BI. My advanced Excel skills include complex formulas and pivot tables, streamlining data workflows for informed decision-making. Passionate about leveraging data to drive business strategies, I thrive on uncovering trends and optimizing performance across various industries.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <br><br>
        <h1 class="display-1 text-center">My Life TimeLine</h1>
        <v-timeline align="start">
          <v-timeline-item v-for="(item, index) in components" :key="index">
            <template v-slot:icon>
              <v-avatar size="64" :image="item.icon"></v-avatar>
            </template>
            <template v-slot:opposite>
              <b>{{ item.duration }}</b>
            </template>
            <div>
              <div class="text-h6 title-name" style='font-family: "Montserrat";color:#2fbf71'>{{ item.title }}</div>
              <p>{{ item.text }}</p>
            </div>
          </v-timeline-item>
        </v-timeline>
      <v-divider />
      <br><br>
        <v-card rounded style="padding: 20px"  color="#0B0A12"  elevation="3">
        <v-row>
          <v-col cols="24" md="12">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-card-text>
              <div class="text-container">
                <h6>2016 - 2020</h6>
                <h4>Bachelor of Technology</h4>
                <h3>Electronics and Communication</h3>
                <h5>PRANVEER SINGH INSTITUTE OF TECHNOLOGY</h5>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        </v-row>
      </v-card>
    </v-container>
</template>
  
  <script>
  export default {
  data(){
    return{
      components : [
        {duration: "2003 - 2006", icon: 'timeline/1.ico' , title: "BABY STEPS", text: "Born on 21st March - 2003 , I resided with my family in Kanpur and lived here for about 3 years "},
        {duration: "2006 - 2015", icon: 'timeline/2.ico', title: "THE DELHI SAGA", text: "Then I shifted to NewDelhi from where I started my schooling and got exposure to the new technologies and how they functioned. Here I studied till 7th standard while being one of the most proficient persons who had a plethora of knowledge about computers and their functionings."},
        {duration: "2015 - 2020", icon: 'timeline/3.ico', title: "THE COMEBACK", text: "In 2015 I shifted back to Kanpur due to private reasons . Here I met some of the most hardworking persons I've met in my entire life and they motivated me to go the distance and exceed my boundaries. From here I completed my 10th and 12th standard."},
        {duration: "2020 (March - December)", icon: 'timeline/4.ico', title: "TIME TO STEP-UP", text: "On 20th March due to Corona outbreak my Computer Exam was postponed(later cancelled) and on 24th Lockdown was imposed throughout the country. My elder brother instructed me to learn new habits and I decided to learn making websites and learn playing piano. Throughout the lockdown I emphasized on these 2 skills and got a good grasp about how these things worked and how they functioned."},
        {duration: "2020 December - Current", icon: 'timeline/5.ico', title: "JOURNEY THROUGH MY COLLEGE YEARS", text: "On 8th of December 2020, I started my engineering from PSIT Kanpur, The first year was pretty negligible because of Corona and online classes but since the 2nd year things started escalating and I got more into programming. In the 3rd year I learned various new frameworks, got decent in logical programming and was able to put my ideas into my code. In 4th year I landed my first job and got an internship offer at Cyber3ra."},
      ]
    }
  }
};
  </script>
  

  <style scoped>
  span{
    color : #2fbf71;
  }
  .box h5 {
    font-size: 14px;
    font-weight: 500;
    color: var(--2nd-main-color);
  }
  .box p {
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 1.2rem;
    line-height: 1.8rem;
    color: #ffffffcc;
  }
  .box h6{
    color: #3e4455;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .box{
    padding: 15px;
  }
  .box h4 {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 13px;
  }
  .about-me {
    /* Add styles for the about me section */
    padding: 10px;
  }
  .card-hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover-effect:hover {
    transform: translateY(-10px) translateX(-10px);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  
  .title-name{
    font-family: "Rajdhani";
  }
  .image-file{
    border-radius: 50%;
    margin: 50px;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }
  .title {
    font-weight: bold;
    font-size: 16px;
  }
  </style>
