<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>如何切换VPN节点（地区）</h1>

    <section class="step-card">
      <h2>1. 点击此处切换节点</h2>
      <img src="/resources/iPhone/vpn/2.png" alt="region" />
      <p>⚠️香港地区不支持使用ChatGPT</p>
      <p>节点距离越近速度越快，优选台湾</p>
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

p {
  line-height: 1.8;
}

@media (max-width: 760px) {
  .page {
    padding: 36px 20px;
  }
}

.article-card {
  display: block;
  border-radius: 22px;
  background: #ffffff;
  padding: 22px;
  margin: 16px 0 14px;
  color: #111;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
  transition: transform 0.16s ease;
}

.article-card:hover {
  transform: translateY(-2px);
}

.step-card img {
  width: 100%;
  max-width: 540px;
  height: auto;
  display: block;
  margin: 18px auto 0;
  border-radius: 18px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

</style>