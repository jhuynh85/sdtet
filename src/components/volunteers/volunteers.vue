<template>
  <div class="sdtet-container ml-5 mr-5">
    <div class="sdtet-schedule-divider"></div>
    <v-layout row wrap>
      <v-flex xs12 md6 order-md2>
        <div class="sdtet-volunteers-info">
          <h1>Volunteers</h1>
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
              <a href="mailto:vendor@sdtet.com">vendor@sdtet.com</a>)</p>
          </div>
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
            <v-btn round outline color="primary" dark>Sign up now!</v-btn>
          </a>
          <br>
          <br>
          <v-layout row>
            <v-flex md6>
              <div class="sdtet-volunteers-form-1">
                <a target="_blank" href="./static/download/Release-of-Liability.pdf">
                  <img src="../../assets/Volunteer Form.svg" alt="Consent and Release of Liability Form">
                  <p>
                    <strong>REQUIRED:</strong>
                    <br> Consent and Release of Liability Form
                  </p>
                </a>
              </div>
            </v-flex>
            <v-flex md6>
              <div class="sdtet-volunteers-form-2">
                <a target="_blank" href="./static/download/hours_verification.pdf">
                  <img src="../../assets/Volunteer Form.svg" alt="Hours Verification form">
                  <p>
                    <strong>OPTIONAL:</strong>
                    <br> Hours Verification Form
                  </p>
                </a>
              </div>
            </v-flex>
          </v-layout>
        </div>
        <br>
      </v-flex>
    </v-layout>
  </div>
</template>
