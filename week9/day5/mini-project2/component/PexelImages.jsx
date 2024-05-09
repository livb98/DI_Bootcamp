import { createClient } from 'pexels';
import { useState, useEffect } from 'react';

const client = createClient('KFFRfvL9D18OxXsao0KC2WfF4c0YFAehDITqyX9ucZFLpnQ9DhUwMBEf');


const PexelImage = (props) => {
    const [images, setImages] = useState([])
    const [index, setIndex] = useState()

    useEffect(() => {
        fetchData();
      }, []);

    async function fetchData() {
        try {
          const response = await fetch('https://api.pexels.com/v1/search/?page=1&per_page=24&query=Moutain', {
            headers: {
              Authorization: 'KFFRfvL9D18OxXsao0KC2WfF4c0YFAehDITqyX9ucZFLpnQ9DhUwMBEf'
            }
          });
      
          const data = await response.json();
          const photos = await data.photos
          const src = await photos.map((item) => {
            return item.src
          
          })
          const url = await src.map((item, i) => {
            return item.tiny
            
          })
          const i = Object.keys(url)
          const y = i.forEach((item) => {
            setIndex(url[item])
            return Number(item);
            
          })
          setImages(url)


        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
      }

    return (
        <>
        <div>
        </div>
          <ul  >{images.map((item,i) => {
            return(
              <div key={i}>
                <img src={item} />
              </div>
            )
            
          })}

          </ul>

        </>
    )

}

export default PexelImage
