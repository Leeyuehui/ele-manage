/* 
    ! 作为shop的状态管理              
*/

import {
    SHOP_ADD,
    SHOP_DEL,
    SHOP_MODIFY,
    SHOP_QUERY
} from  '../../store/actiontype'

import request from '../../utils/request'

export default {
    state: {
        data : null
    },
    actions: {
        async add ({ commit },payload){
            // 发送数据请求
            const result = await request({
                url: '/shop',
                data: payload,
                method: 'POST'
            })
            commit({
                type: SHOP_ADD,
                payload: result.data
            })
        },
        del ({ commit }) {

        },
        modify ({ commit }) {

        },
        query ({ commit }) {

        }
    },
    mutations:{
        SHOP_ADD( state,action ){
            state.data = action.payload
        }
    }
}