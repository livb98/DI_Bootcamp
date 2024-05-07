import React from "react"

const Form = (props) => {
    let { handleSubmit } = props
    return (
        <>
            <header>Sample Form</header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                /><br></br>
                <label htmlFor="lastname">Last Name</label>
                <input
                    id="lastname"
                    type="text"
                /><br></br>
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                /><br></br>
                <div id='gender'>
                    <label htmlFor='male'>Male</label>
                    <input
                        id='male'
                        type='radio'
                        name='gender'
                        value='male'
                    />
                    <label htmlFor='female'>Female</label>
                    <input
                        id='female'
                        type='radio'
                        name='gender'
                        value='female'
                    />
                </div>
                <label htmlFor='destination'>Select your destination</label>
                <select id='destination'>
                    <option id='Thailand' value='Thailand'>Thailand</option>
                    <option id='Japan' value='Japan'>Japan</option>
                    <option id='Brazil' value='Brazil'>Brazil</option>
                </select><br></br>
                <div id='diet'> Dietary restriction: <br></br>
                    <label htmlFor='nut'>
                        <input
                            type='checkbox'
                            id='nut'
                            name='nut'
                            value='nut'
                        />
                        Nuts free
                    </label>
                    <label htmlFor='Vegan'>
                        <input
                            type='checkbox'
                            id='Vegan'
                            name='Vegan'
                            value='Vegan'
                        />
                        Vegan
                    </label>
                    <label htmlFor='lactose'>
                        <input
                            type='checkbox'
                            id='lactose'
                            name='lactose'
                            value='lactose'
                        />
                        Lactose free
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}


export default Form;