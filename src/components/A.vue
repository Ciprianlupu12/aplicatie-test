<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card color="green">
          <v-card-title class="green darken-4 text-center">Completati campurile cu 2 numere</v-card-title>
          <v-card-text class="pt-2 flex-column">
             <input color="white" type="number" placeholder="Nr1" v-model="value1" class="input_style">
             <input color="white" type="number" placeholder="Nr2" v-model="value2" class="input_style">
             <button @click="add_val()" class="add_val">Aduna numerele</button>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
  export default {
    name: 'ComponentaA',
    data() {
      return {
        value1:'',
        value2: '',
      }

    },
    methods: {
      add_val() {
        if(this.value1 != '' && this.value2 != '')
        {
           this.$store.state.commonVar = parseInt(this.value1) + parseInt(this.value2);
        }
        else{
          alert('Completati spatiile cu numerele dorite!');
        }
        console.log( this.$store.state.commonVar);
      },
    }
  }
</script>