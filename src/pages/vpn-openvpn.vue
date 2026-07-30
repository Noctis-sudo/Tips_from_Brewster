<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>如何打开 VPN</h1>
    <p class="description">这里以后填写教程简介</p>

    <section class="step-card">
      <h2>步骤 1</h2>
      <div class="image-placeholder">IMAGE_PLACEHOLDER_1</div>
      <p>这里以后填写步骤说明</p>
    </section>

    <section class="step-card">
      <h2>步骤 2</h2>
      <div class="image-placeholder">IMAGE_PLACEHOLDER_2</div>
      <p>这里以后填写步骤说明</p>
    </section>

    <section class="step-card">
      <h2>步骤 3</h2>
      <div class="image-placeholder">IMAGE_PLACEHOLDER_3</div>
      <p>这里以后填写步骤说明</p>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => router.back()
</script>

<style scoped>
.page {
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 30px;
  font-family: inherit;
}

.back {
  border: none;
  background: transparent;
  color: #007aff;
  font-size: 17px;
  cursor: pointer;
  padding: 0;
}

h1 {
  margin-top: 28px;
  margin-bottom: 10px;
  font-size: clamp(2.8rem, 4vw, 4.2rem);
}

.description {
  color: #666;
  font-size: 1.05rem;
  max-width: 720px;
}

.step-card {
  margin-top: 30px;
  padding: 24px;
  border-radius: 24px;
  background: #f5f5f7;
}

.step-card h2 {
  margin-top: 0;
}

.image-placeholder {
  margin: 18px 0;
  min-height: 180px;
  border-radius: 18px;
  background: #e9e9ef;
  display: grid;
  place-items: center;
  color: #666;
  font-weight: 600;
}

p {
  line-height: 1.8;
}

@media (max-width: 760px) {
  .page {
    padding: 36px 20px;
  }
}
</style>
