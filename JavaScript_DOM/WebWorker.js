var date=new Date()
postMessage(date.getSeconds()%6)
while(true){
    if(date.getSeconds()!=new Date().getSeconds())
    {
        date=new Date()
        postMessage(date.getSeconds()%6)
    }
}