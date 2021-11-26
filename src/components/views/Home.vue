<template>
  <HeroSection/>
  <CardSection :cols=2 :items="portfolio"/>
</template>

<script>
import AlgoThumbnail from "./../../assets/portfolio/algo-sea-biz.jpg"
import PoolCareThumbnail from "./../../assets/portfolio/1poolcare.jpg"
import CucaThumbnail from "./../../assets/portfolio/cuca-bali.jpg"
import BudhiAyuThumbnail from "./../../assets/portfolio/budhiayu-jewelry.jpg"
import TheVillaskuThumbnail from "./../../assets/portfolio/thevillasku.jpg"
import HeroSection from "./../widgets/HeroSection.vue";
import CardSection from "../widgets/PortfolioCardSection.vue"

export default {
    components : {HeroSection, CardSection},
    setup() {
    return {
      portfolio : [
        {
          name:'Algo Sea Biz',
          thumbnail: AlgoThumbnail,
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['Digital Agency','Company Profile'],
            link: 'https://algoseabiz.com'
          }
        },
        {
          name:'One Pool Care',
          thumbnail: PoolCareThumbnail,
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['Company Profile'],
            link: 'https://1poolcare.com.au'
          }
        },
        {
          name:'Cuca Bali',
          thumbnail: CucaThumbnail,
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['Restaurant','Company Profile'],
            link: 'https://cucabali.com'
          }
        },
        {
          name:'Budhi Ayu',
          thumbnail: BudhiAyuThumbnail,
          portfolio : {
            stacks: ['Wordpress'],
            type: ['Web Development'],
            tags : ['E-commerce','Company Profile'],
            link: 'https://budhiayujewelry.com'
          }
        },
        {
          name:'The Villasku',
          thumbnail: TheVillaskuThumbnail,
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