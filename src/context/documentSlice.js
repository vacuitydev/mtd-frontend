import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCreatedPdf } from "../services/document";
const initialState = {
  details: {
    name: "",
    experience: "",
    education: "",
    skills: "",
    projects: "",
    languages:"",
    tagline: "",
    lastUpdated: false,
    templateId: 0
  },
  pdf: {
    data: {
        created: false,
    },
    lastUpdated: false,
    inProgress: false
  },
};
export const getPdfs = createAsyncThunk("document/getPatched", async(_, {getState})=>{
    const details = detailsSelector(getState())
    console.log("Details", details)
    const created = await getCreatedPdf(details)
    return {
      created
    } 
})
const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    updateDetails: (state, action)=>{
        state.details = action.payload
        state.details.lastUpdated = new Date().toISOString()
    },
    updateTemplateId: (state, action)=>{
      state.details.templateId = action.payload
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getPdfs.pending, (state,_)=>{
        console.log("Getting the pdfs")
        state.pdf.inProgress= true
        
      })
      builder.addCase(getPdfs.fulfilled, (state,action)=>{
        state.pdf.inProgress= false
        console.log("Result of getpdfs", action)
      state.pdf.data.patched = action.payload.patched
      state.pdf.data.created = action.payload.created
      state.pdf.lastUpdated = new Date().toISOString()
    })
    builder.addCase(getPdfs.rejected, (state,action)=>{
      state.pdf.inProgress= false
      console.log("Result of getpdfs rejection", action)
  })
  }
});
export default documentSlice
export const detailsSelector =(state)=>{
    return state.document.details
}
export const pdfDataSelector = (state)=>{
  return state.document.pdf.data
}
export const isLoadingPdfSelector= (state)=>{
  return state.document.pdf.inProgress
}
export const {updateDetails, updateTemplateId} = documentSlice.actions