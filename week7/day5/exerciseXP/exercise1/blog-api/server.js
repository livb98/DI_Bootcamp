const express = require ('express')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.json()); 

app.listen(3000, () => {
    console.log('working');
})


const data = [
    {id: 1, title: 'AAA', content: 'aaaa'},
    {id: 2, title: 'BBB', content: 'bbbb'},
    {id: 3, title: 'CCC', content: 'cccc'},
    {id: 4, title: 'DDD', content: 'dddd'},
]

app.get('/posts', (req,res) => {
    res.json(data)
})

app.get('/posts/:id', (req,res) => {
    const {id} = req.params;
    const post = data.find((item) => item.id == id)
    if (!post){
        return res.status(404).json({message: 'not found'})
    }
    res.status(200) 
    res.json(post)
})

app.post('/posts', (req,res) => {
    const {id,title, content} =  req.body
    data.push(req.body)
    res.json(data)
})


app.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { title,content } = req.body;
    const index = data.findIndex((item) => item.id == id);
  
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
  
    data[index] = {
      ...data[index],
      title,
      content,
    };
  
    res.json(data);
  });


app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    const index = data.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
    data.splice(index, 1);
    res.json(data);
  });