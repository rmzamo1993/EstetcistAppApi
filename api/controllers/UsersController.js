/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    RegisterUser:async function(req,res){
        var user=req.allParams();
        var db = sails.getDatastore().manager;
        var guid= await sails.helpers.guidGenerator();
        sails.log.debug(guid);
        db.collection('users').insertOne( {_id:guid, name: user.name, surname: user.surname,phone:user.phone,email:user.email
        ,numberPhoneVerified:false,lgpdAccepted:user.lgpdAccepted,lgpdAcceptedTime:user.lgpdAcceptedTime,
        registerDate:user.registerDate,age:user.age,pwd:user.pwd},function(err,user){
            sails.log.debug(user);
             if (err) {
                 return res.json({
                     result: "Error",
                     error:err
                 });
             }
             if (user === undefined) {
                 return res.notFound();
             } else{
                 return res.json({
                    result: "Ok",
                    error:""
                 });
             }
         });
    },

    CheckEmailExists:async function(req,res){
        var user=req.allParams();
        var db = sails.getDatastore().manager;
        db.collection('users').findOne( {email:user.email},function(err,user){
            sails.log.debug(user);
             if (err) {
                 return res.json({
                     result: "Error",
                     error:err
                 });
             }
             if (user == null) {
                return res.json({
                    result: "KO",
                    error:""
                 });
             } else{
                 return res.json({
                    result: "OK",
                    error:""
                 });
             }
         });
    },

    CheckPhoneExists:async function(req,res){
        var user=req.allParams();
        var db = sails.getDatastore().manager;
        db.collection('users').findOne( {phone:user.phone},function(err,user){
            sails.log.debug(user);
             if (err) {
                 return res.json({
                     result: "Error",
                     error:err
                 });
             }
             if (user == null) {
                return res.json({
                    result: "KO",
                    error:""
                 });
             } else{
                 return res.json({
                    result: "OK",
                    error:""
                 });
             }
         });
    }

};

