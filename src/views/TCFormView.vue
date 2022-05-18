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





            <div class="countryOfResidence form-item">
                <div>Country of Residence</div>
                <select v-model="residenceCountry">
                    <option disabled value="">Please Select your Country</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Spain</option>
                </select>
            </div>





            <div class="IBANcountryCode form-item">
                <div>Country Code of your IBAN</div>
                <select v-model="ibanCode" :disabled=isDisabledResidence>
                    <option disabled value="">Please Select the first letters of your IBAN</option>
                    <template v-if="this.residenceCountry === 'France'">
                        <option v-for="ibanCodeListFranceItem in ibanCodeListFrance" :key="ibanCodeListFranceItem">{{ibanCodeListFranceItem}}</option>
                    </template>
                    <template v-if="this.residenceCountry === 'Germany'">
                        <option v-for="ibanCodeListGermanyItem in ibanCodeListGermany" :key="ibanCodeListGermanyItem">{{ibanCodeListGermanyItem}}</option>
                    </template>
                    <template v-if="this.residenceCountry === 'Italy'">
                        <option v-for="ibanCodeListItalyItem in ibanCodeListItaly" :key="ibanCodeListItalyItem">{{ibanCodeListItalyItem}}</option>
                    </template>
                    <template v-if="this.residenceCountry === 'Spain'">
                        <option v-for="ibanCodeListSpainItem in ibanCodeListSpain" :key="ibanCodeListSpainItem">{{ibanCodeListSpainItem}}</option>
                    </template>
                </select>
            </div>










            <div class="languagePreference form-item">
                <div>Prefrerred Language</div>
                <select v-model="preferredLanguage" :disabled=isDisabledIBAN>
                    <option disabled value="">Please Select your Language</option>


                    <template v-if="this.residenceCountry === 'France' && this.ibanCode === 'DE'">
                        <option v-for="preferredLanguageListFranceDEItem in preferredLanguageListFranceDE" :key="preferredLanguageListFranceDEItem">{{preferredLanguageListFranceDEItem}}</option>
                    </template>
                    <template v-if="this.residenceCountry === 'France' && this.ibanCode === 'FR'">
                        <option v-for="preferredLanguageListFranceFRItem in preferredLanguageListFranceFR" :key="preferredLanguageListFranceFRItem">{{preferredLanguageListFranceFRItem}}</option>
                    </template>


                    <template v-if="this.residenceCountry === 'Germany' && this.ibanCode === 'DE'">
                        <option v-for="preferredLanguageListGermanyDEItem in preferredLanguageListGermanyDE" :key="preferredLanguageListGermanyDEItem">{{preferredLanguageListGermanyDEItem}}</option>
                    </template>


                    <template v-if="this.residenceCountry === 'Italy' && this.ibanCode === 'DE'">
                        <option v-for="preferredLanguageListItalyDEItem in preferredLanguageListItalyDE" :key="preferredLanguageListItalyDEItem">{{preferredLanguageListItalyDEItem}}</option>
                    </template>
                    <template v-if="this.residenceCountry === 'Italy' && this.ibanCode === 'IT'">
                        <option v-for="preferredLanguageListItalyITItem in preferredLanguageListItalyIT" :key="preferredLanguageListItalyITItem">{{preferredLanguageListItalyITItem}}</option>
                    </template>


                    <template v-if="this.residenceCountry === 'Spain' && this.ibanCode === 'DE'">
                        <option v-for="preferredLanguageListSpainDEItem in preferredLanguageListSpainDE" :key="preferredLanguageListSpainDEItem">{{preferredLanguageListSpainDEItem}}</option>
                    </template>
                    <template v-if="this.residenceCountry === 'Spain' && this.ibanCode === 'ES'">
                        <option v-for="preferredLanguageListSpainESItem in preferredLanguageListSpainES" :key="preferredLanguageListSpainESItem">{{preferredLanguageListSpainESItem}}</option>
                    </template>
                    
                </select>
            </div>








        </div>
        <div class="termsAndConditionsBtn">
            <!--<router-link :to="{path: '/' + this.residenceCountry + 'Terms'}" class="nav-link btn btn-ghost">Show Terms Of Use</router-link>-->
            <router-link :to="{path: '/' + this.residenceCountry + '/' + this.ibanCode + '/' + this.preferredLanguage + 'Terms'}" class="nav-link btn btn-ghost">Show Terms Of Use</router-link>
        </div>
        </div>
    </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                ibanCodeListFrance: ['DE', 'FR'],
                ibanCodeListGermany: ['DE'],
                ibanCodeListItaly: ['DE', 'IT'],
                ibanCodeListSpain: ['DE', 'ES'],


                preferredLanguageListFranceDE: ['French'],
                preferredLanguageListFranceFR: ['English', 'French'],
                preferredLanguageListGermanyDE: ['English', 'German'],
                preferredLanguageListItalyDE: ['Italian'],
                preferredLanguageListItalyIT: ['English', 'Italian'],
                preferredLanguageListSpainDE: ['Spanish'],
                preferredLanguageListSpainES: ['English', 'Spanish'],


                residenceCountry: '',
                ibanCode: '',
                preferredLanguage: ''
            }
        },
        computed: {
            isDisabledResidence() {
                return !this.residenceCountry.localeCompare('');
            },
            isDisabledIBAN() {
                return !this.ibanCode.localeCompare('');
            },
        },
    }
</script>

<style>

.outer-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 100px;
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

.form-item {
    margin-bottom: 30px;
}

select {
    width: 70%;
}

</style>