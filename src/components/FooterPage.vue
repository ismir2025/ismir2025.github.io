<template>
  <v-footer
    id="home-footer"
    color="#004191"
    height="auto"
    :padless="true"
    class="pa-4"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="text-white pa-1 pa-md-0">
            Korean Society For Music Informatics<br />
            Business No.:207-82-72979 l President : Juhan Nam<br />
            1103-131, 57, Eoeun-ro, Yuseong-gu, Daejeon 34140, Republic of Korea<br /><br />

            
            Secretariat of ISMIR 2025<br />
            #804-1, 8F, 303, Bugyuseong-daero, Yuseong-gu, Daejeon 34068, Republic of Korea<br />
            +82-42-489-7070 l E-mail: ismir.korea@themiceter.com
          </div>
        </v-col>

        <v-col class="text-center text-md-right" cols="12" md="6">
          <div>Copyright &copy; ISMIR 2025 Conference Organizing Committee</div>
          <div class="mt-2">
            <!-- public 폴더에 있는 PDF이므로 /경로 로 참조 -->
            <a
              href="/Terms & Conditions_ISMIR2025.pdf"
              download
              class="mx-1 text-white"
            >
              Terms & Conditions
            </a>
            |
            <a
              href="/Privacy Policy_ISMIR2025.pdf"
              download
              class="mx-1 text-white"
            >
              Private Policy
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup></script>

<style lang="scss">
#home-footer {
  width: 100%;
  height: auto;
  position: relative;
  bottom: 0;
  margin-top: auto;
}

#home-footer a {
  text-decoration: none;
}

body {
  padding-bottom: 0;
}
</style>
