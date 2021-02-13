const unqID = UniquIdSearch( (uid) => {
    let user = await foRegister.find()
          if (req.query.uniqID) {
              user = await foRegister.find({ uniqID: req.query.uniqID })
          }
});

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result)
    return result;
 }
 

