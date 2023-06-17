function HomePage({user}){
    console.log(user);
    return(
        <div>
            <p>Welcome {user.name}</p>
        </div>
    )
}

export default HomePage