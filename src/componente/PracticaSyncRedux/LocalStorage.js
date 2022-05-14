export const guardarDatos =(state)=>{
    localStorage.setItem('citas', JSON.stringify(state))
}

export const obtenerDatos=()=>{
    const citasGuardas = localStorage.getItem('citas')
    if(citasGuardas === null){
        return undefined
    }
    return JSON.parse(citasGuardas)
}