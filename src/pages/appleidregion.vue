<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>如何查看Apple ID地区</h1>

    <section class="step-card">
      <h2>1. 在iPhone上打开”设置“App</h2>
    </section>

    <section class="step-card">
      <h2>2. 按照红框顺序点击</h2>
      <img src="/resources/iPhone/appleid/appleid-region1.png" alt="region1" />
      <p>随后根据弹出窗口点击 检视账号</p>
    </section>

    <section class="step-card">
      <h2>3. 在“国家/地区”处显示Apple ID地区</h2>
    <img src="/resources/iPhone/appleid/appleid-region2.png" alt="region2" />
      <p>不同地区Apple ID在App Store中显示的App版本不同，请注意甄别。</p>
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

.step-card img {
  width: 100%;
  max-width: 540px;
  height: auto;
  display: block;
  margin: 18px auto 0;
  border-radius: 18px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
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

.article-card p {
  margin: 0;
  font-size: 1rem;
  text-align: center;
}

</style>