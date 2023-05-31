module.exports.profile = function(req,res){
    // return res.end('<h1> User Profile</h1>');

    return res.render('user_profile',{
        title: "User/Profile"
    });
}


// render the sign up page 
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign UP"
    });
}

// render the sign in page 
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    });
}

// get the sign up data 
module.exports.create = function(req,res){
    //TODO
}

// sign in and create a session for a user
module.exports.createSession= function(req,res){
    //TODO
}