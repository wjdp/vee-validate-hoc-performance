<template>
    <ValidationObserver ref="observer" tag="form" @submit.prevent="submit" v-slot="{errors}">
        <InputFieldWithValidation v-model="val1" rules="required"/>
        <InputFieldWithValidation v-model="val2" rules="required"/>
        <InputFieldWithValidation v-model="val3" rules="required"/>
        <InputFieldWithValidation v-model="val4" rules="required"/>
        <InputFieldWithValidation v-model="val5" rules="required"/>
        <InputFieldWithValidation v-model="val6" rules="required"/>
        <InputFieldWithValidation v-model="val7" rules="required"/>
        <InputFieldWithValidation v-model="val8" rules="required"/>
        <InputFieldWithValidation v-model="val9" rules="required"/>
        <InputFieldWithValidation v-model="val11" rules="required"/>
        <InputFieldWithValidation v-model="val12" rules="required"/>
        <InputFieldWithValidation v-model="val13" rules="required"/>
        <InputFieldWithValidation v-model="val14" rules="required"/>
        <InputFieldWithValidation v-model="val15" rules="required"/>
        <InputFieldWithValidation v-model="val16" rules="required"/>
        <InputFieldWithValidation v-model="val17" rules="required"/>
        <InputFieldWithValidation v-model="val18" rules="required"/>
        <InputFieldWithValidation v-model="val19" rules="required"/>

        <br>
        {{errors}}
    </ValidationObserver>
</template>

<script>
    import {ValidationObserver, withValidation} from "vee-validate";
    import InputField from "./InputField";

    function getContext(ctx) {
        // eslint-disable-next-line no-console
        // console.log(ctx);
        return {
            errors: ctx.errors,
            invalid: ctx.invalid,
            required: ctx.required
        };
    }

    const InputFieldWithValidation = withValidation(InputField, getContext);

    export default {
        name: "Example",
        components: {
            InputFieldWithValidation,
            ValidationObserver
        },
        data: () => ({
            val1: "",
            val2: "",
            val3: "",
            val4: "",
            val5: "",
            val6: "",
            val7: "",
            val8: "",
            val9: "",
            val11: "",
            val12: "",
            val13: "",
            val14: "",
            val15: "",
            val16: "",
            val17: "",
            val18: "",
            val19: "",
        })
    };
</script>


<style>
.field {
    margin-bottom: 10px;
}

.form {
    margin-top: 20px;
}

span {
    display: block;
    margin-top: 3px;
}
</style>
