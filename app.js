
    axios.get(
        'https://direto-tweet.herokuapp.com/9/',
        {
            headers : { Authorization : "Mq6Rbkubf8kQBLa6" }
        })
        .then(response => listaTweets(response.data))
        .catch(error => console.log(error))
        const listaTweets = (tweets) => {
          console.log(tweets)
          const ulTweets = document.getElementById('ulTweets')
          
          const conteudo = document.getElementById('conteudo')
          tweets.map(t=> {
            
            const div = document.createElement('div')
            div.classList.add('col-lg-4')
            conteudo.appendChild(div)
            
            const img = document.createElement('img')
            img.src = `${t.image_url}`
            img.classList.add('img_div')
            div.appendChild(img)

            const h6 = document.createElement('h6')
            h6.innerHTML = `${t.created_at}`
            div.appendChild(h6)

            const p = document.createElement('p')
            p.innerHTML = `${t.text}`
            div.appendChild(p)
        })
        }
        
