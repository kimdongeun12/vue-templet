<template>
  <v-container>
    <div class="mb-8">
      <h3><code class="text--large">npm install easy-circular-progress --save </code></h3>
      <p><a href="https://github.com/dreambo8563/easy-circular-progress">Docs</a></p>
    </div>
    <div class="circle-wrap">
      <Progress strokeColor="#FF00AA" :value="value"
      :radius="100"
      :strokeWidth="5">
        <template>
          <b>More ColorMore ColorMore Color</b>
        </template>
      </Progress>
    </div>
  </v-container>
</template>

<script>
  import Progress from "easy-circular-progress";
  export default {
    name: 'SampleView',
    components: {
      Progress
    },
    data () {
      return {
        value : '40'
      }
    },
    mounted() {

    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
.circle-wrap {
  text-align: center;
}
</style>