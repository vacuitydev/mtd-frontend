import axios from "axios";
const CREATED_DOCUMENT_URL= 'http://localhost:3001/converter/create'
export const getCreatedPdf = ({name, experience, education, projects, languages, skills, templateId})=>{
    return axios({
        method:"POST",
        url:CREATED_DOCUMENT_URL,
        data:{
            details:{
                name,
                experience,
                education,
                projects,
                languages,
                skillset:skills,
                templateId
            },
            getDocx: false
        },
        headers:{
            'content-type': 'application/json',
        }
    }).then(result=>{
        return result.data.pdf
    })
}
export const getCreatedDocx = ({name, experience, education, projects, languages, skills, templateId})=>{
    return axios({
        method:"POST",
        url:CREATED_DOCUMENT_URL,
        data:{
            details:{
                name,
                experience,
                education,
                projects,
                languages,
                skillset:skills,
                templateId
            },
            getDocx: true
        },
        headers:{
            'content-type': 'application/json',
        }
    }).then(result=>{
        return result.data.docx
    })
}