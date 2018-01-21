<template>
  <div id="sdtet-sponsors-section" class="sdtet-container">
    <div class="sdtet-divider"></div>
    <div class="ml-5 mr-5 mb-5">
      <v-layout row wrap>
        <v-flex xs12 md5 lg5>
          <h1 id="sponsors">Sponsors</h1>
          <p>
            <b>The Sponsorship Application: </b>
            <a target="_blank" href="https://s3-us-west-1.amazonaws.com/sdtet/documents/VAYA_Sponsorship_2018_v8.pdf">download</a>
          </p>
          <p>
            <b>Questions or details?: </b>
            <a href="mailto:sponsor@sdtet.com">sponsor@sdtet.com</a>
          </p>
          <p>Dear Sponsors and Exhibitors,</p>
          <p>For 11 years, VAYA has organized the Tết Festival, the largest Vietnamese
            New Year event in San Diego and the second largest event of its kind
            in Southern California. The Festival is one of the most anticipated annual
            events for the Vietnamese community in San Diego. Highlights of the festival
            include the Lion Dances, Miss Vietnam San Diego Pageant, Golden Voice
            singing competition, the Cultural Village and various other performances.</p>
          <p>This is a great opportunity for your business or organization to establish
            an on-going presence in the Vietnamese community, introduce new products
            or services and to tie non-profit investment strategy to your business
            development plan. On average, our festival attracts more than 25,000
            people each year.</p>
          <p>Below are benefits of supporting the San Diego Tết Festival:
            <ul>
              <li>Increase your company’s visibility </li>
              <li>Promote your company’s products and/or services </li>
              <li>Explore new business ventures </li>
              <li>Reinforce your commitment and support of the Vietnamese community</li>
              <li>Celebrate the Vietnamese New Year</li>
            </ul>
          </p>
          <p>On behalf of VAYA, we would like to invite your company to take part in
            celebrating the diversity of San Diego by pledging your support. Please
            feel free to contact us should you have any further inquiries about our
            festival.</p>
          <p>VAYA</p>
        </v-flex>

        <v-flex xs12 md7 lg7 class="sdtet-text-align-center">
          <h1 class="sdtet-h1-spacer">&nbsp;</h1>
          <h2>Thank you 2018 Sponsors!</h2>
          <v-layout class="sdtet-sponsors-logos-container" row wrap justify-space-around>
            <a v-for="sponsor in sponsors" :key="sponsor.id" :href="sponsor.url" target="_blank">
              <img class="ma-3" :src="sponsor.logo_image_link">
            </a>
          </v-layout>
        </v-flex>

      </v-layout>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'

  export default {
    data () {
      return {
        sponsors: []
      }
    },
    created () {
      axios.get('https://cors.now.sh/http://admin.sdtet.com/php_file/get_sponsors.php')
        .then(response => {
          // JSON responses are automatically parsed.
          this.sponsors = response.data
          console.log('Sponsors: ', response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
</script>
