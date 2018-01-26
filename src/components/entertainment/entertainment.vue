<template>
  <div class="sdtet-background-red sdtet-entertainment-container">
    <div class="sdtet-container">
      <h1 id="entertainment" class="sdtet-text-align-center">Entertainment</h1>
      <p class="sdtet-text-align-center">Would you like to be part of our entertainment program? Apply below!</p>

      <v-layout row wrap>

        <v-flex sm12 md4 lg3>
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

        <v-flex sm12 md4 lg3>
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
                  <p><br/>Download form: <a href="https://s3-us-west-1.amazonaws.com/sdtet/documents/kid's+spotlight+application+2018.pdf" target="_blank">Application</a></p>
              </div>
            </v-card-title>
            <v-card-actions>
              <!-- <v-btn flat color="orange">Share</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex sm12 md4 lg3>
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
        <v-flex sm12 md4 lg3>
          <v-card class="sdtet-entertainment-card">
            <v-card-media src="https://www.dhresource.com/260x260s/f2-albu-g4-M00-D5-64-rBVaEFn7vN-AWFitAACezY48kpQ276.jpg/christmmas-chinese-new-year-silk-piercing.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-3">Puppy Costume Contest</h3>
                <div>There will be a PRIZE for the BEST costume. This is open to everyone, so dress up your pets, come on out and join the fun! Be there on Sunday at 3:30pm!</div>
                <p><br/>Questions? Email: <a href="mailto:info@sdtet.com">info@sdtet.com</a></p>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex sm12 md4 lg3>
          <v-card class="sdtet-entertainment-card">
            <v-card-media src="https://steamykitchen.com/wp-content/uploads/2008/02/vietnamese-pho-recipe-2.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <h3 class="headline mb-3">Phở Eating Contest</h3>
              <div>Come out hungry! Let us celebrate this great symbol of Vietnamese culinary culture with an eating contest! Sign up at the stage before 5:30pm Saturday!</div>
              <p><br/>Questions? Email: <a href="mailto:info@sdtet.com">info@sdtet.com</a></p>
            </v-card-title>
          </v-card>
        </v-flex>

      </v-layout>

    </div>
  </div>
</template>
