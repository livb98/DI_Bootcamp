import { useEffect, useState } from "react"
interface Data  {
    id: number,
    name: string,
    username: string

}

const Fetch = () => {
    async function fetchUsers(): Promise<Data[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();
        return data;
      }
    const [users, setUsers] = useState<Data[]>([]);
    useEffect(() => {
      fetchUsers().then((data) => setUsers(data));
    }, []);


    return (
        <>
        <div>
            <div>
                {users.map((user)=> (
                    <div key={user.id}>
                        {user.name}
                        {user.username}
                    </div>
                ))}
            </div>
        </div>
        </>
    )

}

export default Fetch