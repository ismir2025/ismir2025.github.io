<template>
  <v-theme-provider :theme="dark? 'dark': 'light'">


    <BaseTitle
      size="text-body-1"
      space="4"
      title="MULTI-PURPOSE THEME"
      weight="regular"
    />

    <BaseBody>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.
    </BaseBody>

    <BaseBtn
      class="mb-12"
      color="white"
      outlined
    >
      More Info
    </BaseBtn>
  </v-theme-provider>
</template>

<script setup>

  defineProps({
    title: String,
    dark: {
      type: Boolean,
      default: false,
    },
  })

  const business = ref([
    {
      icon: 'mdi-map-marker-outline',
      title: 'Address',
      text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
    },
    {
      icon: 'mdi-cellphone',
      title: 'Phone',
      text: '01 (800) 433 744<br>01 (800) 433 633',
    },
    {
      icon: 'mdi-email',
      title: 'Email',
      text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
    },
  ])
</script>
