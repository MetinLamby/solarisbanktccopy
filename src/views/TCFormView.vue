<template>
    <div class="container">
        <div class="termsAndConditionsText">
            <h1>Terms and Conditions Form</h1>
            <h3>To help us guide you to the right information, please pick your country of residence, the country code of the IBAN of your main account and the language you would prefer</h3>
        </div>
        <div class="termsAndConditionsInputForm">
            <div class="countryOfResidence">
                <div>User Type: {{ userTypeSelected }}</div>
                <select v-model="userTypeSelected">
                    <option disabled value="">Please Select which Type of User you are</option>
                    <option>Issuer</option>
                    <option>Investor</option>
                </select>
            </div>
        </div>
        <div class="termsAndConditionsBtn">
            <router-link :to="{path: '/' + this.userTypeSelected + 'Terms'}" class="nav-link">Show Terms Of Use</router-link>
        </div>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        userTypeSelected: ''
      }
    }
  }
</script>

<style>
.container {
    margin-left: 200px;
    margin-right: 200px;
}
</style>