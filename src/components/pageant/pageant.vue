<template>
    <div class="sdtet-container">
        <h1 id="pageant" class="sdtet-text-align-center">Miss Vietnam of San Diego™</h1>
        <div class="ml-5 mr-5">
          <img style="float: right" src="../../assets/MissVietnam_Logo.png">
          <p>The Miss Vietnam San Diego™ is established with the primary focus of elevating the Vietnamese-American female as a national symbol of beauty and pride captured internally and externally through her poise, grace, intellectual strength, and individuality.</p>
          <p>The pageant also serves to promote the Vietnamese culture by retaining the functions of the traditional dress ao dai, developing teamwork through cultural dances, and directing questions to educate the audience on the perception of culture via the eyes of Vietnamese females today. Last but definitely not least, its third purpose is to bring people together, females who participate, family and friends who watch, and all others involved in its formation, fostering a stronger sense of community.</p>
          <p>It is an opportunity to develop long-standing friendships and to interact and have fun with peers who carry a similar Vietnamese-American identity. Overall, the Miss Vietnam San Diego is a non-profit event whose only purpose is to serve the Vietnamese community. It serves to elevate the Vietnamese-American female, to promote our culture and heritage, to develop a lasting bond between people of similar identity, and to define what it means to be united. In accomplishing its goal, it can truly say, everyone is a winner.</p>
        </div>
        
        <h1 class="sdtet-text-align-center">Pageant 2018</h1>
        <v-container mb-4>
          <v-layout id="contestants" row wrap>
              <v-flex v-for="contestant in contestants" :key="contestant.id" xs12 sm6 md4 lg4>
                  <v-card height="500px" class="sdtet-entertainment-card">
                      <v-card-media src="http://placehold.it/300x200" height="200px">
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-3">{{contestant.number}}. {{contestant.firstname}} {{contestant.lastname}}</h3>
                          <p>{{contestant.school}}</p>
                          <p>{{contestant.bio}}</p>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <!-- <v-btn flat color="pink">Vote for me!</v-btn> -->
                      </v-card-actions>
                  </v-card>
              </v-flex>
          </v-layout>
        </v-container>
    </div>
    
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      contestants: [
        {
          firstname: 'Angie',
          lastname: 'Hoang',
          number: 0,
          school: '',
          bio: ''
        },
        {
          firstname: 'Nikki',
          lastname: 'Luu',
          number: 0,
          school: '',
          bio: ''
        },
        {
          firstname: 'Julia',
          lastname: 'Ta',
          number: 0,
          school: '',
          bio: ''
        },
        {
          firstname: 'Elizabeth',
          lastname: 'Do',
          number: 0,
          school: '',
          bio: ''
        },
        {
          firstname: 'Carolynne ',
          lastname: 'Vo',
          number: 0,
          school: '',
          bio: ''
        },
        {
          firstname: 'Duyen (Amy)',
          lastname: 'Vo',
          number: 0,
          school: '',
          bio: ''
        },
        {
          firstname: 'Julia ',
          lastname: 'Nguyen',
          number: 0,
          school: '',
          bio: ''
        },
        {
          firstname: 'Jacqueline ',
          lastname: 'Nguyen',
          number: 0,
          school: '',
          bio: ''
        },
        {
          firstname: 'Ca',
          lastname: 'Pham',
          number: 0,
          school: '',
          bio: ''
        }
      ]
    }
  }
}
</script>