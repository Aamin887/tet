const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

//user data
const user = {
    name: 'Amin',
    post: 'CEO'
}

const posts = [

    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
    
]

app.get('/', (req, res) => {
    res.render('pages/index', {
        user,
        posts
    })
})


app.listen(8080, ()=> {
    console.log('server is active on port 8080');
})