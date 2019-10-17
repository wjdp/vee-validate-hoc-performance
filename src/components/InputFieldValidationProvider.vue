<template>
    <ValidationProvider :rules="rules" v-slot="{errors, invalid, required}">
        <InputField :value="value"
                    @input="$emit('input', $event)"
                    :errors="errors"
                    :invalid="invalid"
                    :required="required"/>
    </ValidationProvider>
</template>

<script>
    import {ValidationProvider} from "vee-validate"
    import InputField from "./InputField";

    export default {
        name: "InputFieldValidationProvider",
        props: ["rules", "value"],
        components: {ValidationProvider, InputField}
    };
</script>
