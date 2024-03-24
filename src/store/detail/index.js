//detail模块的小仓库
import { reqDetailList, reqAddOrUpdateCart } from '@/api';
let state = {
     //商品详情的数据
     detailInfo: {}
};
let mutations = {
     GETDETAILINFO(state, detailInfo) {
          state.detailInfo = detailInfo;
     }
};
let actions = {

     async getDetailInfo({ state, commit, dispatch }, skuId) {
          //商品详情请求，需要携带商品ID
          // let result = await reqDetailList(skuId);
          let result = {
               "code": 200,
               "message": "成功",
               "data": {
                    "valuesSkuJson": "{\"5|7\":4,\"6|7\":5,\"5|8\":6,\"6|8\":7}",
                    "price": 999,
                    "categoryView": {
                         "id": 61,
                         "category1Id": 2,
                         "category1Name": "服饰",
                         "category2Id": 13,
                         "category2Name": "童装",
                         "category3Id": 61,
                         "category3Name": "上衣"
                    },
                    "spuSaleAttrList": [
                         {
                              "id": 3,
                              "spuId": 2,
                              "baseSaleAttrId": 1,
                              "saleAttrName": "颜色",
                              "spuSaleAttrValueList": [
                                   {
                                        "id": 5,
                                        "spuId": 2,
                                        "baseSaleAttrId": 1,
                                        "saleAttrValueName": "黑色",
                                        "saleAttrName": "颜色",
                                        "isChecked": "0"
                                   },
                                   {
                                        "id": 6,
                                        "spuId": 2,
                                        "baseSaleAttrId": 1,
                                        "saleAttrValueName": "白色",
                                        "saleAttrName": "颜色",
                                        "isChecked": "1"
                                   }
                              ]
                         },
                         {
                              "id": 4,
                              "spuId": 2,
                              "baseSaleAttrId": 2,
                              "saleAttrName": "版本",
                              "spuSaleAttrValueList": [
                                   {
                                        "id": 7,
                                        "spuId": 2,
                                        "baseSaleAttrId": 2,
                                        "saleAttrValueName": "版本一",
                                        "saleAttrName": "版本",
                                        "isChecked": "1"
                                   },
                                   {
                                        "id": 8,
                                        "spuId": 2,
                                        "baseSaleAttrId": 2,
                                        "saleAttrValueName": "版本二",
                                        "saleAttrName": "版本",
                                        "isChecked": "0"
                                   }
                              ]
                         }
                    ],
                    "skuInfo": {
                         "id": 5,
                         "spuId": 2,
                         "price": 129,
                         "skuName": "婴儿暖手宝冬季男女宝宝手套加厚保暖毛绒可爱挂脖护手套",
                         "skuDesc": "婴儿暖手宝冬季男女宝宝手套加厚保暖毛绒可爱挂脖护手套",
                         "weight": "1.00",
                         "tmId": 1,
                         "category3Id": 61,
                         "skuDefaultImg": require('../../assets/6.jpg'),
                         "isSale": 1,
                         "createTime": "2021-12-10 09:31:42",
                         "skuImageList": [
                              {
                                   "id": 23,
                                   "skuId": 5,
                                   "imgName": "2b78b6fdabfd2fbe.jpg",
                                   "imgUrl": require('../../assets/6.jpg'),
                                   "spuImgId": 7,
                                   "isDefault": "1"
                              },
                              {
                                   "id": 24,
                                   "skuId": 5,
                                   "imgName": "5d5c57ab443f5fbb.jpg",
                                   "imgUrl": require('../../assets/6.jpg'),
                                   "spuImgId": 8,
                                   "isDefault": "0"
                              },
                              {
                                   "id": 25,
                                   "skuId": 5,
                                   "imgName": "cef3c55b8caad783.jpg",
                                   "imgUrl": require('../../assets/6.jpg'),
                                   "spuImgId": 9,
                                   "isDefault": "0"
                              },
                              {
                                   "id": 26,
                                   "skuId": 5,
                                   "imgName": "6eaaecc91b9ad059.jpg",
                                   "imgUrl": require('../../assets/6.jpg'),
                                   "spuImgId": 10,
                                   "isDefault": "0"
                              },
                              {
                                   "id": 27,
                                   "skuId": 5,
                                   "imgName": "b7bea7af48e935fd.jpg",
                                   "imgUrl": require('../../assets/6.jpg'),
                                   "spuImgId": 11,
                                   "isDefault": "0"
                              }
                         ],
                         "skuAttrValueList": [
                              {
                                   "id": 17,
                                   "attrId": 106,
                                   "valueId": 176,
                                   "skuId": 5,
                                   "attrName": "手机一级",
                                   "valueName": "安卓手机"
                              },
                              {
                                   "id": 18,
                                   "attrId": 107,
                                   "valueId": 177,
                                   "skuId": 5,
                                   "attrName": "二级手机",
                                   "valueName": "小米"
                              },
                              {
                                   "id": 19,
                                   "attrId": 23,
                                   "valueId": 14,
                                   "skuId": 5,
                                   "attrName": "运行内存",
                                   "valueName": "4G"
                              },
                              {
                                   "id": 20,
                                   "attrId": 24,
                                   "valueId": 82,
                                   "skuId": 5,
                                   "attrName": "机身内存",
                                   "valueName": "128G"
                              }
                         ],
                         "skuSaleAttrValueList": [
                              {
                                   "id": 9,
                                   "skuId": 5,
                                   "spuId": 2,
                                   "saleAttrValueId": 6,
                                   "saleAttrId": 1,
                                   "saleAttrName": "颜色",
                                   "saleAttrValueName": "黑色"
                              },
                              {
                                   "id": 10,
                                   "skuId": 5,
                                   "spuId": 2,
                                   "saleAttrValueId": 7,
                                   "saleAttrId": 2,
                                   "saleAttrName": "版本",
                                   "saleAttrValueName": "4G+128G"
                              }
                         ]
                    }
               },
               "ok": true
          }
          console.log(result)
          // result = {data:{
          //           categoryView:{
          //                category1Id:2,
          //
          //           }
          //      }}
          // if (result.code == 200) {
               commit('GETDETAILINFO', result.data);
          // }
     },
     //加入购物车|将来修改商品个数的地方,右侧是载荷对象【两个K,两个V】
     async addOrUpdateCart({ state, commit, dispatch }, { skuId, skuNum }) {
          //底下即为：加入购物车(修改商品个数)的请求,参数顺序不能瞎写
          let result = await reqAddOrUpdateCart(skuId, skuNum);

          if (result.code == 200) {
               //如果加入购物车成功,返回promise即为成功
               return "ok";
          } else {
               //如果加入购物车失败，返回失败的Promise
               return Promise.reject();
          }
          //思考问题:目的是前端把商品的ID、商品个数传递给服务器【人家服务器，兄弟我收到了,没有额外的给你传递其余的数据】
          //想的问题:豪哥不对，咱们以前经常commit条件mutation存储数据【没有返回数据，没有数据可存储】,没有需要提交mutation让仓库
          //存储数据
          //第一种解决方案code,完全可以！！！！

     }
};
//项目中仓库的getters为了简化数据而生【组件获取数据更加方便】
let getters = {
     //面包屑的数据
     categoryView(state) {
          //研究这个问题:
          //起始状态:state.detailInfo起始状态空对象,空对象.categoryView->undefined
          //当服务器数据回来之后state.detailInfo,并非空对象,获取的即为服务器返回的数据{7个K}
          //当前属性值:服务器的数据有值，用服务器的。服务器数据没有回来至少有一个空对象兜底【不能undefined兜底】
          return state.detailInfo.categoryView || {}
     },
     //商品信息的数据
     skuInfo() {
          return state.detailInfo.skuInfo || {}
     },
     //商品销售属性列表的数据
     spuSaleAttrList() {
          return state.detailInfo.spuSaleAttrList || []
     }
};

//对外暴露
export default {
     state,
     mutations,
     actions,
     getters
}