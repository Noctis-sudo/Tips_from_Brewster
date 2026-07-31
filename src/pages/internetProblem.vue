<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>提示无法访问此网站</h1>

    <section class="step-card">
        <img src="/resources/problem/1.png" alt="Problem" />
      <p>浏览器中提示该报错</p>
    </section>

    <section class="step-card">
        <h2>打开VPN软件后打开然后关闭梯子</h2>
        <h2>详见下方视频</h2>
        <video class="responsive-video" src="/resources/problem/1.mp4" controls playsinline preload="metadata" />
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

@media (max-width: 800px) {
  .page {
    padding: 36px 20px;
  }
  .topics {
    grid-template-columns: 1fr;
  }
}
.category-card {
  height: 220px;
  border: none;
  border-radius: 28px;
  background: #f5f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 12px 30px rgba(15, 15, 15, 0.05);
}

.step-card .responsive-video {
  width: 100%;
  max-width: 100%;
  max-height: 60vh;
  height: auto;
  display: block;
  margin: 12px 0 0 0;
  border-radius: 12px;
  background: #000;
}

</style>
