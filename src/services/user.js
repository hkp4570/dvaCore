
export function getUser(){
    return fetch('http://localhost:3001/getUser',{
        method: 'post',
    }).then(res => res.json()).then(data => data)
}
