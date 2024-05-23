type GreetingProps = {
    name: string
}

const Greeting = ({name}: GreetingProps) => {

    const greeting = () => {
        return `Hello ${name}`
    }

    // exercise
    return (
        <>
        {greeting()}
        </>
    )
}

export default Greeting