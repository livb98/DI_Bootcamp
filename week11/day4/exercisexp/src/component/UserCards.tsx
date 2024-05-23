interface User {
    name: string,
    age: number
}

interface UserCardProps {
    user: User;
}

function UserCard({ user }: UserCardProps) {
    const msg = (name: string, age: number) => {
        if(!name && !age) {
           return `error`
        } else {
           return `${user.name} is ${user.age} years old`
        } 
    }
    return (
        <>
            <header>
                {msg(user.name, user.age)}
            </header>
        </>
    );
}

export default UserCard;
