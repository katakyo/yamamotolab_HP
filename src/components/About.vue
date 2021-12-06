<template>
<v-container>
  <div class="About">
  <h1>研究内容</h1>
  <p>人工心臓など体内埋込み型医療機器に対する電磁環境を考慮した非接触エネルギー伝送や通信，乳がん診断や体脂肪厚計測をはじめとする電磁波の医療応用をメインテーマに， 通信用アンテナの開発など非医療分野も含め幅広く研究しています。人が質の高い生活を送るために必要不可欠な「医療」を電気電子情報工学の立場から支えています。</p>
  </div>
</v-container> 
</template>


<style lang="scss" scoped>

.About{
  margin-left:100px;
  margin-right:100px;
  h1 {
    position: relative;
    display: inline-block;
    padding: 0 55px;
  }

  h1:before, h1:after {
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 45px;
    height: 1px;
    background-color: black;
  }

  h1:before {
    left:0;
  }
  h1:after {
    right: 0;
  }
}

</style>