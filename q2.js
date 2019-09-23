class X{
    constructor(name,email,phoneno){
    this.name=name;
    this.email=email;
    this.phoneno=phoneno;
    }
  

    
}
class Y extends X{
    
    constructor(name,email,phoneno,addr){
        super(name,email,phoneno);
        this.addr=addr;
    }
}
var user1=new X('akash','ads',45677);
var user2=new Y('akash','ads',45677,'adsgyh');

console.log(user2);
