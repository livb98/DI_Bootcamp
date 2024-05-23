import React from 'react';
import Todo from './TodoApp';

type ListProps = {
    id: string;
    text: string;
};

interface ListComponentProps {
    items: ListProps[];
}

const List = ({ items }: ListComponentProps) => {
    const renderItems = () => (
        // <ul>
        //     {items.map((item) => (
        //         <li key={item.id}>{item.text}</li>
        //     ))}
        // </ul>
        <ul>
          {
            items.map((item) => {return(
              <li key={item.id}>{item.text}</li>
            )})
          }
        </ul>
    );

    return (
        <div>
            <h2>My List</h2>
            {renderItems()}
            <Todo arrItem={items} />
        </div>
    );
};

export default List;
