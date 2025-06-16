import reducer, { fetchRecipes } from "../../features/recipes/recipesSlice"

describe('RecipesSlice',()=>{
    const initialState={
        loading:false,
        recipes:[],
        error:''
    }

    it('should handle fetchRecipes.pending',()=>{
        const action={type:fetchRecipes.pending.type};
        const state=reducer(initialState,action);
        expect(state).toEqual({
            loading:true,
            recipes:[],
            error:''
        })
    })
    it('should handle fetchRecipes.fulfilled',()=>{
        const mockRecipe=[{id:1,title:'mock'}];
        const action={type:fetchRecipes.fulfilled.type, payload:mockRecipe}
        const state=reducer(initialState,action);
        expect(state).toEqual({
            loading:false,
            recipes:mockRecipe,
            error:''
        });
    })
    it('should handle fetchRecipes.rejected',()=>{
        const action={
            type:fetchRecipes.rejected.type,
            error:{message:'API failed'}
        };
        const state=reducer(initialState,action)
        expect(state).toEqual({
            loading:false,
            recipes:[],
            error:'API failed'
        })
    })
})