//search模块的小仓库
import {reqSearchList} from '@/api'

let state = {
    //搜索模块返回的数据
    searchList: {}
};
let mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
let actions = {
    async getSearchList({state, dispatch, commit}, searchParams) {
        let result = await reqSearchList(searchParams);
        // if (result.code == 200) {
        result = {
            data: {
                goodsList: [
                    {
                        id: 4,
                        defaultImg: require('../../pages/search/images/4.jpg'),
                        attrs: null,
                        category1Id: null,
                        category1Name: null,
                        category2Id: null,
                        category2Name: null,
                        category3Id: null,
                        category3Name:null,
                        createTime: null,
                        hotScore:0,
                        price:159,
                        title:'婴儿连体衣拜年服冬季宝宝夹棉哈衣保暖棉服龙年红色喜庆过年衣服',
                    },
                    {
                        id: 5,
                        defaultImg: require('../../pages/search/images/5.jpg'),
                        attrs: null,
                        category1Id: null,
                        category1Name: null,
                        category2Id: null,
                        category2Name: null,
                        category3Id: null,
                        category3Name:null,
                        createTime: null,
                        hotScore:0,
                        price:159,
                        title:'婴儿连体衣拜年服冬季宝宝夹棉哈衣保暖棉服龙年红色喜庆过年衣服',
                    },
                    {
                        id: 6,
                        defaultImg: require('../../pages/search/images/6.jpg'),
                        attrs: null,
                        category1Id: null,
                        category1Name: null,
                        category2Id: null,
                        category2Name: null,
                        category3Id: null,
                        category3Name:null,
                        createTime: null,
                        hotScore:0,
                        price:159,
                        title:'婴儿连体衣拜年服冬季宝宝夹棉哈衣保暖棉服龙年红色喜庆过年衣服',
                    },
                    {
                        id: 8,
                        defaultImg: require('../../pages/search/images/8.jpg'),
                        attrs: null,
                        category1Id: null,
                        category1Name: null,
                        category2Id: null,
                        category2Name: null,
                        category3Id: null,
                        category3Name:null,
                        createTime: null,
                        hotScore:0,
                        price:159,
                        title:'婴儿连体衣拜年服冬季宝宝夹棉哈衣保暖棉服龙年红色喜庆过年衣服',
                    }

                ]
            }
        }
        commit('GETSEARCHLIST', result.data);
        // }
    }
};

//getters:仓库的计算属性
//项目中:vuex的getters,为了简化数据而生。
let getters = {
    //计算新的属性:state,当前小仓库的数据
    goodsList(state) {
        return state.searchList.goodsList;
    },
    //品牌的数据
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    //商品属性
    attrsList(state) {
        return state.searchList.attrsList;
    }
};

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}