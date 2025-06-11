export const utilService ={
    verificationToken,
    
}

function verificationToken(){
    return Math.floor(100000 + Math.random( ) * 900000).toString()
}