<template>
  <v-app>
    <nav>
      <router-link to="/A">Componenta A</router-link>
      <router-link to="/B">Componenta B</router-link>
    </nav>
    <router-view/>
  </v-app>
</template>
<style>
  #app{
    height: 100%;
    background: #70c59d;
  }
  .flex-column{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .v-card__title.green.darken-4.text-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input_style{
    background: #FFF;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    margin-bottom: 16px;
    padding: 0 15px;
  } 
  button.add_val {
    height: 40px;
    width: auto;
    padding: 0 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    border: none;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    border-radius: 6px;
  }
  span.nr_span {
    color: #FFF;
    font-size: 16px;
    line-height: 18px;
    margin: 10px 0;
} 
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
}
nav a {
    margin: 0 10px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
}
</style> 
<script>
export default {
  name: 'App',

  

  data: () => ({
    //
  }),
};
</script>
 