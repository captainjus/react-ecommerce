class UserServiceFetch{
    addItem(){
        return fetch('http://localhost:8080/item/addItem',{
            method:"post",
        }).then(response => response.json())
    }
}

export default new UserServiceFetch();