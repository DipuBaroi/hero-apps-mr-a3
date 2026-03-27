export const getInstalls =()=>{
    const installs = localStorage.getItem('installs')
    if(installs) return JSON.parse(installs)
        return []
}
export const addInstall = app =>{
    const installs = getInstalls()
    const isExist = installs.find(p=> p.id === app.id)
    if(isExist) return console.log('App already Installed');
    installs.push(app)
    // console.log(installs);
    localStorage.setItem('installs', JSON.stringify(installs))
}

export const removeInstall = (id)=>{
    const installs = getInstalls()
    const remainingInstalls = installs.filter(i=> i.id !== id)
    localStorage.setItem('installs', JSON.stringify(remainingInstalls))
}