let event=[{startDate: "2022-06-08",
endDate: "2022-06-13",}]

let z = new Date().toISOString().slice(0, 10)

let ans= event.filter((e)=> {
    let x = new Date(e.startDate);
    let y = new Date(e.endDate);
    z = new Date(z);
    return +x<=+z && +z<=+y
    
    
  })

  console.log(ans)