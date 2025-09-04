<template>
  <v-theme-provider :theme="dark? 'dark': 'light'">
    <BaseInfoCard
      :title="title"
      color="primary"
    >
      <slot />
    </BaseInfoCard>

    <template v-for="({ icon, text, html, title: t }, i) in business" :key="i">
      <BaseAvatarCard
        :html="html"
        :icon="icon"
        :outlined="false"
        :text="text"
        :title="!dense ? t : undefined"
        space="0"
        dark
        horizontal
      />

      <v-divider
        v-if="i + 1 !== business.length"
        :key="`divider-${i}`"
        class="my-2"
      />
    </template>
  </v-theme-provider>
</template>

<script setup>
import BaseInfoCard from '@/components/base/BaseInfoCard.vue'
import BaseAvatarCard from '@/components/base/BaseAvatarCard.vue'
import { defineProps,ref} from 'vue';

  defineProps({
    dark: Boolean,
    dense: Boolean,
    title: String,
  })

  const business = ref([
    {
      icon: 'mdi-map-marker-outline',
      title: 'Address',
      text: 'Korea Advanced Institute of Science and Technology (KAIST), 291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea.',
      html: 'Korea Advanced Institute of Science and Technology (KAIST),<br>291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea.',
    },
    {
      icon: 'mdi-cellphone',
      title: 'Phone',
      text: '042-350-2926',
      html: '042-350-2926<br>042-350-2926',
    },
    {
      icon: 'mdi-email',
      title: 'Email',
      text: 'ismir2025@gmail.com',
      html: 'ismir2025@gmail.com<br>ismir2025@gmail.com',
    },
  ])
</script>
