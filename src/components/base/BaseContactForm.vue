<template>
  <div>
    <BaseInfoCard
      :space="4"
      :subtitle="subtitle"
      :title="title"
      color="primary"
    />

    <BaseTextField label="Name" />

    <BaseTextField label="Email" />

    <BaseTextField label="Subject" />

    <BaseTextarea
      class="mb-6"
      label="Your Need & Description"
    />

    <BaseBtn
      :color="!theme.current.value.dark ? 'accent' : 'white'"
      href="https://mail.google.com/mail/?view=cm&fs=1&to=ismir2025@gmail.com"
      target="_blank"
      outlined
    >
      Send message
    </BaseBtn>
  </div>
</template>

<script setup>
import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseTextField from '@/components/base/BaseTextField.vue'
import BaseInfoCard from '@/components/base/BaseInfoCard.vue'
import { defineProps} from 'vue';
import { useTheme } from 'vuetify';
  const theme = useTheme()

  defineProps({
    subtitle: String,
    title: {
      type: String,
      default: 'MAIL US YOUR MESSAGE',
    },
  })
</script>
