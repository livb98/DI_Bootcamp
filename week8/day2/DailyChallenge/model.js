const {db} = require('./config')

const _register = (username, password)=> {
    try {
        const hashedPassword = bcrypt.hash(password, 10); 
         db.createUser(username, hashedPassword);
        
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error( error);
        res.status(500).json({ error });
      }
}

const _login = (username, password) => {
    try {
        const user =  db.getUserByUsername(username);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        
        const passwordMatch =  bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error });
        }
        
        res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        console.error( error);
        res.status(500).json({ error });
      }
}

const _getUser = () => {
    return db('users')
    .select('*')
}

const _getUserById = (id) => {
    try {
        const user = db.getUserById(id);
        if (!user) {
          return res.status(404).json({ error  });
        }
        
        res.status(200).json(user);
      } catch (error) {
        console.error( error);
        res.status(500).json({ error });
      }
}

module.exports = {_getUser, _register, _login, _getUserById}