import reducer,{fetchProducts} from "../../features/products/productsSlice";

describe('productsSlice',()=>{
    const initialState={
        loading:false,
        productb:[],
        error:''
    };

    it('should handle fetchProducts.pending',()=>{
        const action={type:fetchProducts.pending.type};
        const state=reducer(initialState,action);
        expect(state).toEqual({
            loading:true,
            productb:[],
            error:''
        })
    });

    it('should handle fetchProducts.fulfilled',()=>{
        const mockProducts=[{id:1,title:'Mock'}];
        const action = {type:fetchProducts.fulfilled.type,payload:mockProducts};
        const state=reducer(initialState,action);
        expect(state).toEqual({
            loading:false,
            productb:mockProducts,
            error:''
        })
    })
    it('should handle fetchProducts.rejected',()=>{
        const action={
            type:fetchProducts.rejected.type,
            error:{message:'API faild'}
        };
        const state=reducer(initialState,action);
        expect(state).toEqual({
            loading:false,
            productb:[],
            error:'API faild'
        })
    })
});