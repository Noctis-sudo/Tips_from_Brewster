<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>{{ device }}</h1>

    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input :placeholder="`搜索 ${device} 使用帮助`" />
    </div>

    <section v-if="device === 'Windows'">
      <h2>Windows 帮助</h2>
      <div class="topics">
        <RouterLink to="/windows/vpn" class="topic-card">
          <div class="topic-icon">
            <img src="/resources/iPhone/VPN.png" alt="VPN" />
          </div>
          <p>VPN</p>
        </RouterLink>

      </div>
    </section>

  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  device: { type: String, default: 'Windows' }
})
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
  font-size: 1.1rem;
  max-width: 720px;
}

.search-box {
  margin-top: 36px;
  background: #f5f5f7;
  border-radius: 18px;
  padding: 18px 20px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.search-icon {
  font-size: 1.2rem;
}

.search-box input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
}

h2 {
  margin-top: 56px;
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.topics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.topic-card {
  min-height: 150px;
  border-radius: 22px;
  background: #f5f5f7;
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.topic-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 30px rgba(15, 15, 15, 0.08);
}

.topic-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: #fff;
  overflow: hidden;
  color: black;
}

.topic-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.topic-card p {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
}

.topic-card.disabled {
  cursor: default;
  opacity: 0.75;
}

.placeholder {
  margin-top: 40px;
  padding: 28px;
  background: #fff;
  border-radius: 24px;
  border: 1px solid #e5e5ea;
}

.placeholder h2 {
  margin-top: 0;
}

.placeholder p {
  color: #666;
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
</style>