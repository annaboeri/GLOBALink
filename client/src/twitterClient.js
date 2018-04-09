import Twitter from 'twitter'
import dotenv from 'dotenv'

dotenv.config()

const twitterClient = new Twitter({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret:  process.env.CONSUMER_SECRET,
	access_token_key:  process.env.ACCESS_TOKEN_KEY,
	access_token_secret:  process.env.ACCESS_TOKEN_SECRET
  })

  
//   client.get('https://api.twitter.com/1.1/trends/closest.json?lat=37.781157&long=-122.400612831116', function(error, tweets, response) {
//     if(error) throw error;
//     console.log(tweets);  // The favorites. 
//     console.log(response);  // Raw response object. 
//   });

//   twitterClient.fetchTweets = function(){
// 	return this.({ 
// 	 method:'get',
// 	 url: 'https://api.twitter.com/1.1/trends/closest.json?lat=37.781157&long=-122.400612831116',
// 	}) 
// }

export default twitterClient