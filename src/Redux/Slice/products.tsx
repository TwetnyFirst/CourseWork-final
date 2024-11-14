import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";



export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async function(_,{rejectWithValue}){
        try{
            const response = await fetch('https://dummyjson.com/recipes');

            return response.json()

        }
        catch(error){
            return rejectWithValue((error as Error).message)
        }

    }

);

export const fetchOneProduct = createAsyncThunk(
    "products/fetchOneProduct",
    async function(id:any,{rejectWithValue}){
        try{
            const response = await fetch(`https://dummyjson.com/recipes/${id}`);

            return response.json()

        }
        catch(error){
            return rejectWithValue((error as Error).message)
        }

    }

);

const productsSlice = createSlice({
    name:'products',
    initialState:{
        status:'',
        arror:null,
        products:[],
        productsInCard:[],
        selectedPost:{},
        searchResoult:{}

    },
    reducers:{
        //LocalStorage redusers
        setItem(state:any){
            console.log(state);
            localStorage.setItem('cart',JSON.stringify(state));

        },
        getItem(state:any){
            if(localStorage.getItem('cart')){
                state.productsInCard = JSON.parse(localStorage.getItem('cart')!)// ВОПРОС!!!
            }
        },
        //cart redusers
        
        closeCard(){
            const card = document.querySelector('.card-wrap');
            card?.setAttribute('style','left:100%;');
        },
        showCard(){
            const card = document.querySelector('.card-wrap');
            card?.setAttribute('style','left:50%;');
        },
        addToCard(state:any,payload:any){
            if(state.productsInCard.find((elem:any) => elem.item.id === payload.payload.id)){
                const currentElem = state.productsInCard.find((elem:any) => elem.item.id === payload.payload.id);
                currentElem.count++
            }else{
                const objInCart = {
                    item:payload.payload,
                    count:1
                };
                state.productsInCard.push(objInCart);
            };
            productsSlice.caseReducers.setItem(current(state.productsInCard));
            

        },
        countPlus(state:any,payload:any){
            console.log(payload.payload);
            const currentElem = state.productsInCard.find((elem:any) => elem.item.id === payload.payload.item.id);
            currentElem.count++;
            console.log(currentElem);
            productsSlice.caseReducers.setItem(current(state.productsInCard));

        },
        countMinus(state:any,payload:any){
            const currentElem = state.productsInCard.find((elem:any) => elem.item.id === payload.payload.item.id);
            currentElem.count--;
            if(currentElem.count === 0){
                state.productsInCard.splice(state.productsInCard.findIndex((elem:any) => elem === currentElem),1);
            }
            productsSlice.caseReducers.setItem(current(state.productsInCard));

        },

        //Search redusers
        search(state:any,payload:any){
            state.searchResoult = state.products.recipes.filter((item:any) => item.name.toLowerCase().includes(payload.payload.toLowerCase()));
            console.log(state.searchResoult);
        }
        



    },
    extraReducers: (builder:any) => {
        return builder
        .addCase(fetchProducts.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state: any, {payload}: {payload: any}) => {
                state.status = "resolved";
                state.error = null;
                state.products = payload;
                console.log(state.products);
            })
            .addCase(fetchProducts.rejected, (state: any, {payload}: {payload: any}) => {
                state.status = "rejected";
                state.error = payload;
                state.products = [];
                
            })

            .addCase(fetchOneProduct.pending, (state:any , {payload}:{payload:any}) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchOneProduct.fulfilled, (state: any, {payload}: {payload: any}) => {
                state.status = "resolved";
                state.error = null;
                state.selectedPost = payload;
            })
    }
});

type TTest = {
    one:number[],
    two:{
        t:() => void
    }
}

const test: TTest ={
    'one':[1,2,3],
    'two':{
        't':() => null
    }
}

const {actions,reducer} = productsSlice;

export default reducer;

export const {closeCard,showCard,addToCard,countPlus,countMinus,setItem,getItem,search} = actions;