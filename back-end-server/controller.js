const twitterAPI = require('./twitterAPI');

exports.getTweet = (req, res, next) => {
    let tweets = [];
    const pages = req.params.pages;
    const account = 'CWDrive';

    twitterAPI.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${account}&count=${pages}`, (err, data, response) => {      
        for(let eachData of data){
            tweets.push(eachData.id_str);
        }

        twitterAPI.get(`https://api.twitter.com/2/tweets?ids=${tweets}&expansions=attachments.media_keys&media.fields=url,preview_image_url&tweet.fields=created_at`, (err, data, response) => {
            tweets = [];
            for(i = 0; i < pages; i++){
                let twitPost = {
                    created_at : data.data[i].created_at,
                    text : data.data[i].text
                }
                if(data.includes.media[i].type === ('video')){
                    twitPost = {
                        ...twitPost,
                        image_url : data.includes.media[i].preview_image_url
                    }
                } else {
                    twitPost = {
                        ...twitPost,
                        image_url : data.includes.media[i].url
                    }
                }
                tweets.push(twitPost);
            }  
            return res.send(tweets);
        })
    })
}