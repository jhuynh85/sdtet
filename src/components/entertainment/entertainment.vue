<template>
<v-parallax  height="800px" src="/static/images/tet-bg-02.jpg">
  <div class="sdtet-entertainment-container">
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
              why not bring yourselves to our stage and wow us for the new year!</div>
              <p><br/>Check out the competition at <b>Main Stage - Friday Feb 16 at 8:00pm!</b></p>
            </v-card-title>
            <v-card-actions>
              <v-btn v-if="stepUpDanceTimeLeft > 0" href="https://goo.gl/forms/874ic4FuKK4LEUMC3" target="_blank" block outline round color="teal" dark>Sign up! {{stepUpDanceTimeLeft}} days left!</v-btn>
              
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
                  <p><br/>See the kids at <b>Cultural Village - Sunday Feb 18 at 1:00pm!</b></p>
                  <!-- <p><br/>Download form: <a href="https://s3-us-west-1.amazonaws.com/sdtet/documents/kid's+spotlight+application+2018.pdf" target="_blank">Application</a></p> -->
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
                <p><br/>Cheer on the singers at <b>Main Stage - Sunday Feb 18 at 1:00pm!</b></p>
              </div>
            </v-card-title>
            <v-card-actions>
              <!-- <v-btn href="https://goo.gl/forms/4A92bduNRSC9pddo2" target="_blank" block outline round color="teal" dark>Sign up!</v-btn> -->
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
                <div>Contest will be held <b>Sunday Feb 18 at 3:30PM at Cultural Village</b>. Signups begin at 2:30PM at the Cultural Village Desk. Dogs <b>must be on a leash</b>.</div>
                <p><br/>Please download and sign the waiver - <a href="https://s3-us-west-1.amazonaws.com/sdtet/documents/Dog+Costume+Contest+Waiver.pdf" target="_blank">Waiver Form</a></p>
                <p>Questions? Email: <a href="mailto:info@sdtet.com">info@sdtet.com</a></p>
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
              <div>Come out hungry! Let us celebrate this great symbol of Vietnamese culinary culture with an eating contest! <b>Sign up at the Cultural Village at 4:30PM before the contest at 5:30pm Saturday Feb 17!</b></div>
              <p><br/>Please download and sign the waiver - <a href="https://s3-us-west-1.amazonaws.com/sdtet/documents/Eating+Contest+Waiver.pdf" target="_blank">Waiver Form</a></p>
            </v-card-title>
          </v-card>
        </v-flex>

      </v-layout>

    </div>
  </div>
</v-parallax>
</template>

<script type="text/javascript">
  export default{
    data () {
      return {
        stepUpDanceTimeLeft: 0
      }
    },
    created () {
      var moment = require('moment')
      var eventdate = moment('2018-02-05')
      var todaysdate = moment()
      this.stepUpDanceTimeLeft = eventdate.diff(todaysdate, 'days')
    }
  }
</script>