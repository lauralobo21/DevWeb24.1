import ContadorRedux from "./ContadorRedux"
import store from "./store/store"
import { Provider } from "react-redux"


const PrincipalRedux = () => {
    return (
        <>
            <Provider store={store} />
            

        </>
    )
}

export default PrincipalRedux