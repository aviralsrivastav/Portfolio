<template>
    <main>
      <div class="contact-info" >
        <h1 class="display-1 text-center">Contact Me</h1>
        <h2 class="text-center" style="font-size: 20px;">
          You can reach out to me using the following methods:
        </h2>
        <div class="contact-methods"> 
            <h2>
          <p style="font-size: 25px; user-select: text">Email : <span style="color:#2fbf71"> aviral.works@gmail.com</span> </p>
        </h2><br>
          <div class="social-icons">
            <v-btn size="70" icon large class="mdi-icon" color="black" @click="redirectTo('https://github.com/aviralsrivastav//')">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn size="70" icon large class="mdi-icon" color="blue darken-1" @click="redirectTo('https://www.linkedin.com/in/aviral-srivastav/')">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn size="70" icon large class="mdi-icon" color="#E6700C" @click="redirectTo('https://stackoverflow.com/users/25812484/aviral-srivastav')">
              <v-icon>mdi-stack-overflow</v-icon>
            </v-btn>              
            <v-btn size="70" icon large class="mdi-icon" color="black lighten-1" @click="redirectTo('https://linktr.ee/aviral19/')">
              <v-icon>mdi-link-variant-plus</v-icon>
            </v-btn>
          </div>
        </div>
        <div>
    <v-container class="background-container">
      <v-card class="mb-4 custom-card" style="font-family: 'Rajdhani', sans-serif" elevation="24" color="#10101A">
        <v-card-title class="py-4" id="back" style="background-color: #222935;">You can send me a DM via this</v-card-title>
        <v-card-actions>
          <v-textarea v-model="currentMessage" class="custom-text-field my-10" label="Drop your message here" variant="outlined" />
        </v-card-actions>
        <v-snackbar v-model="snackbar" :timeout="timeout" rounded="pill">
          <template v-slot:activator="{ props }">
            <v-btn class="ma-2" color="primary" v-bind="props" @click="sendMessage">SEND</v-btn>
          </template>
          <span >{{ currentMessage.length >= 50 ? 'Message sent successfully' : 'Please write at least 50 characters' }}</span>
        </v-snackbar>
      </v-card>
    </v-container>
  </div>
      </div>
    </main>
  </template>
  
<script setup>
  import { ref } from 'vue';

  const currentMessage = ref('');
  const snackbar = ref(false);
  const timeout = ref(2000);

  const sendMessage = () => {
    if (currentMessage.value.trim().length >= 50) {
      // Show snackbar with success message
      snackbar.value = true;
    } else {
      // Show snackbar with message length error
      snackbar.value = true;
    }
  }
  const redirectTo = (url) => {
    window.open(url, '_blank'); // Open link in a new tab
  }
</script>
  
  <style>
  .contact-info {
    text-align: center;
  }
  
  .contact-methods {
    margin-top: 20px;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    height: 100px;
  }
  
  .mdi-icon {
    margin: -10px 20px;
    color: white;
  }
  .py-4 back{
    background-color: green;
  }
  </style>
  
