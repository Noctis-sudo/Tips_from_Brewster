<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1></h1>

    <section v-if="props.kind === 'card'">
        <h2>设置交通卡或八达通</h2>
        <section class="step-card">
            <p>1. 在iPhone中打开“钱包”App</p>
        </section>
        <section class="step-card">
            <p>2. 在主页中点击 +</p>
            <img class="guide-image" src="/resources/iPhone/nfc/1.jpg">
        </section>
        <section class="step-card">
            <p>3. 选择公交卡</p>
            <img class="guide-image" src="/resources/iPhone/nfc/3.jpg">
        </section>
        <section class="step-card">
            <p>4. 在列表中找到想要添加的卡片例如上海公交卡或八达通（列表底部）</p>
            <img class="guide-image" src="/resources/iPhone/nfc/2.jpg">
            <img class="guide-image" src="/resources/iPhone/nfc/4.jpg">
        </section>
        <section class="step-card">
            <p>5. 跟随系统提示为卡片增值</p>
        </section>
    </section>

    <section v-if="props.kind == 'where' ">
        <h2>我在哪里可以使用Apple Pay和公交卡服务？</h2>
        <section class="step-card">
            <section class="step-card">
                <h2>在中国大陆：</h2>
                <section class="step-card">
                    <p>此标识可以让你在不同城市使用上海公交卡进行支付公交费用</p>
                    <img src="/resources/iPhone/nfc/chinatunion.png">
                    <p>意味着你可以使用上海的公交卡在省内各市及全国300多个城市刷卡乘坐公交和地铁例如：济南市</p>
                </section>
            </section> 
        </section>

        <section class="step-card">
            <section class="step-card">
                <h2>在香港：</h2>
                <p>你可隨時隨地以常用的信用卡、扣帳卡或提款卡为八達通增值，不必排隊，也無需手續費，還可隨時查看餘額。</p>
            </section> 
            <section class="step-card">
                <p>可以在任何有八达通标识的位置使用八达通</p>
                <p>你可以将现有八达通卡片添加至iPhone或为其增值</p>
                <a href="https://support.apple.com/zh-cn/guide/iphone/iphc90580097/26/ios/26" target="_blank" rel="noopener noreferrer" class="article-card">
                <p>详见此处，请往下翻阅来观看视频</p>
                </a>
            </section>
        </section>
    </section>

  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  kind: {
    type: String,
    default: 'card'
  }
})

const router = useRouter()
const type = 'button'

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

.step-card img,
.guide-image {
  width: 100%;
  max-width: 420px;
  height: auto;
  display: block;
  margin: 18px auto 0;
  border-radius: 18px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

</style>