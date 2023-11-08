import { useDispatch, useSelector } from "react-redux"
import { detailsSelector } from "./context/documentSlice"
// TODO implement auto refresh
export default function RefreshDocuments({children}){
    const dispatch = useDispatch()
    const details = useSelector(detailsSelector)

    return <>
        {children}
    </>
}