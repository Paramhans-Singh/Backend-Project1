module.exports.home = function(req,res){
    // return res.end('<h1> Express is Running </h1>')
    return res.render('home',{
        title: "Home"
    });
}

// module.exports.actionName = function (req,res){}