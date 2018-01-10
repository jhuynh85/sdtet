<template>
	<div id="sdtet-vendors-section" class="sdtet-container">
		<div class="sdtet-divider"></div>
		<div class="ml-5 mr-5">
			<v-layout row wrap>
				<v-flex xs12 md6 lg6>
					<h1>Vendors</h1>
					<p>Dear Prospective Vendors,</p>
					<p>Once again the Lunar New Year Festival has come! This year, we hope to bring you another fun, successful and profitable experience during our 3-day festival. Our previous vendors have made huge profits, and we would love to have you along for the ride.</p>
					<p>With over 10 years in the running, we have become very well-known to the San Diego community as well as our neighboring cities. Our annual festival attracts well over 20,000 people of different cultures and ethnicities, making it one of the largest Lunar New Year Festivals in Southern California.</p>
					<p>Don't hesitate to contact us if you have any questions. We'll make sure that the upcoming Lunar New Year will be an amazing experience for you.</p>
					<p>VAYA</p>
					<p>Questions or details?:
							<a href="mailto:vendor@sdtet.com">vendor@sdtet.com</a>
					</p>
				</v-flex>
				<v-flex xs12 md6 lg6 class="sdtet-text-align-center">
					<div class="sdtet-h1-spacer"><h1>&nbsp;</h1></div>
					<h2>Select your booth</h2>
					<v-layout row wrap justify-space-around>
						<v-flex xs6 sm6 lg6><GameCommercialBooth></GameCommercialBooth></v-flex>
						<v-flex xs6 sm6 lg6><InfoArtBooth></InfoArtBooth></v-flex>
						<v-flex xs6 sm6 lg6><FoodBeverageBooth></FoodBeverageBooth></v-flex>
						<v-flex xs6 sm6 lg6><NonProfitGovBooth></NonProfitGovBooth></v-flex>                     
					</v-layout>
				</v-flex>
			</v-layout>
		</div>
	</div>
</template>

<script type="text/javascript">
import GameCommercialBooth from './types/game-commercial-booth'
import InfoArtBooth from './types/info-art-booth'
import FoodBeverageBooth from './types/food-beverage'
import NonProfitGovBooth from './types/non-profit-gov'

export default {
  data () {
    return {
      dialog: false
    }
  },
  components: {
    GameCommercialBooth,
    InfoArtBooth,
    FoodBeverageBooth,
    NonProfitGovBooth
  }
}
</script>
