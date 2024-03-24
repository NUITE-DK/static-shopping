<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <img src="./images/21.jpg" alt="" />
            <div class="like-text">
              <p>婴儿包屁衣纯棉衣服春秋季新生儿三角哈衣男女宝宝爬服春装</p>
              <h3>¥79.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/22.jpg" alt="" />
            <div class="like-text">
              <p>婴儿T恤春秋款纯棉长袖上衣男女宝宝纯色百搭打底衫内搭春装</p>
              <h3>¥59.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/23.jpg" alt="" />
            <div class="like-text">
              <p>新生儿连体衣婴儿衣服纯棉和尚服春秋款宝宝哈衣爬服春装打底</p>
              <h3>¥99.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/24.jpg" alt="" />
            <div class="like-text">
              <p>女宝宝上衣春秋款婴儿纯棉纱布长袖T恤洋气百搭外出春装打底</p>
              <h3>¥109.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/25.jpg" alt="" />
            <div class="like-text">
              <p>婴儿帽子外出防风帽春秋纯棉纱布公主帽女新生儿宝宝洋气护耳帽</p>
              <h3>¥59.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/26.jpg" alt="" />
            <div class="like-text">
              <p>婴儿连体衣春秋款纯棉纱布女宝宝长袖哈衣爬服洋气外出服春装</p>
              <h3>¥149.00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="less">
  .like {
        margin-top: 15px;
        margin-bottom: 25px;

        .py-container {
            width: 1200px;
            margin: 0 auto;

            .title {
                overflow: hidden;

                .fl {
                    float: left;
                    font-size: 20px;
                    line-height: 30px;
                }

                .fr {
                    float: right;
                    background-image: url(./images/icons.png);
                    width: 66px;
                    height: 25px;
                    background-position: 182px -104px;
                    line-height: 30px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #666;
                    text-decoration: none;
                }
            }

            .bd {
                .favourate {
                    border: 1px solid #e4e4e4;
                    overflow: hidden;
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: flex;

                    li {
                        height: 250px;
                        margin: 0 -1px;
                        overflow: hidden;
                        background: #fff;
                        position: relative;
                        width: 16.667%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;

                        img {
                            width: 142px;
                            height: 142px;
                            transition: all 400ms;

                            &:hover {
                                opacity: 0.8;
                                transform: scale(1.1)
                            }
                        }

                        .like-text {
                            padding: 0;
                            width: 142px;
                            border-right: 1px solid #e4e4e4;

                            p {
                                margin: 5px 0;
                            }

                            h3 {
                                color: #df3033;
                                font-size: 20px;
                                line-height: 30px;
                                margin: 9px 0;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
