<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card color="green">
          <v-card-title class="green darken-4 text-center">Suma numerelor</v-card-title>
          <v-card-text class="pt-2 flex-column">
             <span class="nr_span"> {{this.rand_val}}</span>
             <button @click="random_val()" class="add_val">Schimba valoarea</button>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
  export default {
    name: 'ComponentaB',
    data() {
      return {
        rand_val : this.$store.state.commonVar,
      }

    },
    methods: {
      random_val() {
        
        this.rand_val = Math.floor(Math.random()*100 * (10 - 1 + 1)) + 1;
        this.$store.state.commonVar = this.rand_val;
        console.log(this.$store.state.commonVar)
        
      },
    }
  }
</script>