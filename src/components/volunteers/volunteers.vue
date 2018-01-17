<template>
  <div id="sdtet-volunteers-section" class="sdtet-container">
    <div class="sdtet-divider"></div>
    <div class="ml-5 mr-5">
      <v-layout row wrap>
        <v-flex xs12 md6 order-md2>
          <h1 id="volunteers">Volunteers</h1>
          <p>
            <strong>We are currently looking for volunteers!</strong>
          </p>
          <div>
            <p>We are looking for friendly, helpful, reliable volunteers to help with
              this exciting festival. Our festival will be filled with people of
              all ages. If you were at the festival last year, then you have a general
              idea of how big it will be this year and how much fun everyone will
              have. If you didn't attend the festival last year, then here is an
              opportunity for you to come and help make this upcoming festival even
              bigger and better!
            </p>
            <p>If you have any special needs or represent a group or individual with
              special needs, please contact us. Not all volunteer jobs are appropriate
              for all people.
            </p>
            <p>We need volunteers to help us run the festival! We have open shifts!</p>
            <p>-VAYA (For more info email us at
              <a href="mailto:volunteer@sdtet.com ">volunteer@sdtet.com</a>)</p>
          </div>
        </v-flex>
        <v-flex xs12 md6>
          <div class="sdtet-volunteers-forms-container sdtet-text-align-center">
            <!-- <p><span class="navy"><b>Signups are closed!</b></span></p> -->
            <div class="sdtet-h1-spacer">
              <h1>&nbsp;</h1>
            </div>
            <p>
              <span class="sdtet-text-red-bold">Signup or view our open shifts by clicking SIGN UP NOW below!</span>
            </p>
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdzg7U6v0FZ-BhVJlcWHFHlh7yaQ5F2BUobbzqLF2FqaUMG2g/viewform">
              <v-btn round color="teal" dark>Sign up now!</v-btn>
            </a>
            <br>
            <br>
            <v-layout row>
              <v-flex md6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text sdtet-volunteers-form-1" flat
                  color="teal" target="_blank" href="./static/download/Release-of-Liability.pdf">
                  <div class="sdtet-text-align-center">
                    <img src="../../assets/Volunteer.svg" alt="Consent and Release of Liability Form">
                    <br/>
                    <strong>required:</strong>
                    <br/> Consent & Release
                    <br/> of Liability Form
                  </div>
                </v-btn>
              </v-flex>
              <v-flex md6>
                <div>
                  <v-btn class="sdtet-button-flat-button sdtet-wrap-text sdtet-volunteers-form-2" flat
                    color="teal" target="_blank" href="./static/download/hours_verification.pdf">
                    <div class="sdtet-text-align-center sdtet-form-text">
                      <img src="../../assets/Volunteer.svg" alt="Hours Verification form">
                      <br/>
                      <strong>optional: </strong>
                      <br/> Hours Verification
                      <br/> Form
                    </div>
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </div>
          <br>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
