import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { addUser, fetchUsers } from "./usersSlice";

const Users = () => {
    const users = useSelector((state) => state.usersReducer.users);
    const status = useSelector((state) => state.usersReducer.status);
    const userNameRef = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (status === "loading") return <h2>Loading...</h2>;
    if (status === "failed") return <h2>Failed...</h2>;
    
    return (
        <>
            <div>
                <h2>Users</h2>
                <input ref={userNameRef} />
                <button onClick={() => dispatch(addUser(userNameRef.current?.value))}>Add User</button>
                {users.map((user) => (
                    <div key={user.id}> {user.name} </div>
                ))}
            </div>
        </>
    );
};

export default Users;
