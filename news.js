async function getNewsData(category) {
    var newsApiKey = 'pub_21a668f55ce347f7baf13d13774b59c2'
   var newsApiCountry = 'eg'
   var newsApilanguage='ar'
var newsApiUrl = `https://newsdata.io/api/1/latest?apikey=${newsApiKey}&country=${newsApiCountry}&language=${newsApilanguage}&category=${category}`
    console.log(newsApiUrl)
   var response = await fetch(newsApiUrl)
    var data = await response.json()
    console.log(data)
    for (var i= 0; i<data.results.length;i++) {
        var articleRow=document.createElement('section')
         articleRow.classList.add('col-3')
        var article=`<img class="img-fluid" src="${data.results[i].image_url}">
            <article class="row mt-2">
                <p class="col-6">${data.results[i].pubDate}</p>
                <p class="col-6">
                    <span class="badge bg-success float-end">${data.results[i].source_name}</span>
                </p>
            </article>
            <h4>${data.results[i].title}</h4>`
            articleRow.innerHTML=article
    document.getElementById(`${category}-news`).appendChild(articleRow)
          
           
        
        }
    

            
}
getNewsData()



