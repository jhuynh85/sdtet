<template>
    <div class="sdtet-container">
        <div class="sdtet-divider"></div>
        <h1 id="vendors">Vendors</h1>
        <div class="sdtet-vendors-container">
            <v-layout>
                <v-flex>
                    <div class="sdtet-vendors-info-container">
                        <p>Dear Prospective Vendors,</p>
                        <p>Once again the Lunar New Year Festival has come! This year, we hope to bring you another fun, successful and profitable experience during our 3-day festival. Our previous vendors have made huge profits, and we would love to have you along for the ride.</p>
                        <p>With over 10 years in the running, we have become very well-known to the San Diego community as well as our neighboring cities. Our annual festival attracts well over 20,000 people of different cultures and ethnicities, making it one of the largest Lunar New Year Festivals in Southern California.</p>
                        <p>Don't hesitate to contact us if you have any questions. We'll make sure that the upcoming Lunar New Year will be an amazing experience for you.</p>
                        <p>VAYA</p>
                        <p>Questions or details?:
                            <a href="mailto:vendor@sdtet.com">vendor@sdtet.com</a>
                        </p>
                    </div>
                </v-flex>
                <v-flex class="ml-5">
                    <h2 class="mb-4">Select your booth</h2>
                    <v-layout wrap>
                        <v-flex lg6>
                            <GameCommercialBooth></GameCommercialBooth>
                        </v-flex>
                        <v-flex lg6><InfoArtBooth></InfoArtBooth></v-flex>
                        <v-flex lg6><FoodBeverageBooth></FoodBeverageBooth></v-flex>
                        <v-flex lg6><NonProfitGovBooth></NonProfitGovBooth></v-flex>                      
                        
                        
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
