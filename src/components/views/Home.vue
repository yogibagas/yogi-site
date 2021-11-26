<template>
  <HeroSection/>
  <CardSection :cols=2 :items="portfolio"/>
</template>

<script>
import HeroSection from "./../widgets/HeroSection.vue";
import CardSection from "../widgets/PortfolioCardSection.vue"
export default {
    components : {HeroSection, CardSection},
    setup() {
    return {
      portfolio : [
        {
          name:'Algo Sea Biz',
          thumbnail: 'algo-sea-biz.jpg',
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['Digital Agency','Company Profile'],
            link: 'https://algoseabiz.com'
          }
        },
        {
          name:'One Pool Care',
          thumbnail: '1poolcare.jpg',
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['Company Profile'],
            link: 'https://1poolcare.com.au'
          }
        },
        {
          name:'Cuca Bali',
          thumbnail: 'cuca-bali.jpg',
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['Restaurant','Company Profile'],
            link: 'https://cucabali.com'
          }
        },
        {
          name:'Budhi Ayu',
          thumbnail: 'budhiayu-jewelry.jpg',
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['E-commerce','Company Profile'],
            link: 'https://budhiayujewelry.com'
          }
        },
        {
          name:'The Villasku',
          thumbnail: 'thevillasku.jpg',
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['Accomondation'],
            link: 'https://thevillasku.com'
          }
        },
      ]
    };
  },
}
</script>

<style>

</style>