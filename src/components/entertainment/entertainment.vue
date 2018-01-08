<template>
  <div class="sdtet-background-red sdtet-entertainment-container">
    <div class="sdtet-container">
      <h1 id="entertainment" class="sdtet-text-align-center">Entertainment</h1>
      <p class="sdtet-text-align-center">Would you like to be part of our entertainment program? Apply below!</p>

      <v-layout row wrap>

        <v-flex sm12 md4 lg4>
          <v-card class="sdtet-entertainment-card">
            <v-card-media src="../../../static/images/StepUpDance.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <h3 class="headline mb-3">Step Up Dance Competition</h3>
							<div>Do you love dancing? If you have an up and coming team or a new choreography to try,
              why not bring yourselves to our state and wow us for the new year!</div>
            </v-card-title>
            <v-card-actions>
              <v-btn href="https://goo.gl/forms/874ic4FuKK4LEUMC3" target="_blank" block outline round color="teal" dark>Sign up!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex sm12 md4 lg4>
          <v-card class="sdtet-entertainment-card">
            <v-card-media src="../../../static/images/KidsSpotlight.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-3">Kid's Spotlight</h3>
                <div>While the new year is a celebration for everyone, we know that it
                  is the most enjoyable for the youth! It is probably one of the
                  few times a year that they are able to learn about their culture
                  in a fun and exciting way!</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <!-- <v-btn flat color="orange">Share</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex sm12 md4 lg4>
          <v-card class="sdtet-entertainment-card">
            <v-card-media src="../../../static/images/GoldenVoice.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-3">Golden Voice</h3>
                <div>Do you love singing? We do! Kareoke is basically in our blood! For
                  the new year, we would love to listen to you perform your favorite
                  songs on stage!</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn href="https://goo.gl/forms/4A92bduNRSC9pddo2" target="_blank" block outline round color="teal" dark>Sign up!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>

    </div>
  </div>
</template>
