<template>
    <div class="sdtet-container">
        <h1 class="sdtet-text-align-center">Miss Vietnam of San Diego™</h1>
        <div class="mb-5">
          <img style="float: right" src="../../assets/MissVietnam_Logo.png" height="281" width="400">
          <p>The Miss Vietnam San Diego™ is established with the primary focus of elevating the Vietnamese-American female as a national symbol of beauty and pride captured internally and externally through her poise, grace, intellectual strength, and individuality.</p>
          <p>The pageant also serves to promote the Vietnamese culture by retaining the functions of the traditional dress ao dai, developing teamwork through cultural dances, and directing questions to educate the audience on the perception of culture via the eyes of Vietnamese females today. Last but definitely not least, its third purpose is to bring people together, females who participate, family and friends who watch, and all others involved in its formation, fostering a stronger sense of community.</p>
          <p>It is an opportunity to develop long-standing friendships and to interact and have fun with peers who carry a similar Vietnamese-American identity. Overall, the Miss Vietnam San Diego is a non-profit event whose only purpose is to serve the Vietnamese community. It serves to elevate the Vietnamese-American female, to promote our culture and heritage, to develop a lasting bond between people of similar identity, and to define what it means to be united. In accomplishing its goal, it can truly say, everyone is a winner.</p>
        </div>
        

        <h1 class="sdtet-text-align-center">Pageant 2018</h1>
        <v-layout id="contestants">
            <v-flex v-for="contestant in contestants" lg4>
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
                      <v-btn flat color="pink">Vote for me!</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
    
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      contestants: [
        {
          firstname: 'Diana',
          lastname: 'Pham',
          number: 1,
          school: 'UC San Diego',
          bio: 'I believe that finding unique opportunities is necessary for personal growth, and I encourage everyone to challenge themselves to continuously try new things throughout their lives.'
        },
        {
          firstname: 'Linh',
          lastname: 'Huynh',
          number: 3,
          school: 'Grossmont College',
          bio: 'Nếu may mắn được trao tặng danh hiệu hoa hậu Việt Nam San Diego, em sẽ cố gắng ngày càng hoàn thiện bản thân hơn nữa để góp phần tôn vinh vẻ đẹp của người phụ nữ Việt tại Mỹ- người phụ nữ đẹp trong một đất nước hiện đại nhưng vẫn giữ được nét đẹp truyền thống của Việt Nam ta.'
        },
        {
          firstname: 'Tiffany',
          lastname: 'Luu',
          number: 4,
          school: 'Mt. Carmel High School',
          bio: 'I wore my áo dài with pride, and saw many others do the same. Today, I have decided to participate in the pageant for young girls who were like me as a child and didn’t care about being Vietnamese. I want to show them that being Vietnamese is something to be proud of and embrace.'
        }
      ]
    }
  }
}
</script>