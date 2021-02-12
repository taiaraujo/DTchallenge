
axios.get(
    'https://direto-tweet.herokuapp.com/9/',
    {
        headers : { Authorization : "Mq6Rbkubf8kQBLa6" }
    })
    .then(response => listaTweets(response.data))
    .catch(error => console.log(error))
    const listaTweets = (tweets) => {
        const ulTweets = document.getElementById('ulTweets')
        
        const conteudo = document.getElementById('conteudo')
        tweets.map(t=> {
            const textArray = t.text.split(" ");
            const isRT =  t.text.search("https://t.co/") > 0;
            
            const tweetUrl = isRT ? textArray[textArray.length-1] : 'https://twitter.com/CWDrive';
            const newText = isRT ? t.text.substring(t.text.search("https://t.co/"), 0) : t.text;

            const div = document.createElement('div')
            div.classList.add('col-lg-4')

            const a = document.createElement('a')
            div.classList.add('col-lg-4')
            a.setAttribute("href", tweetUrl)
            a.setAttribute("class", "tweet")

            conteudo.appendChild(div)
            div.appendChild(a);
            
            const img = document.createElement('img')
            img.src = `${t.image_url}`
            img.classList.add('img_div')
            a.appendChild(img)

            const h6 = document.createElement('h6')
            const date = new Date(t.created_at);
            h6.innerHTML = `${date}`
            a.appendChild(h6)

            const p = document.createElement('p')
            p.innerHTML = `${newText}`
            a.appendChild(p)
        })
    }
