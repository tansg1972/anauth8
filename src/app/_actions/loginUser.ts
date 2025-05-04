import { redirect } from 'next/navigation'
import React from 'react'

export default function loginUser(prev:unknown, forms:FormData) {
    console.log(forms.get("inputusername"))
    console.log(forms.get("inputuserpass"))
    if(forms.get("inputusername") === "tan"){
        redirect("/user")
    }
    
    return {}
}
