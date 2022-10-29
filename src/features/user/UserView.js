import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

export const UserView = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect( () => {
        dispatch(fetchUsers())
    },[])
    
    return (
        <div>
            <h2>List of users</h2>
            {user.loading && <>Loading</>}
            {!user.loading && user.error && <>user.error</>}
            {!user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map(user => (<li key={user.id}>{user.name}</li>))
                    }
                </ul>
            ) : null}
        </div>
    )
}