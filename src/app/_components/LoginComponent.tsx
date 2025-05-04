"use client"

import { useActionState } from "react"
import loginUser from "../_actions/loginUser"

export default function LoginComponent() {
    const [error, action] = useActionState(loginUser, {})
  return (
    <form action={action}>
        <div>
        <input type="text" name="inputusername" placeholder="enter username" className="border border-black"/>
        </div>
        <div>
        <input type="text" name="inputuserpass" placeholder="enter user password" className="border border-black" />
        </div>
        <div>
        <input type="submit" className="border border-black cursor-pointer" />
        </div>
           
          

    </form>
  
    

  )
}
