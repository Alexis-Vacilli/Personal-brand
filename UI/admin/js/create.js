const article = document.querySelector('.card-article');

const DOMstrings = () => {
    
}

const renderArticles =  (doc) => {

    let article = document.querySelector('.articles');
    let image = document.createElement('img');
    let title = document.createElement('h4');
    let body = document.createElement('p'); 
}

const loader = document.querySelector('.loader');
loader.style.display = 'none';

const form = document.querySelector('#add-blog-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;
    const img = e.target.elements.file.files[0];
    const storage = str.ref(`images/${img.name}`);
    loader.style.display = "flex";
    form.style.display = 'none';
    storage.put(img).then(() => {
        console.log(`byakunze`);
        storage.getDownloadURL().then((URL) => {
            console.log(URL);
            loader.style.display = 'none'
            db.collection('Articles').doc(id).set({
                title: form.title.value,
                body: form.body.value,
                image: URL,
                timestamp: Date.parse(new Date())
            }).then(() => {
                    alert('data saved successful!');
                    location.href=`../pages/blog.html`;
                }).catch((error) => {
                    alert(error);
                })

        })
    })
    // 
    
    
    // db.collection('Articles').doc(id).set(data).then(() => {
    //     alert('data saved successful!');
    //     location.assign(`../blog.html#${id}`);
    // }).catch((error) => {
    //     alert(error);
    // })
})


// Logging out 

const logout = document.querySelector('.logout');


logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log(`Logged out!`);
        location.href = `../pages/index.html`;
        
    })
})

