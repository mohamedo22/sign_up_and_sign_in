
let users=[];
function movetosignup()
{
    let signin_form = document.getElementById("signin");
    signin_form.style.transform = `translateX(400px)`;
    document.getElementById("navigate_con").style.left = "25vw";
    document.getElementById("signup-form").style.left= "6vw"
}
function movetosignin()
{
    let signin_form = document.getElementById("signin");
    signin_form.style.transform = ``;
    document.getElementById("navigate_con").style.left = "";
    document.getElementById("signup-form").style.left= "";
}
function adduser()
{
    let username = document.getElementById("username_textinput_of_signup");
    let password = document.getElementById("password_signup");
    let confirm_password = document.getElementById("confirm_password");
    if(username.value == "" || password.value == "" || confirm_password.value == "")
    {
        swal.fire({
            title:"Error!",
            icon:"error",
            text:"Please fill all fields"
        });
    }
    else
    {
        let look = true;
        for(let i=0 ; i<users.length ; i++)
        {
            if(users[i].username == username.value)
            {
                look = false;
            }
        }
        if(look == false)
        {
            swal.fire({
                title : "Error!",
                text:"this user is already taken",
                icon : "error"
            });
        }
        else
        {
            if(password.value == confirm_password.value)
            {
                let user = {
                    "username": username.value,
                    "password": password.value
                };
                users.push(user);
                swal.fire({
                    icon:"success",
                    title:"Success Process",
                    text:"The user Has been added"
                });
            }
            else
            {
                swal.fire({
                    icon:"error",
                    title:"Error!",
                    text:"This Passwords not match"
                });
            }
        }
    }
}
function login()
{
    let username = document.getElementById("username_textinput");
    let pass = document.getElementById("password");
    let look = false;
    for(let i = 0; i < users.length ; i++)
    {
        if( username.value == users[i].username && pass.value == users[i].password)
        {
            look = true;
        }
    }
    if(look)
    {
        swal.fire({
            icon:"success",
            text:"Welcome again"
        });
    }
    else
    {
        swal.fire({
            icon:"error",
            title:"error",
            text:"you are not user ¯\_(ツ)_/¯"
        });
    }
}