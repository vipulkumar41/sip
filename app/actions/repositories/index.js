export const sipCalculatorRepo = data =>{
    return axios({
        method:'GET',
        url:'http://localhost:5000/sipCalculator',
        data:data
    })
}