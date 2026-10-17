async function getCurrencyData() {
    var currencyApiKey='f0ce27e417-1c2abb4915-tmjbms'
    var  currencyAPIUrl=`https://api.fastforex.io/fetch-multi?from=USD&to=EGP,SAR,EUR&api_key=${currencyApiKey}`

    var  response =await fetch(currencyAPIUrl)
    var data=await response.json()
 var rates = [
        { code: 'USD', price: data.results.EGP },
        { code: 'SAR', price: data.results.EGP / data.conversion_rates.SAR},
        { code: 'EUR', price: data.results.EGP /data.conversion_rates.EUR}
    ]
    for(var i=0;i<rates.length;i++){
        var currrencySection=document.createElement('section')
       currrencySection.classList.add('row')

var currencyDetails=`<h4 class="col-6">${rates[i].code}</h4><h4 class="col-6">${rates[i].price.toFixed(2)} EGP</h4>`
currrencySection.innerHTML=currencyDetails
document.getElementById('currency').appendChild(currrencySection)


    }

}
getCurrencyData()