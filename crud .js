let fetchdata= async()=>{
    let url=`http://localhost:3000/`;
    let rse= await fetchdata(url,{method:"GET"})
    document.write(rse);       
}        