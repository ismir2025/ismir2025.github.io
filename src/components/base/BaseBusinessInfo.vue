<template>
  <v-theme-provider :theme="dark? 'dark': 'light'">
    <div>
      <BaseInfoCard
        pace="6"
        title="KEEP IN TOUCH WITH US"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.
      </BaseInfoCard>

      <BaseBusinessContact :dark="dark" dense />
    </div>
  </v-theme-provider>
</template>

<script setup>
import BaseInfoCard from '@/components/base/BaseInfoCard.vue'
import BaseBusinessContact from '@/components/base/BaseBusinessContact.vue'
import { defineProps} from 'vue';

  defineProps({
    dark: {
      type: Boolean,
      default: false,
    },
  })

</script>
