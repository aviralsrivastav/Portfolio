<template>
  <main>
    <br><br>
    <v-container fluid class="container">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-avatar size="575">
            <img class="profile-image" src="/gojo.jpg" alt="Profile Picture">
          </v-avatar>
        </v-col>
        <v-col cols="12" md="6">
          <div class="profile-text">
            <h2>Welcome to My Website!</h2>
            <p>Here you can find all the information about me and my work.</p>
            <br><br>
            <h4>Here is my <a href="public\Resume.pdf" style="text-decoration:none" download>Resume</a> for you to checkout !</h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.container{
  font-family: "Montserrat", sans-serif;
}

.profile-image {
  object-fit: cover; /* Ensure the image covers the entire circular container */
  object-position: center; /* Center the image within the container */
}
.profile-image {
  width: 600px; /* Adjust size as needed */
  height: 550px; /* Adjust size as needed */
  border-radius: 50%; /* Makes the image circular */
  margin: 100px; /* Add some space between image and text */
}
</style>
