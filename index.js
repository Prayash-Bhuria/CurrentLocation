const glocation=document.getElementById('getlocation')


async function getdata(lat,long)
{  const promise= await fetch
    (
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=bb639d61adb44b869b4cdcef359f4b5c`
    )
    return promise.json()
};


async function gotlocation(position)
{
    console.log(position)
    const result= await getdata(
        position.coords.latitude,position.coords.longitude
    );
    console.log(result)
    console.log(`${result.features[0].properties.state_district},${result.features[0].properties.state},${result.features[0].properties.country}`)
}

function failedtogetlocation()
{
    console.log("There was an issue")
}

glocation.addEventListener('click',async()=>
{
    navigator.geolocation.getCurrentPosition(gotlocation,failedtogetlocation)
})