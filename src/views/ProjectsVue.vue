<template>
    <v-container>
      <v-card style="padding: 20px" color="#0B0A12" elevation="3">
        <div v-for="(item, index) in components" :key="index">
          <v-row>
            <v-col cols="24" md="12">
              <v-card color="#0B0A12" class="box text-center card-hover-effect" elevation="12">
                <v-card-text>
                  <div class="text-container">
                    <h6>{{ item.duration }}</h6>
                    <h4 style='font-family: "Montserrat";color:#2fbf71'>{{ item.title }}</h4>
                    <h5>{{ item.about }}</h5>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data(){
      return{
        components:[
          {techUsed:"Playwright",title:" IPL Auction ",duration:" March 2024 ",about: " The primary purpose of the project was to upgrade my power Bi skills . What did the project do?Find the insights and the buying patterns of the various teams in the IPL. How did it collected datathe raw data was taken from the Kaggle dataset which was refined and cleaned to gain the insights established relationship in the data model Created interactive report utilizing the data and showcasing it in the form of PowerBI report "},
          {techUsed:"Console Based",title:" Power BI Developer ",duration:" October 2022 ",about: "As a report developer for a leading Oil and Gas company, I created, developed, and maintained reports focused on cargo movements, uncovering valuable insights crucial to operational efficiency. Utilizing my skills in data analysis and visualization, I designed reports that provided detailed analytics and trends related to cargo logistics and movement patterns. This role required meticulous attention to detail to ensure accuracy and relevance of the data presented. By collaborating closely with stakeholders and subject matter experts, I ensured that the reports not only met but exceeded expectations, contributing directly to informed decision-making and strategic planning within the organization. "},
          {techUsed:"Selenium",title:" Developed and Maintained Monthly People Movement MIS Report ",duration:" September 2022 ",about: " As a Power BI Developer, I specialized in developing and maintaining Management Information System (MIS) reports, particularly focusing on monthly people movement data. Through this role, I gained expertise in leveraging Power BI to create insightful and visually appealing reports that provided actionable insights into organizational trends and metrics related to personnel changes. My responsibilities included data modeling, dashboard design, and ensuring data accuracy and reliability for effective decision-making"},
          {techUsed:"Logging",title:" Infosys Training ",duration:" August 2022 ",about: " During my training at Infosys, I developed a travel application using React and Java SpringBoot as part of an assessment project. This experience allowed me to deepen my skills in front-end development with React and back-end development using Java SpringBoot. I gained hands-on experience in designing and implementing features crucial to modern web applications, honing my abilities in both client-side and server-side technologies. This project not only enhanced my technical proficiency but also provided valuable insights into the software development lifecycle and collaborative project work within a professional setting."},
        ]
      }
    }
  }
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
  .card-hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover-effect:hover {
    transform: translateY(-5px) translateX(-5px);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  </style>
  