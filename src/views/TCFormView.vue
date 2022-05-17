<template>
    <div class="outer-container">
        <div class="container">
        <div>
            <div class="termsAndConditionsText">
            <h1 class="headerText">Terms & Conditions and Customer Information</h1>
            <p class="bodyText">To help us guide you to the right information, please pick your country of residence, the country code of the IBAN of your main account and the language you would prefer</p>
        </div>
        <div class="termsAndConditionsInputForm">
            <p class="formHeader">Please select from the dropdowns</p>
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
            <router-link :to="{path: '/' + this.userTypeSelected + 'Terms'}" class="nav-link btn btn-ghost">Show Terms Of Use</router-link>
        </div>
        </div>
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

.outer-container {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.container {
    margin-left: 400px;
    margin-right: 400px;
}
.headerText {
    font-size: 64px;
    font-weight: 300;
    letter-spacing: -1px;
    line-height: 70px;
}

.bodyText {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -0.2px;
    line-height: 35px;
    margin-bottom: 80px;
}

.formHeader {
    font-size: 17px;
    font-weight: 400;
    line-height: 23px;
    color: rgb(163, 171, 169);
}

.termsAndConditionsBtn {
    margin-top: 30px;;
}

.btn-ghost {
    background-color: #4A4A4A;
    color: white;
    padding: 8px 24px;
    border-radius: 50px;
    font-weight: bold;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    text-decoration: none;

}

.btn-ghost:hover {
    background-color: #FF2774;
    color: white;
}

</style>