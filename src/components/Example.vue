<template>
    <ValidationObserver ref="observer" tag="form" @submit.prevent="submit" v-slot="{errors}">
        <InputFieldValidationProvider v-model="val1" rules="required"/>
        <InputFieldValidationProvider v-model="val2" rules="required"/>
        <InputFieldValidationProvider v-model="val3" rules="required"/>
        <InputFieldValidationProvider v-model="val4" rules="required"/>
        <InputFieldValidationProvider v-model="val5" rules="required"/>
        <InputFieldValidationProvider v-model="val6" rules="required"/>
        <InputFieldValidationProvider v-model="val7" rules="required"/>
        <InputFieldValidationProvider v-model="val8" rules="required"/>
        <InputFieldValidationProvider v-model="val9" rules="required"/>
        <InputFieldValidationProvider v-model="val11" rules="required"/>
        <InputFieldValidationProvider v-model="val12" rules="required"/>
        <InputFieldValidationProvider v-model="val13" rules="required"/>
        <InputFieldValidationProvider v-model="val14" rules="required"/>
        <InputFieldValidationProvider v-model="val15" rules="required"/>
        <InputFieldValidationProvider v-model="val16" rules="required"/>
        <InputFieldValidationProvider v-model="val17" rules="required"/>
        <InputFieldValidationProvider v-model="val18" rules="required"/>
        <InputFieldValidationProvider v-model="val19" rules="required"/>

        <br>
        {{errors}}
    </ValidationObserver>
</template>

<script>
    import {ValidationObserver} from "vee-validate";
    import InputFieldValidationProvider from "./InputFieldValidationProvider";

    export default {
        name: "Example",
        components: {
            InputFieldValidationProvider,
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
