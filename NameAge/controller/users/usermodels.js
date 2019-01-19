var fs = require('fs')
var db = require('../../models/conn')

var showInfo = require('./showInfo')
var addInfo = require('./addInfo')
var deleteInfo = require('./deleteInfo')
var updateInfo = require('./updateInfo')
var saveData = require('./saveData')
var validateData = require('./validateData')

module.exports={showInfo:showInfo,addInfo:addInfo,deleteInfo:deleteInfo,updateInfo:updateInfo,saveData:saveData,validateData:validateData}