import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id: "1", title: "animal 1", description:"Cat"},
    {id: "2", title: "animal 2", description:"Dog"},
    {id: "3", title: "animal 3", description:"Bird"},
    {id: "4", title: "animal 4", description:"Fish"},
    {id: "5", title: "animal 5", description:"Snake"},
];

const animalsSlice = createSlice({
    //I need it: name, initialState, reducers
    name: "animals",
    initialState,
    reducers:{
        //addAnimal
        //deleteAnimal
        //updateAnimal
    }
});

export default animalsSlice.reducer;