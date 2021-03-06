import {URL_ROOT, PACIENTE_BY_DNI} from 'services/settings.js'

const validate = apiResponse => {
    console.log(apiResponse)
    return apiResponse
}

export default async function getPaciente({dni, accessToken}){
    const request = new Request(URL_ROOT+ PACIENTE_BY_DNI +String(dni)+"/", {
        method: 'GET',
        headers: new Headers({ 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer '+ accessToken,
            }), 
    })

    return await fetch(request)
    .then(r => r.json())
    
}