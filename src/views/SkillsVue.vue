
<template>
    <div v-show="showProgress"><v-progress-linear color="purple-accent-4" height="1" indeterminate></v-progress-linear></div>
    <v-container>
      <h2 class="display-1 text-center">S K I L L S</h2><br>
      <br><br>
      <v-row>
        <v-col cols="6" md="6">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-icon color="#2fbf71" size="large" class="my-icon">mdi-finance </v-icon>
            <br><v-car-text style="color:#3e4455;font-family:'Calibri'">Power BI</v-car-text>
            <v-container>
              <v-progress-linear color="purple-accent-4" height="2" model-value="63" ></v-progress-linear>
            </v-container>
            <v-card-text>Object-oriented programming is a programming paradigm based on the concept of objects, which can contain data and code: data in the form of fields, and code in the form of procedures</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" md="6">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-icon color="#2fbf71" size="large" class="my-icon">mdi-warehouse </v-icon>
            <br><v-car-text style="color:#3e4455;font-family:'Calibri'">Data WareHouse</v-car-text>
            <v-container>
              <v-progress-linear color="purple-accent-4" height="2" model-value="59" ></v-progress-linear>
            </v-container>
            <v-card-text>The Internet of things describes devices with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="6">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-icon color="#2fbf71" size="large" class="my-icon">mdi-database-search </v-icon>
            <br><v-car-text style="color:#3e4455;font-family:'Calibri'">SQL</v-car-text>
            <v-container>
              <v-progress-linear color="purple-accent-4" height="3" model-value="99" ></v-progress-linear>
            </v-container>
            <v-card-text>The practice or skill of typing using all one's fingers and without looking at the keys</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" md="6">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-icon color="#2fbf71" size="large" class="my-icon">mdi-laravel </v-icon>
            <br><v-car-text style="color:#3e4455;font-family:'Calibri'">DATA BRICKS</v-car-text>
            <v-container>
              <v-progress-linear color="purple-accent-4" height="3" model-value="75" ></v-progress-linear>
            </v-container>
            <v-card-text>A fundamental part of Computer Science that teaches you how to think and solve complex problems systematically</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="6">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-icon color="#2fbf71" size="large" class="my-icon">mdi-git </v-icon>
            <br><v-car-text style="color:#3e4455;font-family:'Calibri'">Git</v-car-text>
            <v-container>
              <v-progress-linear color="purple-accent-4" height="2" model-value="90" ></v-progress-linear>
            </v-container>
            <v-card-text>A set of cognitive productive and counterproductive automatic habitual thoughts that affects one's ability to think in a manner that solves problems</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" md="6">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-icon color="#2fbf71" size="large" class="my-icon">mdi-database </v-icon>
            <br><v-car-text style="color:#3e4455;font-family:'Calibri'">Data visualization</v-car-text>
            <v-container>
              <v-progress-linear color="purple-accent-4" height="2" model-value="68" ></v-progress-linear>
            </v-container>
            <v-card-text>Database Management Systems (DBMS) are software systems used to store, retrieve, and run queries on data</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="6">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-icon color="#2fbf71" size="large" class="my-icon">mdi-react </v-icon>
            <br><v-car-text style="color:#3e4455;font-family:'Calibri'">ReactJS</v-car-text>
            <v-container>
              <v-progress-linear color="purple-accent-4" height="3" model-value="78" ></v-progress-linear>
            </v-container>
            <v-card-text>A text-based interface where you can input commands that interact with a computer's operating system</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" md="6">
          <v-card color="#0B0A12"  class="box text-center card-hover-effect" elevation="12">
            <v-icon color="#2fbf71" size="large" class="my-icon">mdi-language-javascript </v-icon>
            <br><v-car-text style="color:#3e4455;font-family:'Calibri'">Javascript</v-car-text>
            <v-container>
              <v-progress-linear color="purple-accent-4" height="3" model-value="88" ></v-progress-linear>
            </v-container>
            <v-card-text>Design and Analysis of Algorithms is a fundamental aspect of computer science that involves creating efficient solutions to computational problems and evaluating their performance</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <v-divider color="blue"></v-divider>
    </v-container>
  </template>
  
  
  
  <script>
    import { shallowRef } from 'vue'
    export default {
      data() {
        return {
          showProgress:true,
          frameworks : [
            {title:"Python",icon:"mdi-language-python",value:"",text:""},
            {title:"Django",icon:"",value:"",text:""},
            {title:"Javascript",icon:"mdi-language-javascript",value:"",text:""},
            {title:"Vue JS",icon:"mdi-vuejs",value:"",text:""},
            {title:"MySQL",icon:"mdi-database-search",value:"",text:""},
  
          ]
        };
      },
      mounted() {
        // Start a timer to hide the progress bar after 5 seconds
        setTimeout(() => {
          this.showProgress = false;
        }, 5400);
      },
    };
  
    const date = shallowRef()
  </script>
  
  <style scoped>
  .my-icon{
    margin : 20px ;
    font-size: 3em;
  }
  .card-hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover-effect:hover {
    transform: translateY(-10px) translateX(-10px);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  </style>