<template>
  <BaseSection
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <BaseBusinessInfo>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate.
          </BaseBusinessInfo>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <BaseContactForm title="MAIL US YOUR MESSAGE" />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/base/BaseSection.vue'
import BaseBusinessInfo from '@/components/base/BaseBusinessInfo.vue'
import BaseContactForm from '@/components/base/BaseContactForm.vue'
</script>
