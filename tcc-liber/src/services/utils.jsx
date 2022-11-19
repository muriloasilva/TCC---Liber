import { useEffect } from "react"
import { useState } from "react"

export const current = new Date()


export function Dia(){
    if (current.getDate() < 10){
        const dia = `0${current.getDate()}`
        return dia
    }else{
        const dia = current.getDate()
        return dia
    }
}

export function Mes(){
    if ((current.getMonth() + 1) < 10){
        const mes = `0${current.getMonth()+1}`
        return mes
    }else{
        const mes = current.getMonth()+1
        return mes
    }
}

export function Data(){

    const data = `${Dia()}/${Mes()}/${current.getFullYear()}`

    return data
}