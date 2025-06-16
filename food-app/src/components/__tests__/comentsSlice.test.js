import reducer, {fetchComents} from "../../features/coments/comentsSlice"

describe('comentsSlice',()=>{
    const initialState={
        loading:false,
        coments:[],
        error:''
    }

    it('should handle fetchComents',()=>{
        const action={type:fetchComents.pending.type}
        const state=reducer(initialState,action);
        expect(state).toEqual({
            loading:true,
            coments:[],
            error:''            
        })
    })
    it('should handle fetchComents.fulfilled',()=>{
        const mockRecipe=[{id:1,title:'mock'}];
        const action={type:fetchComents.fulfilled.type, payload:mockRecipe}
        const state=reducer(initialState,action);
        expect(state).toEqual({
            loading:false,
            coments:mockRecipe,
            error:''
        });
    })
    it('should handle fetchComents.rejected',()=>{
        const action={
            type:fetchComents.rejected.type,
            error:{message:'API failed'}
        };
        const state=reducer(initialState,action)
        expect(state).toEqual({
            loading:false,
            coments:[],
            error:'API failed'
        })
    })
})