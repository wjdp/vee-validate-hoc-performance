<template>
  <div>
    <ul>
      <li v-for="error in errors" :key="error">{{error}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "ErrorList",
  props: ["errors"],
};
</script>
