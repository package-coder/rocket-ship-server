import { AuthChecker } from "type-graphql"
import { Context } from "./context"
import { auth_config } from "../constants"
import { verify } from "jsonwebtoken"


const AppAuthChecker: AuthChecker<Context> = async ({ context }, roles) => {

    const auth = context?.req?.get('authorization')
    const token = auth?.split(' ')[1]
    
    if(!auth || !token) {
      throw new Error('Not authenticated')
    }

    try {
      const payload = verify(token, auth_config.ACCESS_TOKEN_SECRET)
      if(!payload) throw new Error('Authentication Error')

      context.payload = payload as any
      
      if(roles.length != 0 && !roles.includes(context.payload?.user?.user_type as string))
        throw new Error('Forbidden')
    }
    catch(e) {
      console.error(e)
      throw new Error('Authentication Error')
    }
    
    return true;
}

export default AppAuthChecker