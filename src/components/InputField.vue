<template>
  <div>
    <Label>Input</Label>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
    <ErrorList :errors="errors"/>
  </div>
</template>

<script>
import Label from "./Label.vue"
import ErrorList from "./ErrorList.vue"

export default {
  name: "InputField",
  props: ["value", "errors"],
  components: {Label, ErrorList}
};
</script>
