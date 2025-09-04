<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="custom-table">
          <!-- 테이블 본문 -->
          <v-row v-for="item in items" :key="item.content" class="table-row">
            <!-- Content column -->
            <v-col cols="12" sm="7" md="4">
              {{ item.content }}
            </v-col>

            <!-- Date column -->
            <v-col cols="12" sm="5" md="8" class="text-right">
              {{ item.date }}
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.custom-table {
  width: 100%;
  border-collapse: separate;
}

.table-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #e0e0e0;
}

.row-content {
  flex: 2;
  font-size: 1.2rem;
  color: #424242;
}

.row-date {
  flex: 1;
  font-size: 1rem;
  color: #757575;
  font-style: italic;
}
</style>
